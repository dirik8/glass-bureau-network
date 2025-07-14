
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSiteSettings } from '@/hooks/useSiteSettings';

const EmergencyBanner: React.FC = () => {
  const { settings } = useSiteSettings();
  
  if (settings.emergency_banner_active === 'false') {
    return null;
  }

  return (
    <div className="bg-destructive text-destructive-foreground py-3">
      <div className="container">
        <div className="flex items-center justify-center space-x-4 text-center">
          <AlertTriangle className="h-5 w-5" />
          <span className="font-semibold">
            {settings.emergency_banner_text || 'FRAUD VICTIM? Report immediately to LGN Recovery Division for asset recovery assistance.'}
          </span>
          <Button 
            size="sm" 
            variant="emergency" 
            asChild
            className="font-bold shadow-xl"
          >
            <Link to="/contact-us" className="flex items-center space-x-1">
              <Phone className="h-4 w-4" />
              <span>EMERGENCY: {settings.emergency_phone || '+1 (438) 602-5895'}</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EmergencyBanner;
