import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Shield, Phone, Search } from 'lucide-react';

const BureauHeader: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        { title: 'California Statistics', href: '/california-cryptocurrency-scam-statistics-2020-2024' },
        { title: 'New York Statistics', href: '/new-york-cryptocurrency-scam-statistics-2020-2024' },
        { title: 'Texas Statistics', href: '/texas-cryptocurrency-scam-statistics-2020-2024' },
        { title: 'Florida Statistics', href: '/florida-cryptocurrency-scam-statistics-2020-2024' },
        { title: 'Arizona Statistics', href: '/arizona-cryptocurrency-scam-statistics-2020-2024' },
        { title: 'Colorado Statistics', href: '/colorado-cryptocurrency-scam-statistics-2020-2024' },
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
        {/* LGN ADVANCED SCAM RECOVERY Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <Shield className="h-10 w-10 text-primary" />
          <div className="flex flex-col">
            <span className="font-bold text-xl leading-none vibrant-text">LGN ADVANCED SCAM RECOVERY</span>
            <span className="text-xs text-muted-foreground leading-none font-bold">CYBERCRIME DIVISION</span>
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
          <Button variant="ghost" size="sm" className="hidden md:flex text-muted-foreground hover:text-primary">
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
          <Button size="sm" className="hidden md:flex button-vibrant">
            <Phone className="h-4 w-4 mr-2" />
            Get Help
          </Button>

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background">
              <div className="flex flex-col space-y-4 mt-8">
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
    </header>
  );
};

export default BureauHeader;
