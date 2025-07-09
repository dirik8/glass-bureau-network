
import React from 'react';
import Layout from '@/components/layout/Layout';
import { LiquidGlassCard } from '@/components/LiquidGlassCard';
import { Shield, Users, Award, Target } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Shield,
      title: 'Justice',
      description: 'Unwavering commitment to pursuing cybercriminals and protecting victims.'
    },
    {
      icon: Users,
      title: 'Expertise',
      description: 'Elite team of investigators, analysts, and blockchain forensic specialists.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Industry-leading recovery rates and investigation success stories.'
    },
    {
      icon: Target,
      title: 'Precision',
      description: 'Advanced technology and methodical approach to digital investigations.'
    }
  ];

  return (
    <Layout>
      <div className="py-24">
        <div className="container">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-bureau-xl font-bold text-deep-navy mb-6">
              About LionsGate Cybercrime Division
            </h1>
            <p className="text-xl text-steel-gray max-w-4xl mx-auto">
              We are an elite cybercrime investigation bureau specializing in cryptocurrency fraud, 
              blockchain forensics, and digital asset recovery. When traditional law enforcement 
              reaches its limits, we go further.
            </p>
          </div>

          {/* Mission */}
          <div className="mb-24">
            <LiquidGlassCard className="p-12 text-center">
              <h2 className="text-3xl font-bold text-deep-navy mb-6">Our Mission</h2>
              <p className="text-lg text-steel-gray max-w-3xl mx-auto">
                To provide world-class cybercrime investigation services, recover stolen digital assets, 
                and bring justice to victims of cryptocurrency and blockchain-related crimes through 
                advanced forensic techniques and relentless pursuit of cybercriminals.
              </p>
            </LiquidGlassCard>
          </div>

          {/* Values */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-deep-navy text-center mb-12">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <LiquidGlassCard key={index} className="p-8 text-center">
                  <value.icon className="h-12 w-12 text-premium-gold mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-deep-navy mb-3">{value.title}</h3>
                  <p className="text-steel-gray">{value.description}</p>
                </LiquidGlassCard>
              ))}
            </div>
          </div>

          {/* Team */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-deep-navy text-center mb-12">
              Elite Investigation Team
            </h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-deep-navy mb-6">
                  World-Class Expertise
                </h3>
                <div className="space-y-6 text-steel-gray">
                  <p>
                    Our team consists of former federal investigators, blockchain analysts, 
                    cybersecurity experts, and legal professionals with decades of combined 
                    experience in cybercrime investigation.
                  </p>
                  <p>
                    We maintain partnerships with international law enforcement agencies, 
                    cryptocurrency exchanges, and blockchain analysis firms to ensure 
                    comprehensive investigation capabilities.
                  </p>
                  <p>
                    Our investigators hold advanced certifications in digital forensics, 
                    blockchain analysis, and cybercrime investigation techniques.
                  </p>
                </div>
              </div>
              <LiquidGlassCard className="p-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-premium-gold">2,847</div>
                    <div className="text-steel-gray">Cases Successfully Resolved</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-trust-green">$847M</div>
                    <div className="text-steel-gray">Digital Assets Recovered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-calm-blue">94%</div>
                    <div className="text-steel-gray">Recovery Success Rate</div>
                  </div>
                </div>
              </LiquidGlassCard>
            </div>
          </div>

          {/* Technology */}
          <div>
            <LiquidGlassCard className="p-12">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-deep-navy mb-6">
                  Advanced Investigation Technology
                </h2>
                <p className="text-lg text-steel-gray max-w-4xl mx-auto">
                  We employ cutting-edge blockchain analysis tools, artificial intelligence, 
                  and proprietary investigation techniques to trace cryptocurrency transactions, 
                  identify bad actors, and recover stolen digital assets across multiple blockchains 
                  and cryptocurrency networks.
                </p>
              </div>
            </LiquidGlassCard>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
