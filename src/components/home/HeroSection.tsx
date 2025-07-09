
import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield, TrendingUp, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const stats = [
    { icon: TrendingUp, label: 'Cases Solved', value: '2,847' },
    { icon: Users, label: 'Victims Assisted', value: '15,439' },
    { icon: Award, label: 'Assets Recovered', value: '$847M' },
  ];

  return (
    <section className="relative bg-white min-h-[80vh] flex items-center">
      {/* Professional background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-fbi-blue/5 to-fbi-blue/10"></div>
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <Shield className="h-16 w-16 text-fbi-blue mr-4" />
              <div className="text-left">
                <h2 className="text-fbi-blue font-bold text-xl tracking-wider">FBI</h2>
                <h3 className="text-gray-600 text-sm font-medium">CYBERCRIME DIVISION</h3>
              </div>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              MISSION FIRST:
              <span className="block text-fbi-blue">Fighting Cybercrime</span>
              <span className="block text-gray-700">Across the Nation</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
              The FBI's Cybercrime Division investigates high-tech crimes, recovers stolen assets, 
              and provides victim assistance through advanced digital forensics and nationwide coordination.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button size="lg" className="bg-fbi-blue hover:bg-fbi-blue/90 text-white font-semibold px-8 py-4">
                <Link to="/contact-us" className="flex items-center">Report Scam or Request Help</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-fbi-blue text-fbi-blue hover:bg-fbi-blue hover:text-white px-8 py-4">
                <Link to="/case-studies">View Closed Operations</Link>
              </Button>
            </div>

            {/* Professional Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="h-8 w-8 text-fbi-blue mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
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
                  <span className="text-gray-900 font-semibold">Active Investigation</span>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">Case ID:</span>
                    <span className="text-fbi-blue font-mono font-bold">#FBI-2024-0847</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">Assets Traced:</span>
                    <span className="text-green-600 font-bold">$2.4M USD</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">Recovery Status:</span>
                    <span className="text-orange-600 font-semibold">In Progress</span>
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
