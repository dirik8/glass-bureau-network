
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
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 space-y-2 w-[calc(100vw-2rem)] max-w-[280px] sm:max-w-sm">
      {popups.map((popup) => (
        <div
          key={popup.id}
          className="bg-white border border-green-500 shadow-xl rounded-lg p-3 sm:p-4 animate-slide-in-up"
          style={{ animation: 'slideInUp 0.5s ease-out' }}
        >
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-2 sm:space-x-3">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </div>
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-1 mb-1">
                  <DollarSign className="h-3 w-3 sm:h-4 sm:w-4 text-green-500" />
                  <span className="text-xs font-medium text-green-500 uppercase tracking-wide">
                    Case Closed
                  </span>
                </div>
                
                <p className="text-xs sm:text-sm font-medium text-gray-700 mb-1 truncate">
                  {popup.caseNumber}
                </p>
                
                <p className="text-xs text-gray-600 mb-2 line-clamp-2">
                  {popup.scenario}
                </p>
                
                <div className="flex items-center space-x-1">
                  <span className="text-sm sm:text-lg font-bold text-green-500">
                    {popup.amount}
                  </span>
                  <span className="text-xs text-gray-600">recovered</span>
                </div>
              </div>
            </div>
            
            <button
              onClick={() => dismissPopup(popup.id)}
              className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors touch-manipulation"
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
