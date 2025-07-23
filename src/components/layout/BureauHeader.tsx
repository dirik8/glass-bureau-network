import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Shield, Phone, Search, FileSearch, LogOut } from 'lucide-react';
import ContactModal from '@/components/ContactModal';
import SearchModal from '@/components/SearchModal';
import { useSiteSettings } from '@/hooks/useSiteSettings';
import { useAuth } from '@/hooks/useAuth';

const BureauHeader: React.FC = () => {
  const { settings } = useSiteSettings();
  const { user, isAdmin, signOut } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  const handleLogout = async () => {
    await signOut();
    // Clear access granted sessions
    sessionStorage.removeItem('access_granted_admin_access_code');
    sessionStorage.removeItem('access_granted_setup_access_code');
    window.location.href = '/';
  };

  const navigationItems = [
    {
      title: 'Scam Intelligence',
      items: [
        { title: 'Cryptocurrency Fraud', href: '/cryptocurrency-scams' },
        { title: 'Foreign Exchange Scams', href: '/forex-scams' },
        { title: 'Romance Fraud', href: '/romance-scams' },
        { title: 'Investment Fraud', href: '/pig-butchering-scam' },
        { title: 'Trading Scams', href: '/fake-trading-scam' },
        { title: 'Binary Options Fraud', href: '/binary-options-scams' },
        { title: 'Job Scams', href: '/job-scam' },
        { title: 'Task Scams', href: '/task-scam' },
        { title: 'Online Dating Scams', href: '/online-dating-scam' },
        { title: 'Phishing Attacks', href: '/phishing-scam' },
        { title: 'Wallet Poisoning', href: '/wallet-poisoning-scam' },
        { title: 'Stock Trading Fraud', href: '/stock-trading-scams' },
      ]
    },
    {
      title: 'Recovery Services',
      items: [
        { title: 'Asset Recovery', href: '/asset-recovery-solutions' },
        { title: 'Digital Forensics', href: '/blockchain-forensic' },
        { title: 'Investigation Services', href: '/crypto-investigation' },
        { title: 'Blockchain Analysis', href: '/blockchain-analyst' },
        { title: 'Prevention Programs', href: '/scam-prevention' },
      ]
    },
    {
      title: 'State Intelligence',
      items: [
        { title: 'All States Directory', href: '/state-intelligence' },
        { title: 'Alabama', href: '/alabama-cryptocurrency-scam-statistics-2020-2024' },
        { title: 'Alaska', href: '/alaska-cryptocurrency-scam-statistics-2020-2024' },
        { title: 'Arizona', href: '/arizona-cryptocurrency-scam-statistics-2020-2024' },
        { title: 'Arkansas', href: '/arkansas-cryptocurrency-scam-statistics-2020-2024' },
        { title: 'California', href: '/california-cryptocurrency-scam-statistics-2020-2024' },
        { title: 'Colorado', href: '/colorado-cryptocurrency-scam-statistics-2020-2024' },
        { title: 'Connecticut', href: '/connecticut-cryptocurrency-scam-statistics-2020-2024' },
        { title: 'Delaware', href: '/delaware-cryptocurrency-scam-statistics-2020-2024' },
        { title: 'Florida', href: '/florida-cryptocurrency-scam-statistics-2020-2024' },
        { title: 'Georgia', href: '/georgia-cryptocurrency-scam-statistics-2020-2024' },
        { title: 'Hawaii', href: '/hawaii-cryptocurrency-scam-statistics-2020-2024' },
        { title: 'Idaho', href: '/idaho-cryptocurrency-scam-statistics-2020-2024' },
        { title: 'Illinois', href: '/illinois-cryptocurrency-scam-statistics-2020-2024' },
        { title: 'Indiana', href: '/indiana-cryptocurrency-scam-statistics-2020-2024' },
        { title: 'Iowa', href: '/iowa-cryptocurrency-scam-statistics-2020-2024' },
        { title: 'Kansas', href: '/kansas-cryptocurrency-scam-statistics-2020-2024' },
        { title: 'Kentucky', href: '/kentucky-cryptocurrency-scam-statistics-2020-2024' },
        { title: 'Louisiana', href: '/louisiana-cryptocurrency-scam-statistics-2020-2024' },
        { title: 'Maine', href: '/maine-cryptocurrency-scam-statistics-2020-2024' },
        { title: 'Maryland', href: '/maryland-cryptocurrency-scam-statistics-2020-2024' },
        { title: 'Massachusetts', href: '/massachusetts-cryptocurrency-scam-statistics-2020-2024' },
        { title: 'Michigan', href: '/michigan-cryptocurrency-scam-statistics-2020-2024' },
        { title: 'Minnesota', href: '/minnesota-cryptocurrency-scam-statistics-2020-2024' },
        { title: 'Mississippi', href: '/mississippi-cryptocurrency-scam-statistics-2020-2024' },
        { title: 'Missouri', href: '/missouri-cryptocurrency-scam-statistics-2020-2024' },
        { title: 'Montana', href: '/montana-cryptocurrency-scam-statistics-2020-2024' },
        { title: 'Nebraska', href: '/nebraska-cryptocurrency-scam-statistics-2020-2024' },
        { title: 'Nevada', href: '/nevada-cryptocurrency-scam-statistics-2020-2024' },
        { title: 'New Hampshire', href: '/new-hampshire-cryptocurrency-scam-statistics-2020-2024' },
        { title: 'New Jersey', href: '/new-jersey-cryptocurrency-scam-statistics-2020-2024' },
        { title: 'New Mexico', href: '/new-mexico-cryptocurrency-scam-statistics-2020-2024' },
        { title: 'New York', href: '/new-york-cryptocurrency-scam-statistics-2020-2024' },
        { title: 'North Carolina', href: '/north-carolina-cryptocurrency-scam-statistics-2020-2024' },
        { title: 'North Dakota', href: '/north-dakota-cryptocurrency-scam-statistics-2020-2024' },
        { title: 'Ohio', href: '/ohio-cryptocurrency-scam-statistics-2020-2024' },
        { title: 'Oklahoma', href: '/oklahoma-cryptocurrency-scam-statistics-2020-2024' },
        { title: 'Oregon', href: '/oregon-cryptocurrency-scam-statistics-2020-2024' },
        { title: 'Pennsylvania', href: '/pennsylvania-cryptocurrency-scam-statistics-2020-2024' },
        { title: 'Rhode Island', href: '/rhode-island-cryptocurrency-scam-statistics-2020-2024' },
        { title: 'South Carolina', href: '/south-carolina-cryptocurrency-scam-statistics-2020-2024' },
        { title: 'South Dakota', href: '/south-dakota-cryptocurrency-scam-statistics-2020-2024' },
        { title: 'Tennessee', href: '/tennessee-cryptocurrency-scam-statistics-2020-2024' },
        { title: 'Texas', href: '/texas-cryptocurrency-scam-statistics-2020-2024' },
        { title: 'Utah', href: '/utah-cryptocurrency-scam-statistics-2020-2024' },
        { title: 'Vermont', href: '/vermont-cryptocurrency-scam-statistics-2020-2024' },
        { title: 'Virginia', href: '/virginia-cryptocurrency-scam-statistics-2020-2024' },
        { title: 'Washington', href: '/washington-cryptocurrency-scam-statistics-2020-2024' },
        { title: 'West Virginia', href: '/west-virginia-cryptocurrency-scam-statistics-2020-2024' },
        { title: 'Wisconsin', href: '/wisconsin-cryptocurrency-scam-statistics-2020-2024' },
        { title: 'Wyoming', href: '/wyoming-cryptocurrency-scam-statistics-2020-2024' },
      ]
    },
    {
      title: 'Resources',
      items: [
        { title: 'Case Studies', href: '/case-studies' },
        { title: 'Research Team', href: '/lionsgate-network-research-team' },
        { title: 'Security Analysis', href: '/ledger-security-incidents-analysis-and-recommendations' },
        { title: 'Q&A', href: '/qa' },
        { title: 'Manuals', href: '/manuals' },
      ]
    }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        {/* Dynamic Company Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <Shield className="h-10 w-10 text-primary" />
          <div className="flex flex-col">
            <span className="font-bold text-xl leading-none vibrant-text">{settings.company_name || 'LGN ADVANCED SCAM RECOVERY'}</span>
            <span className="text-xs text-muted-foreground leading-none font-bold">{settings.division_name || 'LGN CYBERCRIME DIVISION'}</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {navigationItems.map((item) => (
              <NavigationMenuItem key={item.title}>
                <NavigationMenuTrigger className="h-9 px-4 py-2 text-foreground hover:text-primary font-medium">
                  {item.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-background border border-border">
                    {item.items.map((subItem) => (
                      <NavigationMenuLink
                        key={subItem.href}
                        asChild
                      >
                        <Link
                          to={subItem.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            {subItem.title}
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Action Buttons */}
        <div className="flex items-center space-x-2">
          <Button 
            variant="ghost" 
            size="sm" 
            className="hidden md:flex text-muted-foreground hover:text-primary"
            onClick={() => setSearchModalOpen(true)}
          >
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
          <Button 
            variant="outline"
            size="sm" 
            className="hidden md:flex"
            asChild
          >
            <Link to="/case-tracker">
              <FileSearch className="h-4 w-4 mr-2" />
              Check Case Progress
            </Link>
          </Button>
          <Button 
            size="sm" 
            className="hidden md:flex button-vibrant"
            onClick={() => setContactModalOpen(true)}
          >
            <Phone className="h-4 w-4 mr-2" />
            Get Help
          </Button>

          {/* Admin Logout Button */}
          {user && isAdmin && (
            <Button 
              variant="outline" 
              size="sm" 
              className="hidden md:flex text-destructive hover:text-destructive"
              onClick={handleLogout}
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          )}

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background">
              <div className="flex flex-col space-y-4 mt-8">
                <Link
                  to="/case-tracker"
                  className="flex items-center space-x-2 p-3 bg-accent rounded-md text-accent-foreground font-semibold"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <FileSearch className="h-5 w-5" />
                  <span>Check Case Progress</span>
                </Link>
                {navigationItems.map((item) => (
                  <div key={item.title} className="space-y-2">
                    <h3 className="font-semibold text-lg text-primary">{item.title}</h3>
                    <div className="grid gap-2 pl-4">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.href}
                          to={subItem.href}
                          className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      
      <ContactModal 
        isOpen={contactModalOpen} 
        onClose={() => setContactModalOpen(false)} 
      />
      <SearchModal 
        isOpen={searchModalOpen} 
        onClose={() => setSearchModalOpen(false)} 
      />
    </header>
  );
};

export default BureauHeader;
