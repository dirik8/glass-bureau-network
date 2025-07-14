<?php
require_once __DIR__ . '/../config/database.php';

class Database {
    private $connection;
    
    public function __construct() {
        $this->connection = DatabaseConfig::getConnection();
    }
    
    // Generic select method
    public function select($table, $options = []) {
        try {
            $columns = $options['columns'] ?? '*';
            $filters = $options['filters'] ?? [];
            $orderBy = $options['orderBy'] ?? null;
            $limit = $options['limit'] ?? null;
            $single = $options['single'] ?? false;
            
            $sql = "SELECT {$columns} FROM {$table}";
            $params = [];
            
            // Add WHERE clause
            if (!empty($filters)) {
                $conditions = [];
                foreach ($filters as $column => $value) {
                    $conditions[] = "{$column} = :{$column}";
                    $params[$column] = $value;
                }
                $sql .= " WHERE " . implode(" AND ", $conditions);
            }
            
            // Add ORDER BY
            if ($orderBy) {
                $sql .= " ORDER BY {$orderBy}";
            }
            
            // Add LIMIT
            if ($limit) {
                $sql .= " LIMIT {$limit}";
            }
            
            $stmt = $this->connection->prepare($sql);
            $stmt->execute($params);
            
            if ($single) {
                $result = $stmt->fetch();
                return ['data' => $result ?: null, 'error' => null];
            } else {
                $result = $stmt->fetchAll();
                return ['data' => $result, 'error' => null];
            }
            
        } catch (Exception $e) {
            return ['data' => null, 'error' => $e->getMessage()];
        }
    }
    
    // Generic insert method
    public function insert($table, $data) {
        try {
            $isMultiple = isset($data[0]) && is_array($data[0]);
            $rows = $isMultiple ? $data : [$data];
            
            if (empty($rows)) {
                return ['data' => null, 'error' => 'No data to insert'];
            }
            
            $columns = array_keys($rows[0]);
            $placeholders = ':' . implode(', :', $columns);
            
            $sql = "INSERT INTO {$table} (" . implode(', ', $columns) . ") VALUES ({$placeholders})";
            $stmt = $this->connection->prepare($sql);
            
            $insertedIds = [];
            foreach ($rows as $row) {
                $stmt->execute($row);
                $insertedIds[] = $this->connection->lastInsertId();
            }
            
            return ['data' => $isMultiple ? $insertedIds : $insertedIds[0], 'error' => null];
            
        } catch (Exception $e) {
            return ['data' => null, 'error' => $e->getMessage()];
        }
    }
    
    // Generic update method
    public function update($table, $data, $filters) {
        try {
            $setClause = [];
            $params = [];
            
            foreach ($data as $column => $value) {
                $setClause[] = "{$column} = :set_{$column}";
                $params["set_{$column}"] = $value;
            }
            
            $whereClause = [];
            foreach ($filters as $column => $value) {
                $whereClause[] = "{$column} = :where_{$column}";
                $params["where_{$column}"] = $value;
            }
            
            $sql = "UPDATE {$table} SET " . implode(', ', $setClause) . " WHERE " . implode(' AND ', $whereClause);
            $stmt = $this->connection->prepare($sql);
            $stmt->execute($params);
            
            return ['data' => $stmt->rowCount(), 'error' => null];
            
        } catch (Exception $e) {
            return ['data' => null, 'error' => $e->getMessage()];
        }
    }
    
    // Generic upsert method (INSERT ... ON DUPLICATE KEY UPDATE)
    public function upsert($table, $data, $options = []) {
        try {
            $isMultiple = isset($data[0]) && is_array($data[0]);
            $rows = $isMultiple ? $data : [$data];
            
            if (empty($rows)) {
                return ['data' => null, 'error' => 'No data to upsert'];
            }
            
            $columns = array_keys($rows[0]);
            $placeholders = ':' . implode(', :', $columns);
            
            // Build UPDATE clause for ON DUPLICATE KEY
            $updateClause = [];
            foreach ($columns as $column) {
                $updateClause[] = "{$column} = VALUES({$column})";
            }
            
            $sql = "INSERT INTO {$table} (" . implode(', ', $columns) . ") VALUES ({$placeholders}) ON DUPLICATE KEY UPDATE " . implode(', ', $updateClause);
            $stmt = $this->connection->prepare($sql);
            
            $affectedRows = 0;
            foreach ($rows as $row) {
                $stmt->execute($row);
                $affectedRows += $stmt->rowCount();
            }
            
            return ['data' => $affectedRows, 'error' => null];
            
        } catch (Exception $e) {
            return ['data' => null, 'error' => $e->getMessage()];
        }
    }
    
    // Generic delete method
    public function delete($table, $filters) {
        try {
            $whereClause = [];
            $params = [];
            
            foreach ($filters as $column => $value) {
                $whereClause[] = "{$column} = :{$column}";
                $params[$column] = $value;
            }
            
            $sql = "DELETE FROM {$table} WHERE " . implode(' AND ', $whereClause);
            $stmt = $this->connection->prepare($sql);
            $stmt->execute($params);
            
            return ['data' => $stmt->rowCount(), 'error' => null];
            
        } catch (Exception $e) {
            return ['data' => null, 'error' => $e->getMessage()];
        }
    }
    
    // Execute raw SQL
    public function query($sql, $params = []) {
        try {
            $stmt = $this->connection->prepare($sql);
            $stmt->execute($params);
            
            if (stripos($sql, 'SELECT') === 0) {
                return ['data' => $stmt->fetchAll(), 'error' => null];
            } else {
                return ['data' => $stmt->rowCount(), 'error' => null];
            }
            
        } catch (Exception $e) {
            return ['data' => null, 'error' => $e->getMessage()];
        }
    }
    
    // Get table schema
    public function getTableSchema($table) {
        try {
            $sql = "DESCRIBE {$table}";
            $stmt = $this->connection->prepare($sql);
            $stmt->execute();
            
            return ['data' => $stmt->fetchAll(), 'error' => null];
            
        } catch (Exception $e) {
            return ['data' => null, 'error' => $e->getMessage()];
        }
    }
}
?>