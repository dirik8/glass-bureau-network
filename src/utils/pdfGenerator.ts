export interface PDFContent {
  title: string;
  pages: number;
  category: string;
  level: string;
  description: string;
  chapters: {
    title: string;
    content: string[];
  }[];
}

export const manualContents: Record<string, PDFContent> = {
  'cryptocurrency-investigation-handbook': {
    title: 'Cryptocurrency Investigation Handbook',
    pages: 156,
    category: 'Investigation Procedures',
    level: 'Advanced',
    description: 'Comprehensive guide to cryptocurrency investigation techniques, blockchain analysis, and digital asset tracing for law enforcement professionals.',
    chapters: [
      {
        title: 'Introduction to Cryptocurrency Investigations',
        content: [
          'Understanding blockchain technology fundamentals',
          'Types of cryptocurrencies and their characteristics',
          'Common cryptocurrency-related crimes',
          'Legal frameworks and jurisdictional considerations',
          'Building an investigation team and resources'
        ]
      },
      {
        title: 'Blockchain Analysis Fundamentals',
        content: [
          'Reading blockchain explorers',
          'Transaction flow analysis',
          'Address clustering techniques',
          'UTXO vs account-based blockchains',
          'Privacy coins and mixing services'
        ]
      },
      {
        title: 'Investigation Tools and Techniques',
        content: [
          'Professional blockchain analysis software',
          'Open source investigation tools',
          'Exchange interaction procedures',
          'Wallet identification methods',
          'Cross-chain analysis strategies'
        ]
      },
      {
        title: 'Evidence Collection and Preservation',
        content: [
          'Digital evidence standards for blockchain data',
          'Cryptographic proof preservation',
          'Chain of custody for digital assets',
          'Documentation and reporting standards',
          'Court admissibility requirements'
        ]
      },
      {
        title: 'Case Studies and Practical Applications',
        content: [
          'Ransomware investigation case studies',
          'Exchange hack analysis examples',
          'Money laundering pattern recognition',
          'Dark market investigation techniques',
          'Asset recovery success stories'
        ]
      }
    ]
  },
  'blockchain-forensics-best-practices': {
    title: 'Blockchain Forensics Best Practices',
    pages: 89,
    category: 'Investigation Procedures',
    level: 'Expert',
    description: 'Advanced methodologies for blockchain forensic analysis, including cutting-edge techniques for tracing complex transaction patterns.',
    chapters: [
      {
        title: 'Advanced Forensic Methodologies',
        content: [
          'Statistical analysis of blockchain patterns',
          'Machine learning applications in forensics',
          'Heuristic analysis techniques',
          'Behavioral pattern recognition',
          'Temporal analysis methods'
        ]
      },
      {
        title: 'Privacy Technology Challenges',
        content: [
          'Monero and Zcash investigation approaches',
          'CoinJoin and mixing service analysis',
          'Lightning Network investigation',
          'Atomic swap tracking',
          'Decentralized exchange interactions'
        ]
      },
      {
        title: 'Cross-Chain Analysis',
        content: [
          'Multi-blockchain investigation strategies',
          'Bridge and wrapped token analysis',
          'DEX aggregator transaction flows',
          'Layer 2 solution investigations',
          'Interoperability protocol analysis'
        ]
      },
      {
        title: 'Emerging Technologies',
        content: [
          'NFT marketplace investigations',
          'DeFi protocol analysis',
          'Smart contract forensics',
          'DAO governance investigation',
          'Metaverse asset tracking'
        ]
      }
    ]
  },
  'digital-evidence-collection-guide': {
    title: 'Digital Evidence Collection Guide',
    pages: 112,
    category: 'Investigation Procedures',
    level: 'Intermediate',
    description: 'Comprehensive procedures for collecting, preserving, and analyzing digital evidence in cryptocurrency-related investigations.',
    chapters: [
      {
        title: 'Digital Evidence Fundamentals',
        content: [
          'Types of digital evidence in crypto cases',
          'Legal requirements and standards',
          'Chain of custody procedures',
          'Evidence integrity verification',
          'Documentation requirements'
        ]
      },
      {
        title: 'Collection Procedures',
        content: [
          'Live system acquisition techniques',
          'Mobile device evidence extraction',
          'Cloud storage investigation',
          'Exchange data preservation',
          'Wallet recovery procedures'
        ]
      },
      {
        title: 'Analysis and Processing',
        content: [
          'Forensic imaging best practices',
          'Data recovery techniques',
          'Timeline analysis methods',
          'Communication pattern analysis',
          'Financial flow reconstruction'
        ]
      },
      {
        title: 'Reporting and Presentation',
        content: [
          'Technical report writing',
          'Visual presentation techniques',
          'Expert testimony preparation',
          'Non-technical audience communication',
          'Court presentation strategies'
        ]
      }
    ]
  },
  'cross-chain-analysis-procedures': {
    title: 'Cross-Chain Analysis Procedures',
    pages: 67,
    category: 'Investigation Procedures',
    level: 'Expert',
    description: 'Specialized techniques for investigating transactions across multiple blockchain networks and analyzing complex cross-chain movements.',
    chapters: [
      {
        title: 'Cross-Chain Transaction Fundamentals',
        content: [
          'Understanding bridge technologies',
          'Wrapped token mechanisms',
          'Atomic swap protocols',
          'Cross-chain communication methods',
          'Interoperability challenges'
        ]
      },
      {
        title: 'Investigation Methodologies',
        content: [
          'Multi-blockchain correlation techniques',
          'Bridge transaction analysis',
          'Timing correlation methods',
          'Volume pattern analysis',
          'Cross-reference verification'
        ]
      },
      {
        title: 'Tools and Technologies',
        content: [
          'Multi-chain analysis platforms',
          'API integration strategies',
          'Data aggregation techniques',
          'Visualization tools',
          'Automated monitoring systems'
        ]
      }
    ]
  }
};

export const generatePDFMetadata = (contentKey: string) => {
  const content = manualContents[contentKey];
  if (!content) return null;

  return {
    title: content.title,
    pages: content.pages,
    category: content.category,
    level: content.level,
    description: content.description,
    file_path: `pdfs/${contentKey}.pdf`,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  };
};

export const getAllPDFMetadata = () => {
  return Object.keys(manualContents).map(generatePDFMetadata).filter(Boolean);
};