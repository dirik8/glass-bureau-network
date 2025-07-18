
import React, { useState, useEffect } from 'react';
import { X, Shield, DollarSign } from 'lucide-react';
import { generateNewCaseNumber, generateRecoveryAmount, getCaseScenarios } from '@/utils/caseNumberGenerator';

interface PopupData {
  caseNumber: string;
  amount: string;
  scenario: string;
  id: string;
}

const SocialProofPopup: React.FC = () => {
  const [popups, setPopups] = useState<PopupData[]>([]);
  const [isEnabled, setIsEnabled] = useState(true);

  // Generate popup data
  const createPopup = (): PopupData => {
    const scenarios = getCaseScenarios();
    return {
      caseNumber: generateNewCaseNumber(),
      amount: generateRecoveryAmount(),
      scenario: scenarios[Math.floor(Math.random() * scenarios.length)],
      id: Math.random().toString(36).substr(2, 9)
    };
  };

  // Show popup with auto-dismiss
  const showPopup = () => {
    if (!isEnabled) return;
    
    const popup = createPopup();
    setPopups(prev => [...prev, popup]);

    // Auto-dismiss after 6 seconds
    setTimeout(() => {
      setPopups(prev => prev.filter(p => p.id !== popup.id));
    }, 6000);
  };

  // Dismiss popup manually
  const dismissPopup = (id: string) => {
    setPopups(prev => prev.filter(p => p.id !== id));
  };

  // Setup popup intervals
  useEffect(() => {
    // Initial delay before first popup
    const initialTimer = setTimeout(() => {
      showPopup();
    }, 8000);

    // Regular interval for subsequent popups
    const interval = setInterval(() => {
      showPopup();
    }, 15000); // Every 15 seconds

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [isEnabled]);

  // Enable on both desktop and mobile, but adjust positioning
  useEffect(() => {
    const checkScreen = () => {
      setIsEnabled(true); // Always enable, we'll handle positioning responsively
    };
    
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  if (!isEnabled) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 space-y-2 max-w-sm">
      {popups.map((popup) => (
        <div
          key={popup.id}
          className="bg-white border border-trust-green shadow-xl rounded-lg p-4 animate-slide-in-up"
          style={{ animation: 'slideInUp 0.5s ease-out' }}
        >
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-trust-green rounded-full flex items-center justify-center">
                  <Shield className="h-5 w-5 text-white" />
                </div>
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-1 mb-1">
                  <DollarSign className="h-4 w-4 text-trust-green" />
                  <span className="text-xs font-medium text-trust-green uppercase tracking-wide">
                    Case Closed
                  </span>
                </div>
                
                <p className="text-sm font-medium text-steel-gray mb-1">
                  {popup.caseNumber}
                </p>
                
                <p className="text-xs text-steel-gray mb-2">
                  {popup.scenario}
                </p>
                
                <div className="flex items-center space-x-1">
                  <span className="text-lg font-bold text-trust-green">
                    {popup.amount}
                  </span>
                  <span className="text-xs text-steel-gray">recovered</span>
                </div>
              </div>
            </div>
            
            <button
              onClick={() => dismissPopup(popup.id)}
              className="flex-shrink-0 text-steel-gray hover:text-deep-navy transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      ))}
      
      <style>
        {`
        @keyframes slideInUp {
          from {
            transform: translateY(100%) translateX(0);
            opacity: 0;
          }
          to {
            transform: translateY(0) translateX(0);
            opacity: 1;
          }
        }
        `}
      </style>
    </div>
  );
};

export default SocialProofPopup;
