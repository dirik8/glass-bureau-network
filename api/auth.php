<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

require_once __DIR__ . '/classes/Auth.php';

try {
    $auth = new Auth();
    $method = $_SERVER['REQUEST_METHOD'];
    $input = json_decode(file_get_contents('php://input'), true);
    $action = $_GET['action'] ?? $input['action'] ?? '';
    
    $result = null;
    
    switch ($action) {
        case 'login':
            $username = $input['username'] ?? '';
            $password = $input['password'] ?? '';
            
            if (empty($username) || empty($password)) {
                throw new Exception('Username and password are required');
            }
            
            $result = $auth->login($username, $password);
            break;
            
        case 'logout':
            $result = $auth->logout();
            break;
            
        case 'check':
            $result = [
                'authenticated' => $auth->isAuthenticated(),
                'is_admin' => $auth->isAdmin(),
                'user' => $auth->getCurrentUser()
            ];
            break;
            
        case 'create_admin':
            $username = $input['username'] ?? '';
            $password = $input['password'] ?? '';
            
            if (empty($username) || empty($password)) {
                throw new Exception('Username and password are required');
            }
            
            $result = $auth->createAdmin($username, $password);
            break;
            
        case 'change_password':
            $auth->requireAuth();
            
            $currentPassword = $input['current_password'] ?? '';
            $newPassword = $input['new_password'] ?? '';
            
            if (empty($currentPassword) || empty($newPassword)) {
                throw new Exception('Current password and new password are required');
            }
            
            $result = $auth->changePassword($currentPassword, $newPassword);
            break;
            
        case 'admin_exists':
            $result = ['exists' => $auth->adminExists()];
            break;
            
        default:
            throw new Exception('Invalid action: ' . $action);
    }
    
    echo json_encode($result);
    
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error' => $e->getMessage()
    ]);
}
?>