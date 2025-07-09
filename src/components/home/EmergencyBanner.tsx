
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

const EmergencyBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-3">
      <div className="container">
        <div className="flex items-center justify-center space-x-4 text-center">
          <AlertTriangle className="h-5 w-5 animate-pulse" />
          <span className="font-medium">
            VICTIM OF CYBERCRIME? Get immediate assistance from our emergency response team.
          </span>
          <Button 
            size="sm" 
            variant="secondary" 
            asChild
            className="bg-white text-red-600 hover:bg-gray-100"
          >
            <Link to="/contact-us" className="flex items-center space-x-1">
              <Phone className="h-4 w-4" />
              <span>Call Now: +1 (438) 602-5895</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EmergencyBanner;
