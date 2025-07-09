
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Shield, Phone, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

const BureauHeader: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationItems = [
    {
      title: 'Investigations',
      items: [
        { title: 'Cryptocurrency Scams', href: '/cryptocurrency-scams' },
        { title: 'Forex Scams', href: '/forex-scams' },
        { title: 'Romance Scams', href: '/romance-scams' },
        { title: 'Pig Butchering', href: '/pig-butchering-scam' },
        { title: 'Trading Scams', href: '/fake-trading-scam' },
        { title: 'Binary Options', href: '/binary-options-scams' },
      ]
    },
    {
      title: 'Services',
      items: [
        { title: 'Asset Recovery', href: '/asset-recovery-solutions' },
        { title: 'Blockchain Forensics', href: '/blockchain-forensic' },
        { title: 'Crypto Investigation', href: '/crypto-investigation' },
        { title: 'Blockchain Analysis', href: '/blockchain-analyst' },
      ]
    },
    {
      title: 'Regional Reports',
      items: [
        { title: 'California Statistics', href: '/california-cryptocurrency-scam-statistics-2020-2024' },
        { title: 'New York Statistics', href: '/new-york-cryptocurrency-scam-statistics-2020-2024' },
        { title: 'Texas Statistics', href: '/texas-cryptocurrency-scam-statistics-2020-2024' },
        { title: 'Florida Statistics', href: '/florida-cryptocurrency-scam-statistics-2020-2024' },
      ]
    },
    {
      title: 'Resources',
      items: [
        { title: 'Case Studies', href: '/case-studies' },
        { title: 'Prevention Guide', href: '/scam-prevention' },
        { title: 'Research', href: '/lionsgate-network-research-team' },
        { title: 'FAQ', href: '/qa' },
      ]
    }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <Shield className="h-8 w-8 text-primary" />
          <div className="flex flex-col">
            <span className="font-bold text-lg leading-none">LionsGate</span>
            <span className="text-xs text-muted-foreground leading-none">CYBERCRIME DIVISION</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {navigationItems.map((item) => (
              <NavigationMenuItem key={item.title}>
                <NavigationMenuTrigger className="h-9 px-4 py-2">
                  {item.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
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
          <Button variant="ghost" size="sm" className="hidden md:flex">
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
          <Button size="sm" className="hidden md:flex">
            <Phone className="h-4 w-4 mr-2" />
            Emergency Hotline
          </Button>

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                {navigationItems.map((item) => (
                  <div key={item.title} className="space-y-2">
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <div className="grid gap-2 pl-4">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.href}
                          to={subItem.href}
                          className="block py-2 text-sm hover:text-primary transition-colors"
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
