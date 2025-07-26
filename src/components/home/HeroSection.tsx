
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
    <section className="relative bg-white min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh] flex items-center overflow-hidden">
      {/* Enhanced vibrant background with image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${heroBackground})` }}
      ></div>
      <div className="absolute inset-0 hero-gradient"></div>
      
      <div className="container relative z-10 px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Hero Content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-4 sm:mb-6">
              <Shield className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 text-fbi-blue mr-3 sm:mr-4 flex-shrink-0" />
              <div className="text-left">
                <h2 className="text-fbi-blue font-bold text-lg sm:text-xl tracking-wider">{settings.organization_type || 'LGN in conjunction with FBI\'s'}</h2>
                <h3 className="text-gray-600 text-xs sm:text-sm font-medium">{settings.division_name || 'CYBERCRIME DIVISION'}</h3>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              {settings.hero_title || 'MISSION FIRST:'}
              <span className="block vibrant-text">{settings.hero_subtitle || 'Fighting Cybercrime'}</span>
              <span className="block text-gray-700">Across the Globe</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl leading-relaxed">
              {settings.hero_description || 'LGN in conjunction with FBI\'s Cybercrime Division investigates high-tech crimes, recovers stolen assets, and provides victim assistance through advanced digital forensics and nationwide coordination.'}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8 sm:mb-12">
              <Button size="lg" variant="default" className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg h-12 sm:h-14" asChild>
                <Link to="/contact-us" className="flex items-center">{settings.hero_cta_primary || 'Report Scam or Request Help'}</Link>
              </Button>
              <Button size="lg" variant="outline" className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg h-12 sm:h-14" asChild>
                <Link to="/case-studies">{settings.hero_cta_secondary || 'View Closed Operations'}</Link>
              </Button>
            </div>

            {/* Professional Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 pt-6 sm:pt-8 border-t border-gray-200">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-primary mx-auto mb-2 sm:mb-3" />
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold vibrant-text mb-1">{stat.value}</div>
                  <div className="text-xs sm:text-sm font-semibold text-gray-700">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Information Card */}
          <div className="relative mt-8 lg:mt-0">
            <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 sm:p-8">
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
