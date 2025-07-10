import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Phone, Mail } from 'lucide-react';

const BureauFooter: React.FC = () => {
  const footerSections = [
    {
      title: 'Investigations',
      links: [
        { title: 'Cryptocurrency Scams', href: '/cryptocurrency-scams' },
        { title: 'Romance Scams', href: '/romance-scams' },
        { title: 'Trading Scams', href: '/fake-trading-scam' },
        { title: 'Pig Butchering', href: '/pig-butchering-scam' },
        { title: 'Binary Options', href: '/binary-options-scams' },
        { title: 'Job Scams', href: '/job-scam' },
      ]
    },
    {
      title: 'Services',
      links: [
        { title: 'Asset Recovery', href: '/asset-recovery-solutions' },
        { title: 'Blockchain Forensics', href: '/blockchain-forensic' },
        { title: 'Investigation Services', href: '/crypto-investigation' },
        { title: 'Prevention Programs', href: '/scam-prevention' },
        { title: 'Blockchain Analysis', href: '/blockchain-analyst' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { title: 'Case Studies', href: '/case-studies' },
        { title: 'Research Team', href: '/lionsgate-network-research-team' },
        { title: 'Q&A', href: '/qa' },
        { title: 'Manuals', href: '/manuals' },
        { title: 'News Room', href: '/news-room' },
      ]
    },
    {
      title: 'Business',
      links: [
        { title: 'Contact Us', href: '/contact-us' },
        { title: 'Careers', href: '/career' },
        { title: 'Services', href: '/services' },
        { title: 'Privacy Policy', href: '/privacy-policy-2' },
        { title: 'Terms & Conditions', href: '/terms-conditions' },
      ]
    }
  ];

  return (
    <footer className="bg-muted text-muted-foreground">
      <div className="container py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-primary" />
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-none text-foreground">LGN Recovery</span>
                <span className="text-xs text-muted-foreground leading-none">CYBERCRIME DIVISION</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Elite cybercrime investigation and asset recovery specialists. 
              Protecting victims and pursuing digital justice.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span>+1 (438) 602-5895</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <span>investigations@lionsgate.network</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-lg mb-4 text-foreground">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2024 LGN Recovery Cybercrime Division. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <Link to="/privacy-policy-2" className="hover:text-foreground transition-colors">
                Privacy
              </Link>
              <Link to="/terms-conditions" className="hover:text-foreground transition-colors">
                Terms
              </Link>
              <Link to="/contact-us" className="hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default BureauFooter;
