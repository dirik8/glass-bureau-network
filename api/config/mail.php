<?php
// Email configuration for cPanel webmail
class MailConfig {
    private static $config = [
        'smtp_host' => 'localhost',
        'smtp_port' => 587,
        'smtp_username' => '',
        'smtp_password' => '',
        'from_email' => '',
        'from_name' => '',
        'use_smtp' => false, // Use PHP mail() by default
    ];
    
    // Load configuration
    public static function loadConfig() {
        $configFile = __DIR__ . '/mail_config.json';
        if (file_exists($configFile)) {
            $config = json_decode(file_get_contents($configFile), true);
            if ($config) {
                self::$config = array_merge(self::$config, $config);
            }
        }
    }
    
    // Save configuration
    public static function saveConfig($config) {
        $configFile = __DIR__ . '/mail_config.json';
        file_put_contents($configFile, json_encode($config, JSON_PRETTY_PRINT));
        self::$config = array_merge(self::$config, $config);
    }
    
    // Get configuration
    public static function getConfig() {
        self::loadConfig();
        return self::$config;
    }
    
    // Send email using cPanel webmail
    public static function sendEmail($to, $subject, $body, $isHtml = true) {
        self::loadConfig();
        
        try {
            if (self::$config['use_smtp']) {
                return self::sendSMTP($to, $subject, $body, $isHtml);
            } else {
                return self::sendPHPMail($to, $subject, $body, $isHtml);
            }
        } catch (Exception $e) {
            return ['success' => false, 'error' => $e->getMessage()];
        }
    }
    
    // Send using PHP mail() function
    private static function sendPHPMail($to, $subject, $body, $isHtml = true) {
        $headers = [];
        $headers[] = 'From: ' . self::$config['from_name'] . ' <' . self::$config['from_email'] . '>';
        $headers[] = 'Reply-To: ' . self::$config['from_email'];
        $headers[] = 'X-Mailer: PHP/' . phpversion();
        
        if ($isHtml) {
            $headers[] = 'MIME-Version: 1.0';
            $headers[] = 'Content-Type: text/html; charset=UTF-8';
        }
        
        $success = mail($to, $subject, $body, implode("\r\n", $headers));
        
        return [
            'success' => $success,
            'error' => $success ? null : 'Failed to send email using PHP mail()'
        ];
    }
    
    // Send using SMTP (for advanced configurations)
    private static function sendSMTP($to, $subject, $body, $isHtml = true) {
        // This would require PHPMailer or similar library
        // For now, fallback to PHP mail
        return self::sendPHPMail($to, $subject, $body, $isHtml);
    }
    
    // Test email configuration
    public static function testEmail($to = null) {
        $testTo = $to ?? self::$config['from_email'];
        $subject = 'Test Email from ' . self::$config['from_name'];
        $body = 'This is a test email to verify your email configuration is working correctly.';
        
        return self::sendEmail($testTo, $subject, $body);
    }
    
    // Auto-detect cPanel email settings
    public static function autoDetectCpanelEmail() {
        $detected = [];
        
        if (isset($_SERVER['HTTP_HOST'])) {
            $domain = $_SERVER['HTTP_HOST'];
            $detected['smtp_host'] = 'mail.' . $domain;
            $detected['from_email'] = 'admin@' . $domain;
            $detected['from_name'] = ucfirst(explode('.', $domain)[0]);
        }
        
        return $detected;
    }
}
?>