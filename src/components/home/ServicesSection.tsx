
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Shield, Search, Users, TrendingUp, FileText, AlertTriangle, Globe, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSiteSettings } from '@/hooks/useSiteSettings';

const ServicesSection: React.FC = () => {
  const { settings } = useSiteSettings();
  const services = [
    {
      category: 'Investigation Units',
      icon: Shield,
      services: [
        {
          title: 'Cryptocurrency Fraud Investigation',
          description: 'Specialized unit tracking digital currency crimes and blockchain forensics',
          link: '/cryptocurrency-scams',
          priority: 'Critical',
          cases: '3,247 active'
        },
        {
          title: 'Romance Scam Division',
          description: 'Investigating relationship-based fraud and international crime rings',
          link: '/romance-scams',
          priority: 'High',
          cases: '1,892 active'
        },
        {
          title: 'Trading Platform Fraud',
          description: 'Fake investment platforms and binary options scam investigations',
          link: '/fake-trading-scam',
          priority: 'Critical',
          cases: '2,156 active'
        }
      ]
    },
    {
      category: 'Victim Assistance Programs',
      icon: Users,
      services: [
        {
          title: 'Asset Recovery Solutions',
          description: 'Federal programs to trace and recover stolen cryptocurrency and funds',
          link: '/asset-recovery-solutions',
          priority: 'Active',
          cases: '$24.8M recovered'
        },
        {
          title: 'Victim Support Services',
          description: '24/7 assistance for cybercrime victims and their families',
          link: '/contact-us',
          priority: 'Available',
          cases: '24/7 hotline'
        },
        {
          title: 'Restitution Programs',
          description: 'Compensation and financial recovery assistance for verified victims',
          link: '/case-studies',
          priority: 'Active',
          cases: '67% success rate'
        }
      ]
    },
    {
      category: 'Prevention & Intelligence',
      icon: AlertTriangle,
      services: [
        {
          title: 'Scam Prevention Education',
          description: 'Public awareness campaigns and educational resources',
          link: '/scam-prevention',
          priority: 'Nationwide',
          cases: '50+ programs'
        },
        {
          title: 'Threat Intelligence Reports',
          description: 'Real-time analysis of emerging cybercrime trends and patterns',
          link: '/blog',
          priority: 'Updated Daily',
          cases: 'Intelligence briefs'
        },
        {
          title: 'Business Partnership Program',
          description: 'Collaboration with financial institutions and tech companies',
          link: '/lionsgate-network-research-team',
          priority: 'Active',
          cases: '180+ partners'
        }
      ]
    },
    {
      category: 'Digital Forensics',
      icon: Search,
      services: [
        {
          title: 'Blockchain Analysis',
          description: 'Advanced cryptocurrency transaction tracing and analysis',
          link: '/blockchain-analyst',
          priority: 'Advanced',
          cases: 'Specialized unit'
        },
        {
          title: 'Digital Evidence Recovery',
          description: 'Computer forensics and digital evidence preservation',
          link: '/blockchain-forensic',
          priority: 'Available',
          cases: 'Lab certified'
        },
        {
          title: 'Crypto Investigation Tools',
          description: 'State-of-the-art tools for cryptocurrency investigation',
          link: '/crypto-investigation',
          priority: 'Latest Tech',
          cases: 'AI-powered'
        }
      ]
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority.toLowerCase()) {
      case 'critical': return 'bg-red-600';
      case 'high': return 'bg-orange-500';
      case 'active': return 'bg-fbi-blue';
      case 'available': return 'bg-green-600';
      default: return 'bg-government-gray-500';
    }
  };

  return (
    <section id="services" className="py-20 bg-government-gray-50">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Shield className="h-12 w-12 text-fbi-blue" />
            <div>
              <h2 className="text-4xl font-bold text-fbi-blue">Federal Cybercrime Services</h2>
              <p className="text-government-gray-600">Comprehensive investigation and victim assistance programs</p>
            </div>
          </div>
          <p className="text-xl text-government-gray-700 max-w-4xl mx-auto">
            The FBI Cybercrime Division provides specialized investigation units, victim assistance programs, 
            prevention resources, and cutting-edge digital forensics to combat cyber threats nationwide.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-16">
          {services.map((category) => (
            <div key={category.category}>
              <div className="flex items-center space-x-3 mb-8">
                <category.icon className="h-8 w-8 text-fbi-blue" />
                <h3 className="text-2xl font-bold text-fbi-blue">{category.category}</h3>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {category.services.map((service, index) => (
                  <Card key={index} className="government-card hover:shadow-lg transition-all duration-300 group">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-lg text-fbi-blue group-hover:text-fbi-blue-600 transition-colors">
                            {service.title}
                          </CardTitle>
                          <div className="flex items-center space-x-2 mt-2">
                            <Badge 
                              className={`text-white text-xs ${getPriorityColor(service.priority)}`}
                            >
                              {service.priority}
                            </Badge>
                            <span className="text-sm text-government-gray-500">{service.cases}</span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-government-gray-700 leading-relaxed">
                        {service.description}
                      </p>
                      <Button 
                        variant="outline" 
                        className="w-full btn-enhanced"
                        asChild
                      >
                        <Link to={service.link}>
                          Access Service
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Emergency Contact Section */}
        <div className="mt-16 text-center">
          <Card className="government-card border-red-200 bg-red-50">
            <CardContent className="p-8">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <AlertTriangle className="h-8 w-8 text-red-600" />
                <h3 className="text-2xl font-bold text-red-600">Emergency Cybercrime Reporting</h3>
              </div>
              <p className="text-government-gray-700 mb-6 max-w-2xl mx-auto">
                If you are currently being victimized by cybercrime or have suffered recent financial losses, 
                contact our emergency response team immediately.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="emergency" asChild>
                  <Link to="/contact-us">File Emergency Report</Link>
                </Button>
                <Button size="lg" variant="emergency">
                  Emergency Hotline: {settings.emergency_phone || '(438) 602-5895'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Statistics Footer */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-fbi-blue">{settings.total_cases_closed || '127'}</div>
            <div className="text-sm text-government-gray-600">Cases Closed (2024)</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-fbi-blue">{settings.assets_recovered || '$24.8M'}</div>
            <div className="text-sm text-government-gray-600">Assets Recovered</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-fbi-blue">{settings.victims_assisted || '3,847'}</div>
            <div className="text-sm text-government-gray-600">Victims Assisted</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-fbi-blue">{settings.recovery_success_rate || '89%'}</div>
            <div className="text-sm text-government-gray-600">Recovery Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
