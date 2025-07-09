
import React from 'react';
import Layout from '@/components/layout/Layout';
import EmergencyBanner from '@/components/home/EmergencyBanner';
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';

const Index: React.FC = () => {
  return (
    <>
      <EmergencyBanner />
      <Layout>
        <HeroSection />
        <ServicesSection />
      </Layout>
    </>
  );
};

export default Index;
