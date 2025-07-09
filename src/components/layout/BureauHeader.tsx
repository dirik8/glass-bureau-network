
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
      title: 'Investigate',
      items: [
        { title: 'Cryptocurrency Fraud', href: '/cryptocurrency-scams' },
        { title: 'Foreign Exchange Scams', href: '/forex-scams' },
        { title: 'Romance Fraud', href: '/romance-scams' },
        { title: 'Investment Fraud', href: '/pig-butchering-scam' },
        { title: 'Trading Scams', href: '/fake-trading-scam' },
        { title: 'Binary Options Fraud', href: '/binary-options-scams' },
      ]
    },
    {
      title: 'Prevention & Recovery',
      items: [
        { title: 'Federal Recovery Programs', href: '/asset-recovery-solutions' },
        { title: 'Digital Forensics', href: '/blockchain-forensic' },
        { title: 'Investigation Services', href: '/crypto-investigation' },
        { title: 'Blockchain Analysis', href: '/blockchain-analyst' },
      ]
    },
    {
      title: 'Field Offices',
      items: [
        { title: 'California Field Office', href: '/california-cryptocurrency-scam-statistics-2020-2024' },
        { title: 'New York Field Office', href: '/new-york-cryptocurrency-scam-statistics-2020-2024' },
        { title: 'Texas Field Office', href: '/texas-cryptocurrency-scam-statistics-2020-2024' },
        { title: 'Florida Field Office', href: '/florida-cryptocurrency-scam-statistics-2020-2024' },
      ]
    },
    {
      title: 'Resources',
      items: [
        { title: 'Closed Operations', href: '/case-studies' },
        { title: 'Prevention Programs', href: '/scam-prevention' },
        { title: 'Intelligence Reports', href: '/lionsgate-network-research-team' },
        { title: 'Victim Assistance', href: '/qa' },
      ]
    }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        {/* FBI Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <Shield className="h-10 w-10 text-fbi-blue" />
          <div className="flex flex-col">
            <span className="font-bold text-xl leading-none text-fbi-blue">FBI</span>
            <span className="text-xs text-government-gray-600 leading-none font-medium">CYBERCRIME DIVISION</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {navigationItems.map((item) => (
              <NavigationMenuItem key={item.title}>
                <NavigationMenuTrigger className="h-9 px-4 py-2 text-government-gray-700 hover:text-fbi-blue font-medium">
                  {item.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white border border-government-gray-200">
                    {item.items.map((subItem) => (
                      <NavigationMenuLink
                        key={subItem.href}
                        asChild
                      >
                        <Link
                          to={subItem.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-government-gray-50 hover:text-fbi-blue focus:bg-government-gray-50 focus:text-fbi-blue"
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
          <Button variant="ghost" size="sm" className="hidden md:flex text-government-gray-600 hover:text-fbi-blue">
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
          <Button size="sm" className="hidden md:flex bg-fbi-blue hover:bg-fbi-blue/90 text-white">
            <Phone className="h-4 w-4 mr-2" />
            Report Crime
          </Button>

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white">
              <div className="flex flex-col space-y-4 mt-8">
                {navigationItems.map((item) => (
                  <div key={item.title} className="space-y-2">
                    <h3 className="font-semibold text-lg text-fbi-blue">{item.title}</h3>
                    <div className="grid gap-2 pl-4">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.href}
                          to={subItem.href}
                          className="block py-2 text-sm text-government-gray-600 hover:text-fbi-blue transition-colors"
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
