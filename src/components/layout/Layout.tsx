
import React from 'react';
import BureauHeader from './BureauHeader';
import BureauFooter from './BureauFooter';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <BureauHeader />
      <main className="flex-1">
        {children}
      </main>
      <BureauFooter />
    </div>
  );
};

export default Layout;
