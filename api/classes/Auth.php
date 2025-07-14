<?php
require_once __DIR__ . '/Database.php';

class Auth {
    private $db;
    
    public function __construct() {
        $this->db = new Database();
        $this->startSession();
    }
    
    private function startSession() {
        if (session_status() === PHP_SESSION_NONE) {
            session_start();
        }
    }
    
    // Login user
    public function login($username, $password) {
        try {
            $result = $this->db->select('admin_users', [
                'filters' => ['username' => $username],
                'single' => true
            ]);
            
            if ($result['error']) {
                return ['success' => false, 'error' => $result['error']];
            }
            
            $user = $result['data'];
            if (!$user) {
                return ['success' => false, 'error' => 'Invalid username or password'];
            }
            
            if (!password_verify($password, $user['password_hash'])) {
                return ['success' => false, 'error' => 'Invalid username or password'];
            }
            
            // Store user session
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['username'] = $user['username'];
            $_SESSION['role'] = $user['role'];
            $_SESSION['is_admin'] = true;
            
            return [
                'success' => true,
                'user' => [
                    'id' => $user['id'],
                    'username' => $user['username'],
                    'role' => $user['role']
                ]
            ];
            
        } catch (Exception $e) {
            return ['success' => false, 'error' => $e->getMessage()];
        }
    }
    
    // Logout user
    public function logout() {
        session_destroy();
        return ['success' => true];
    }
    
    // Check if user is authenticated
    public function isAuthenticated() {
        return isset($_SESSION['user_id']) && isset($_SESSION['is_admin']);
    }
    
    // Check if user is admin
    public function isAdmin() {
        return $this->isAuthenticated() && $_SESSION['is_admin'] === true;
    }
    
    // Get current user
    public function getCurrentUser() {
        if (!$this->isAuthenticated()) {
            return null;
        }
        
        return [
            'id' => $_SESSION['user_id'],
            'username' => $_SESSION['username'],
            'role' => $_SESSION['role']
        ];
    }
    
    // Create admin user
    public function createAdmin($username, $password) {
        try {
            // Check if admin already exists
            $existing = $this->db->select('admin_users', [
                'filters' => ['username' => $username],
                'single' => true
            ]);
            
            if ($existing['data']) {
                return ['success' => false, 'error' => 'Admin user already exists'];
            }
            
            $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
            
            $result = $this->db->insert('admin_users', [
                'username' => $username,
                'password_hash' => $hashedPassword,
                'role' => 'admin'
            ]);
            
            if ($result['error']) {
                return ['success' => false, 'error' => $result['error']];
            }
            
            return ['success' => true, 'user_id' => $result['data']];
            
        } catch (Exception $e) {
            return ['success' => false, 'error' => $e->getMessage()];
        }
    }
    
    // Change password
    public function changePassword($currentPassword, $newPassword) {
        if (!$this->isAuthenticated()) {
            return ['success' => false, 'error' => 'Not authenticated'];
        }
        
        try {
            $result = $this->db->select('admin_users', [
                'filters' => ['id' => $_SESSION['user_id']],
                'single' => true
            ]);
            
            if ($result['error'] || !$result['data']) {
                return ['success' => false, 'error' => 'User not found'];
            }
            
            $user = $result['data'];
            
            if (!password_verify($currentPassword, $user['password_hash'])) {
                return ['success' => false, 'error' => 'Current password is incorrect'];
            }
            
            $hashedPassword = password_hash($newPassword, PASSWORD_DEFAULT);
            
            $updateResult = $this->db->update('admin_users', 
                ['password_hash' => $hashedPassword],
                ['id' => $_SESSION['user_id']]
            );
            
            if ($updateResult['error']) {
                return ['success' => false, 'error' => $updateResult['error']];
            }
            
            return ['success' => true];
            
        } catch (Exception $e) {
            return ['success' => false, 'error' => $e->getMessage()];
        }
    }
    
    // Check if any admin exists
    public function adminExists() {
        try {
            $result = $this->db->select('admin_users', ['limit' => 1]);
            return count($result['data']) > 0;
        } catch (Exception $e) {
            return false;
        }
    }
    
    // Middleware to require authentication
    public function requireAuth() {
        if (!$this->isAuthenticated()) {
            http_response_code(401);
            echo json_encode(['error' => 'Authentication required']);
            exit;
        }
    }
    
    // Middleware to require admin
    public function requireAdmin() {
        if (!$this->isAdmin()) {
            http_response_code(403);
            echo json_encode(['error' => 'Admin access required']);
            exit;
        }
    }
}
?>