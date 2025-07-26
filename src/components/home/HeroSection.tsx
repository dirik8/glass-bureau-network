
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
    <section className="relative bg-white min-h-[50vh] xs:min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh] flex items-center overflow-hidden">
      {/* Enhanced vibrant background with image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${heroBackground})` }}
      ></div>
      <div className="absolute inset-0 hero-gradient"></div>
      
      <div className="container relative z-10 px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Hero Content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-3 sm:mb-4 md:mb-6">
              <Shield className="h-8 w-8 xs:h-10 xs:w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 text-fbi-blue mr-2 xs:mr-3 sm:mr-4 flex-shrink-0" />
              <div className="text-left min-w-0">
                <h2 className="text-fbi-blue font-bold text-sm xs:text-base sm:text-lg md:text-xl tracking-wider truncate">{settings.organization_type || 'LGN in conjunction with FBI\'s'}</h2>
                <h3 className="text-gray-600 text-xs sm:text-sm font-medium truncate">{settings.division_name || 'CYBERCRIME DIVISION'}</h3>
              </div>
            </div>

            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6 leading-tight">
              {settings.hero_title || 'MISSION FIRST:'}
              <span className="block vibrant-text">{settings.hero_subtitle || 'Fighting Cybercrime'}</span>
              <span className="block text-gray-700">Across the Globe</span>
            </h1>

            <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 mb-4 sm:mb-6 md:mb-8 max-w-2xl leading-relaxed">
              {settings.hero_description || 'LGN in conjunction with FBI\'s Cybercrime Division investigates high-tech crimes, recovers stolen assets, and provides victim assistance through advanced digital forensics and nationwide coordination.'}
            </p>

            <div className="flex flex-col xs:flex-row gap-2 xs:gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-8 md:mb-12">
              <Button size="lg" variant="default" className="px-4 xs:px-6 sm:px-8 py-2 xs:py-3 sm:py-4 text-sm xs:text-base sm:text-lg h-10 xs:h-12 sm:h-14 w-full xs:w-auto" asChild>
                <Link to="/contact-us" className="flex items-center justify-center">{settings.hero_cta_primary || 'Report Scam or Request Help'}</Link>
              </Button>
              <Button size="lg" variant="outline" className="px-4 xs:px-6 sm:px-8 py-2 xs:py-3 sm:py-4 text-sm xs:text-base sm:text-lg h-10 xs:h-12 sm:h-14 w-full xs:w-auto" asChild>
                <Link to="/case-studies" className="flex items-center justify-center">{settings.hero_cta_secondary || 'View Closed Operations'}</Link>
              </Button>
            </div>

            {/* Professional Stats */}
            <div className="grid grid-cols-3 gap-2 xs:gap-4 sm:gap-6 lg:gap-8 pt-4 sm:pt-6 md:pt-8 border-t border-gray-200">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 text-primary mx-auto mb-1 xs:mb-2 sm:mb-3" />
                  <div className="text-sm xs:text-base sm:text-xl md:text-2xl lg:text-3xl font-bold vibrant-text mb-1">{stat.value}</div>
                  <div className="text-xs sm:text-sm font-semibold text-gray-700 leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Information Card */}
          <div className="relative mt-6 sm:mt-8 lg:mt-0">
            <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 xs:p-6 sm:p-8">
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-900 font-semibold text-sm sm:text-base">{settings.active_case_title || 'Active Investigation'}</span>
                </div>
                
                <div className="space-y-2 sm:space-y-4">
                  <div className="flex flex-col xs:flex-row xs:justify-between xs:items-center py-2 border-b border-gray-100 gap-1 xs:gap-0">
                    <span className="text-gray-600 font-medium text-sm">Case Details:</span>
                    <span className="text-fbi-blue font-mono font-bold text-xs xs:text-sm">{settings.active_case_description || sessionCaseNumber}</span>
                  </div>
                  <div className="flex flex-col xs:flex-row xs:justify-between xs:items-center py-2 border-b border-gray-100 gap-1 xs:gap-0">
                    <span className="text-gray-600 font-medium text-sm">Assets Traced:</span>
                    <span className="text-green-600 font-bold text-vibrant text-xs xs:text-sm">{settings.active_case_assets_traced || '$992.4M USD'}</span>
                  </div>
                  <div className="flex flex-col xs:flex-row xs:justify-between xs:items-center py-2 border-b border-gray-100 gap-1 xs:gap-0">
                    <span className="text-gray-600 font-medium text-sm">Recovery Status:</span>
                    <span className="text-orange-600 font-semibold text-xs xs:text-sm">{settings.active_case_recovery_status || 'In Progress'}</span>
                  </div>
                </div>

                <div className="pt-3 sm:pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-fbi-blue rounded-full"></div>
                    <span className="text-xs sm:text-sm text-gray-600">Federal investigation active</span>
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
