// Case Number Generator Utility
// Generates random case numbers for LGN-FBI operations

interface CaseNumber {
  fullNumber: string;
  prefix: string;
  caseId: string;
  suffix: string;
}

// Generate random case number components
const generateCaseComponents = (): CaseNumber => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  
  // Generate random components
  const letter1 = letters[Math.floor(Math.random() * letters.length)];
  const twoDigits = Math.floor(Math.random() * 100).toString().padStart(2, '0');
  const threeDigits = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
  const sixDigits = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
  const letter2 = letters[Math.floor(Math.random() * letters.length)];
  const finalDigit = Math.floor(Math.random() * 10);
  
  const prefix = 'LGN-FBI: #CASE';
  const caseId = `${letter1}${twoDigits}-${threeDigits}-${sixDigits}`;
  const suffix = `${letter2}${finalDigit}`;
  const fullNumber = `${prefix}-${caseId}${suffix}`;
  
  return {
    fullNumber,
    prefix,
    caseId,
    suffix
  };
};

// Get or generate case number for current session
export const getSessionCaseNumber = (): string => {
  const sessionKey = 'lgn_case_number';
  const stored = sessionStorage.getItem(sessionKey);
  
  if (stored) {
    return stored;
  }
  
  const caseNumber = generateCaseComponents().fullNumber;
  sessionStorage.setItem(sessionKey, caseNumber);
  return caseNumber;
};

// Generate a completely new case number (for popups)
export const generateNewCaseNumber = (): string => {
  return generateCaseComponents().fullNumber;
};

// Generate recovery amount with smaller realistic amounts
export const generateRecoveryAmount = (): string => {
  const amounts = [
    70000, 75000, 80000, 85000, 90000, 95000,
    100000, 125000, 150000, 175000, 200000, 225000, 250000, 275000,
    300000, 325000, 350000, 375000, 400000, 425000, 450000, 475000,
    500000, 525000, 550000, 575000
  ];
  
  const selectedAmount = amounts[Math.floor(Math.random() * amounts.length)];
  const variation = Math.floor(Math.random() * 5000) + 1000; // $1k-$6k variation
  const totalAmount = selectedAmount + variation;
  
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  }).format(totalAmount);
};

// Get array of realistic case scenarios for popups
export const getCaseScenarios = () => [
  'Romance Scam Recovery',
  'Cryptocurrency Fraud Investigation', 
  'Binary Options Scam Recovery',
  'Investment Fraud Recovery',
  'Forex Scam Investigation',
  'Pig Butchering Scam Recovery',
  'Online Dating Fraud Recovery',
  'Trading Platform Fraud Investigation'
];