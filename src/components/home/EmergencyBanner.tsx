
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
    <div className="bg-destructive text-destructive-foreground py-2 sm:py-3">
      <div className="container px-4">
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 text-center">
          <div className="flex items-center space-x-2">
            <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
            <span className="font-semibold text-sm sm:text-base">
              {settings.emergency_banner_text || 'FRAUD VICTIM? Report immediately to LGN Recovery Division for asset recovery assistance.'}
            </span>
          </div>
          <Button 
            size="sm" 
            variant="emergency" 
            asChild
            className="font-bold shadow-xl text-xs sm:text-sm flex-shrink-0"
          >
            <Link to="/contact-us" className="flex items-center space-x-1">
              <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="hidden sm:inline">EMERGENCY: {settings.emergency_phone || '+1 (438) 602-5895'}</span>
              <span className="sm:hidden">EMERGENCY</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EmergencyBanner;
