<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

class Installer {
    private $errors = [];
    
    public function handleRequest() {
        try {
            $input = json_decode(file_get_contents('php://input'), true);
            $action = $input['action'] ?? '';
            
            switch ($action) {
                case 'system_check':
                    return $this->systemCheck();
                case 'test_database':
                    return $this->testDatabase($input['config']);
                case 'setup_database':
                    return $this->setupDatabase($input['config']);
                case 'setup_email':
                    return $this->setupEmail($input['config']);
                case 'create_admin':
                    return $this->createAdmin($input['config']);
                case 'finalize':
                    return $this->finalize();
                default:
                    throw new Exception('Invalid action: ' . $action);
            }
        } catch (Exception $e) {
            return ['success' => false, 'error' => $e->getMessage()];
        }
    }
    
    private function systemCheck() {
        $checks = [];
        $allPassed = true;
        
        // Check PHP version
        $phpVersion = phpversion();
        $checks['php_version'] = [
            'name' => 'PHP Version',
            'required' => '7.4.0',
            'current' => $phpVersion,
            'passed' => version_compare($phpVersion, '7.4.0', '>=')
        ];
        
        if (!$checks['php_version']['passed']) {
            $allPassed = false;
        }
        
        // Check required extensions
        $requiredExtensions = ['pdo', 'pdo_mysql', 'json', 'mbstring', 'openssl'];
        foreach ($requiredExtensions as $ext) {
            $checks['ext_' . $ext] = [
                'name' => 'PHP Extension: ' . $ext,
                'required' => 'Yes',
                'current' => extension_loaded($ext) ? 'Yes' : 'No',
                'passed' => extension_loaded($ext)
            ];
            
            if (!$checks['ext_' . $ext]['passed']) {
                $allPassed = false;
            }
        }
        
        // Check directory permissions
        $writableDirs = ['./api/config', './uploads', './storage'];
        foreach ($writableDirs as $dir) {
            if (!is_dir($dir)) {
                @mkdir($dir, 0755, true);
            }
            
            $checks['dir_' . str_replace('./', '', $dir)] = [
                'name' => 'Directory Writable: ' . $dir,
                'required' => 'Yes',
                'current' => is_writable($dir) ? 'Yes' : 'No',
                'passed' => is_writable($dir)
            ];
            
            if (!$checks['dir_' . str_replace('./', '', $dir)]['passed']) {
                $allPassed = false;
            }
        }
        
        return [
            'success' => $allPassed,
            'checks' => $checks,
            'error' => $allPassed ? null : 'Some system requirements are not met'
        ];
    }
    
    private function testDatabase($config) {
        try {
            $dsn = "mysql:host={$config['host']};port={$config['port']};dbname={$config['database']};charset=utf8mb4";
            $pdo = new PDO($dsn, $config['username'], $config['password'], [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            ]);
            
            return ['success' => true, 'message' => 'Database connection successful'];
        } catch (PDOException $e) {
            return ['success' => false, 'error' => 'Database connection failed: ' . $e->getMessage()];
        }
    }
    
    private function setupDatabase($config) {
        try {
            // Save database configuration
            $configDir = __DIR__ . '/config';
            if (!is_dir($configDir)) {
                mkdir($configDir, 0755, true);
            }
            
            $dbConfig = [
                'host' => $config['host'],
                'username' => $config['username'],
                'password' => $config['password'],
                'database' => $config['database'],
                'port' => $config['port']
            ];
            
            file_put_contents($configDir . '/db_config.json', json_encode($dbConfig, JSON_PRETTY_PRINT));
            
            // Create database connection
            $dsn = "mysql:host={$config['host']};port={$config['port']};dbname={$config['database']};charset=utf8mb4";
            $pdo = new PDO($dsn, $config['username'], $config['password'], [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            ]);
            
            // Read and execute schema
            $schemaFile = __DIR__ . '/../mysql-schema.sql';
            if (!file_exists($schemaFile)) {
                throw new Exception('MySQL schema file not found');
            }
            
            $schema = file_get_contents($schemaFile);
            
            // Split schema into individual statements
            $statements = array_filter(
                array_map('trim', explode(';', $schema)),
                function($stmt) {
                    return !empty($stmt) && !preg_match('/^--/', $stmt);
                }
            );
            
            foreach ($statements as $statement) {
                if (trim($statement)) {
                    $pdo->exec($statement);
                }
            }
            
            return ['success' => true, 'message' => 'Database setup completed'];
            
        } catch (Exception $e) {
            return ['success' => false, 'error' => 'Database setup failed: ' . $e->getMessage()];
        }
    }
    
    private function setupEmail($config) {
        try {
            $configDir = __DIR__ . '/config';
            if (!is_dir($configDir)) {
                mkdir($configDir, 0755, true);
            }
            
            $emailConfig = [
                'from_email' => $config['from_email'],
                'from_name' => $config['from_name'],
                'smtp_host' => $config['smtp_host'] ?? 'localhost',
                'smtp_port' => $config['smtp_port'] ?? 587,
                'use_smtp' => $config['use_smtp'] ?? false
            ];
            
            file_put_contents($configDir . '/mail_config.json', json_encode($emailConfig, JSON_PRETTY_PRINT));
            
            return ['success' => true, 'message' => 'Email configuration saved'];
            
        } catch (Exception $e) {
            return ['success' => false, 'error' => 'Email setup failed: ' . $e->getMessage()];
        }
    }
    
    private function createAdmin($config) {
        try {
            require_once __DIR__ . '/classes/Database.php';
            require_once __DIR__ . '/classes/Auth.php';
            
            $auth = new Auth();
            $result = $auth->createAdmin($config['username'], $config['password']);
            
            if (!$result['success']) {
                throw new Exception($result['error']);
            }
            
            return ['success' => true, 'message' => 'Admin user created successfully'];
            
        } catch (Exception $e) {
            return ['success' => false, 'error' => 'Admin user creation failed: ' . $e->getMessage()];
        }
    }
    
    private function finalize() {
        try {
            // Create .htaccess for security
            $htaccess = "
# Deny access to sensitive files
<Files ~ \"\\.(json|log)$\">
    Order allow,deny
    Deny from all
</Files>

# Deny access to config directory
<Directory \"./config\">
    Order allow,deny
    Deny from all
</Directory>

# Enable pretty URLs
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^api/(.*)$ api/$1 [L]
            ";
            
            file_put_contents(__DIR__ . '/.htaccess', $htaccess);
            
            // Create installation complete marker
            file_put_contents(__DIR__ . '/config/installed.json', json_encode([
                'installed' => true,
                'timestamp' => date('Y-m-d H:i:s'),
                'version' => '1.0.0'
            ], JSON_PRETTY_PRINT));
            
            return ['success' => true, 'message' => 'Installation completed successfully'];
            
        } catch (Exception $e) {
            return ['success' => false, 'error' => 'Finalization failed: ' . $e->getMessage()];
        }
    }
}

// Handle the request
$installer = new Installer();
echo json_encode($installer->handleRequest());
?>