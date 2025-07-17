// Site-wide content updates for LGN rebranding
// This utility helps manage the systematic replacement of FBI references

export const contentUpdates = {
  // Organization name updates
  organizationReplacements: {
    'FBI': 'LGN in conjunction with FBI\'s',
    'FBI\'s': 'LGN in conjunction with FBI\'s',
    'FBI Cybercrime Division': 'LGN in conjunction with FBI\'s Cybercrime Division',
    'The FBI': 'LGN in conjunction with FBI\'s',
    'Federal Bureau of Investigation': 'LGN in conjunction with FBI\'s Federal Bureau of Investigation'
  },
  
  // Domain updates
  domainReplacements: {
    'lionsgate.network': 'lionsrecovery.com',
    'investigations@lionsgate.network': 'investigations@lionsrecovery.com'
  },
  
  // Case reference updates
  caseUpdates: {
    'Multi-jurisdictional investigation': 'LGN-FBI: #CASE-A44-987-554B2',
    'Federal investigation': 'LGN-FBI joint investigation'
  }
};

// Function to apply content replacements
export const applyContentUpdates = (text: string): string => {
  let updatedText = text;
  
  // Apply organization replacements
  Object.entries(contentUpdates.organizationReplacements).forEach(([old, newText]) => {
    const regex = new RegExp(old.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
    updatedText = updatedText.replace(regex, newText);
  });
  
  // Apply domain replacements
  Object.entries(contentUpdates.domainReplacements).forEach(([old, newText]) => {
    const regex = new RegExp(old.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
    updatedText = updatedText.replace(regex, newText);
  });
  
  // Apply case updates
  Object.entries(contentUpdates.caseUpdates).forEach(([old, newText]) => {
    const regex = new RegExp(old.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
    updatedText = updatedText.replace(regex, newText);
  });
  
  return updatedText;
};

export default { contentUpdates, applyContentUpdates };