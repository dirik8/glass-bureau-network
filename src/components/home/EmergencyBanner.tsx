
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

const EmergencyBanner: React.FC = () => {
  return (
    <div className="bg-red-700 text-white py-3">
      <div className="container">
        <div className="flex items-center justify-center space-x-4 text-center">
          <AlertTriangle className="h-5 w-5" />
          <span className="font-semibold">
            CYBERCRIME VICTIM? Report immediately to the FBI's Internet Crime Complaint Center (IC3).
          </span>
          <Button 
            size="sm" 
            variant="secondary" 
            asChild
            className="bg-white text-red-700 hover:bg-gray-100 font-semibold"
          >
            <Link to="/contact-us" className="flex items-center space-x-1">
              <Phone className="h-4 w-4" />
              <span>Call: +1 (438) 602-5895</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EmergencyBanner;
