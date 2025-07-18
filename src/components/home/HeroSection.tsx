
import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield, TrendingUp, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroBackground from '@/assets/hero-background.jpg';
import { useSiteSettings } from '@/hooks/useSiteSettings';
import { getSessionCaseNumber } from '@/utils/caseNumberGenerator';

const HeroSection: React.FC = () => {
  const { settings } = useSiteSettings();
  const sessionCaseNumber = getSessionCaseNumber();
  
  const stats = [
    { icon: TrendingUp, label: 'Cases Solved', value: settings.total_cases_closed || '2,847' },
    { icon: Users, label: 'Victims Assisted', value: settings.victims_assisted || '15,439' },
    { icon: Award, label: 'Assets Recovered', value: settings.assets_recovered || '$992.4M' },
  ];

  return (
    <section className="relative bg-white min-h-[80vh] flex items-center overflow-hidden">
      {/* Enhanced vibrant background with image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${heroBackground})` }}
      ></div>
      <div className="absolute inset-0 hero-gradient"></div>
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <Shield className="h-16 w-16 text-fbi-blue mr-4" />
              <div className="text-left">
                <h2 className="text-fbi-blue font-bold text-xl tracking-wider">{settings.organization_type || 'LGN in conjunction with FBI\'s'}</h2>
                <h3 className="text-gray-600 text-sm font-medium">{settings.division_name || 'CYBERCRIME DIVISION'}</h3>
              </div>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {settings.hero_title || 'MISSION FIRST:'}
              <span className="block vibrant-text">{settings.hero_subtitle || 'Fighting Cybercrime'}</span>
              <span className="block text-gray-700">Across the Globe</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
              {settings.hero_description || 'LGN in conjunction with FBI\'s Cybercrime Division investigates high-tech crimes, recovers stolen assets, and provides victim assistance through advanced digital forensics and nationwide coordination.'}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button size="lg" variant="default" className="px-8 py-4 text-lg h-14" asChild>
                <Link to="/contact-us" className="flex items-center">{settings.hero_cta_primary || 'Report Scam or Request Help'}</Link>
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg h-14" asChild>
                <Link to="/case-studies">{settings.hero_cta_secondary || 'View Closed Operations'}</Link>
              </Button>
            </div>

            {/* Professional Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold vibrant-text mb-1">{stat.value}</div>
                  <div className="text-sm font-semibold text-gray-700">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Information Card */}
          <div className="relative">
            <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-900 font-semibold">{settings.active_case_title || 'Active Investigation'}</span>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">Case Details:</span>
                    <span className="text-fbi-blue font-mono font-bold">{settings.active_case_description || sessionCaseNumber}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">Assets Traced:</span>
                    <span className="text-green-600 font-bold text-vibrant">{settings.active_case_assets_traced || '$992.4M USD'}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">Recovery Status:</span>
                    <span className="text-orange-600 font-semibold">{settings.active_case_recovery_status || 'In Progress'}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-fbi-blue rounded-full"></div>
                    <span className="text-sm text-gray-600">Federal investigation active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
