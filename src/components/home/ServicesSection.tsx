
import React from 'react';
import { LiquidGlassCard } from '@/components/LiquidGlassCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Search, DollarSign, Shield, BarChart3, FileSearch, Users } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: Search,
      title: 'Cryptocurrency Investigation',
      description: 'Advanced blockchain analysis and cryptocurrency tracing using cutting-edge forensic tools.',
      href: '/crypto-investigation',
      color: 'text-calm-blue'
    },
    {
      icon: DollarSign,
      title: 'Asset Recovery Solutions',
      description: 'Professional recovery services for stolen digital assets and cryptocurrency.',
      href: '/asset-recovery-solutions',
      color: 'text-trust-green'
    },
    {
      icon: Shield,
      title: 'Blockchain Forensics',
      description: 'Comprehensive blockchain investigation and digital evidence collection.',
      href: '/blockchain-forensic',
      color: 'text-premium-gold'
    },
    {
      icon: BarChart3,
      title: 'Blockchain Analysis',
      description: 'Expert analysis of blockchain transactions and wallet relationships.',
      href: '/blockchain-analyst',
      color: 'text-calm-blue'
    },
    {
      icon: FileSearch,
      title: 'Scam Investigation',
      description: 'Specialized investigation of forex, romance, and cryptocurrency scams.',
      href: '/forex-scams',
      color: 'text-trust-green'
    },
    {
      icon: Users,
      title: 'Victim Support',
      description: 'Comprehensive support and guidance for cybercrime victims.',
      href: '/scam-prevention',
      color: 'text-premium-gold'
    }
  ];

  return (
    <section className="py-24 bg-muted-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-bureau-lg font-bold text-deep-navy mb-4">
            Specialized Investigation Services
          </h2>
          <p className="text-xl text-steel-gray max-w-3xl mx-auto">
            Our elite cybercrime division offers comprehensive investigation and recovery services 
            backed by advanced technology and years of expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <LiquidGlassCard 
              key={index} 
              className="p-8 hover:scale-105 transition-all duration-300"
            >
              <div className="text-center space-y-6">
                <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-deep-navy/10 to-calm-blue/10 flex items-center justify-center">
                  <service.icon className={`h-8 w-8 ${service.color}`} />
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-deep-navy mb-3">
                    {service.title}
                  </h3>
                  <p className="text-steel-gray mb-6">
                    {service.description}
                  </p>
                </div>

                <Button asChild variant="outline" className="w-full">
                  <Link to={service.href}>
                    Learn More
                  </Link>
                </Button>
              </div>
            </LiquidGlassCard>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link to="/contact-us">
              Request Investigation Consultation
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
