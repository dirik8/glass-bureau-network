
import React from 'react';
import { Button } from '@/components/ui/button';
import { LiquidGlassCard } from '@/components/LiquidGlassCard';
import { Shield, TrendingUp, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const stats = [
    { icon: TrendingUp, label: 'Recovery Rate', value: '94%' },
    { icon: Users, label: 'Cases Resolved', value: '2,847' },
    { icon: Award, label: 'Assets Recovered', value: '$847M' },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-deep-navy via-calm-blue to-trust-green min-h-[90vh] flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="7" cy="7" r="7"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <Shield className="h-12 w-12 text-premium-gold mr-3" />
              <div className="text-left">
                <h2 className="text-premium-gold font-bold text-sm tracking-wider">LIONSGATE</h2>
                <h3 className="text-muted-white/80 text-xs">CYBERCRIME DIVISION</h3>
              </div>
            </div>

            <h1 className="text-bureau-xl font-bold text-muted-white mb-6 leading-tight">
              Elite Cybercrime
              <span className="block text-premium-gold">Investigation Bureau</span>
            </h1>

            <p className="text-xl text-muted-white/90 mb-8 max-w-2xl">
              Advanced blockchain forensics, cryptocurrency recovery, and digital asset protection. 
              When traditional law enforcement reaches its limits, we go further.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button size="lg" className="bg-premium-gold hover:bg-premium-gold/90 text-deep-navy font-semibold">
                <Link to="/contact-us">Report Cybercrime</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-muted-white text-muted-white hover:bg-muted-white hover:text-deep-navy">
                <Link to="/case-studies">View Case Studies</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="h-8 w-8 text-premium-gold mx-auto mb-2" />
                  <div className="text-2xl font-bold text-muted-white">{stat.value}</div>
                  <div className="text-sm text-muted-white/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative">
            <LiquidGlassCard className="p-8 animate-float">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-trust-green rounded-full animate-pulse"></div>
                  <span className="text-muted-white/90 font-medium">Active Investigation</span>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-white/70">Case ID:</span>
                    <span className="text-premium-gold font-mono">#LG-2024-0847</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-white/70">Assets Traced:</span>
                    <span className="text-trust-green font-bold">$2.4M USD</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-white/70">Recovery Status:</span>
                    <span className="text-premium-gold">In Progress</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-muted-white/20">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-premium-gold rounded-full"></div>
                    <span className="text-sm text-muted-white/80">Blockchain forensics active</span>
                  </div>
                </div>
              </div>
            </LiquidGlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
