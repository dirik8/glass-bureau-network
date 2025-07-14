<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

require_once __DIR__ . '/classes/Database.php';
require_once __DIR__ . '/classes/Auth.php';

try {
    $db = new Database();
    $auth = new Auth();
    
    $method = $_SERVER['REQUEST_METHOD'];
    $input = json_decode(file_get_contents('php://input'), true);
    
    // For GET requests, use query parameters
    if ($method === 'GET') {
        $table = $_GET['table'] ?? '';
        $action = $_GET['action'] ?? 'select';
        $columns = $_GET['columns'] ?? '*';
        $filters = isset($_GET['filters']) ? json_decode($_GET['filters'], true) : [];
        $orderBy = $_GET['orderBy'] ?? null;
        $limit = isset($_GET['limit']) ? (int)$_GET['limit'] : null;
        $single = isset($_GET['single']) && $_GET['single'] === 'true';
    } else {
        // For POST/PUT/DELETE, use JSON body
        $table = $input['table'] ?? '';
        $action = $input['action'] ?? '';
        $data = $input['data'] ?? [];
        $filters = $input['filters'] ?? [];
        $options = $input['options'] ?? [];
    }
    
    if (empty($table)) {
        throw new Exception('Table name is required');
    }
    
    // Check authentication for write operations
    $writeOperations = ['insert', 'update', 'upsert', 'delete'];
    if (in_array($action, $writeOperations)) {
        $auth->requireAdmin();
    }
    
    $result = null;
    
    switch ($action) {
        case 'select':
            $result = $db->select($table, [
                'columns' => $columns ?? '*',
                'filters' => $filters ?? [],
                'orderBy' => $orderBy ?? null,
                'limit' => $limit ?? null,
                'single' => $single ?? false
            ]);
            break;
            
        case 'insert':
            $result = $db->insert($table, $data);
            break;
            
        case 'update':
            $result = $db->update($table, $data, $filters);
            break;
            
        case 'upsert':
            $result = $db->upsert($table, $data, $options);
            break;
            
        case 'delete':
            $result = $db->delete($table, $filters);
            break;
            
        default:
            throw new Exception('Invalid action: ' . $action);
    }
    
    echo json_encode($result);
    
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'data' => null,
        'error' => $e->getMessage()
    ]);
}
?>