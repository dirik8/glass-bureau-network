<?php
// Database configuration for cPanel MySQL
class DatabaseConfig {
    // Database connection settings
    // These will be auto-detected during installation
    private static $host = 'localhost';
    private static $username = '';
    private static $password = '';
    private static $database = '';
    private static $port = 3306;
    
    // PDO connection instance
    private static $connection = null;
    
    // Load configuration from file if exists
    public static function loadConfig() {
        $configFile = __DIR__ . '/db_config.json';
        if (file_exists($configFile)) {
            $config = json_decode(file_get_contents($configFile), true);
            if ($config) {
                self::$host = $config['host'] ?? 'localhost';
                self::$username = $config['username'] ?? '';
                self::$password = $config['password'] ?? '';
                self::$database = $config['database'] ?? '';
                self::$port = $config['port'] ?? 3306;
            }
        }
    }
    
    // Save configuration to file
    public static function saveConfig($host, $username, $password, $database, $port = 3306) {
        $config = [
            'host' => $host,
            'username' => $username,
            'password' => $password,
            'database' => $database,
            'port' => $port
        ];
        
        $configFile = __DIR__ . '/db_config.json';
        file_put_contents($configFile, json_encode($config, JSON_PRETTY_PRINT));
        
        // Update static properties
        self::$host = $host;
        self::$username = $username;
        self::$password = $password;
        self::$database = $database;
        self::$port = $port;
        
        // Reset connection to use new config
        self::$connection = null;
    }
    
    // Get database connection
    public static function getConnection() {
        if (self::$connection === null) {
            self::loadConfig();
            
            try {
                $dsn = "mysql:host=" . self::$host . ";port=" . self::$port . ";dbname=" . self::$database . ";charset=utf8mb4";
                self::$connection = new PDO($dsn, self::$username, self::$password, [
                    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                    PDO::ATTR_EMULATE_PREPARES => false,
                ]);
            } catch (PDOException $e) {
                throw new Exception("Database connection failed: " . $e->getMessage());
            }
        }
        
        return self::$connection;
    }
    
    // Test database connection
    public static function testConnection($host, $username, $password, $database, $port = 3306) {
        try {
            $dsn = "mysql:host={$host};port={$port};dbname={$database};charset=utf8mb4";
            $pdo = new PDO($dsn, $username, $password, [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            ]);
            return ['success' => true, 'message' => 'Connection successful'];
        } catch (PDOException $e) {
            return ['success' => false, 'message' => $e->getMessage()];
        }
    }
    
    // Auto-detect cPanel database settings
    public static function autoDetectCpanelSettings() {
        $detected = [];
        
        // Try to detect from cPanel environment
        if (isset($_SERVER['HTTP_HOST'])) {
            $domain = $_SERVER['HTTP_HOST'];
            $detected['host'] = 'localhost';
            
            // Try common cPanel username patterns
            $domainParts = explode('.', $domain);
            $detected['username'] = $domainParts[0] ?? '';
        }
        
        // Check for common cPanel paths and configurations
        $cpanelPaths = [
            '/home/' . ($detected['username'] ?? ''),
            '/var/cpanel/users/' . ($detected['username'] ?? ''),
        ];
        
        foreach ($cpanelPaths as $path) {
            if (is_dir($path)) {
                $detected['detected_path'] = $path;
                break;
            }
        }
        
        return $detected;
    }
    
    // Get database configuration for display
    public static function getConfig() {
        self::loadConfig();
        return [
            'host' => self::$host,
            'username' => self::$username,
            'database' => self::$database,
            'port' => self::$port
            // Don't return password for security
        ];
    }
}
?>