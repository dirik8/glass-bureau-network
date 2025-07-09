
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Shield, Target, Users, Globe, TrendingUp, Award, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  const missionPoints = [
    {
      icon: Target,
      title: 'Combat Cybercrime',
      description: 'Investigate and prosecute cybercriminals targeting American citizens and businesses'
    },
    {
      icon: Users,
      title: 'Victim Assistance',
      description: 'Provide comprehensive support and recovery services to cybercrime victims'
    },
    {
      icon: Globe,
      title: 'International Cooperation',
      description: 'Partner with global law enforcement to combat transnational cyber threats'
    },
    {
      icon: TrendingUp,
      title: 'Prevention & Education',
      description: 'Educate the public and private sector about emerging cyber threats'
    }
  ];

  const leadership = [
    {
      name: 'Director Sarah M. Johnson',
      title: 'Cybercrime Division Director',
      background: '15 years federal law enforcement, MS Cybersecurity',
      specialization: 'Financial crimes, international cooperation'
    },
    {
      name: 'Assistant Director Michael Chen',
      title: 'Digital Forensics Unit',
      background: '12 years digital investigations, PhD Computer Science',
      specialization: 'Blockchain analysis, cryptocurrency tracing'
    },
    {
      name: 'Assistant Director Lisa Rodriguez',
      title: 'Victim Services Division',
      background: '18 years victim advocacy, JD Criminal Justice',
      specialization: 'Asset recovery, victim compensation'
    }
  ];

  const achievements = [
    { metric: '127', label: 'Cases Closed (2024)', icon: Award },
    { metric: '$24.8M', label: 'Assets Recovered', icon: TrendingUp },
    { metric: '3,847', label: 'Victims Assisted', icon: Users },
    { metric: '23', label: 'Field Offices', icon: MapPin }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-fbi-blue text-white py-16">
          <div className="container">
            <div className="max-w-4xl">
              <div className="flex items-center space-x-3 mb-6">
                <Shield className="h-12 w-12" />
                <div>
                  <h1 className="text-4xl font-bold">FBI Cybercrime Division</h1>
                  <p className="text-fbi-blue-100">Protecting America in the Digital Age</p>
                </div>
              </div>
              <div className="bg-fbi-blue-900/50 p-6 rounded-lg">
                <p className="text-xl text-fbi-blue-100 leading-relaxed">
                  Established to combat the growing threat of cybercrime, our division combines 
                  cutting-edge technology with traditional investigative excellence to protect 
                  American citizens, businesses, and critical infrastructure from digital threats.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-fbi-blue mb-4">Our Mission</h2>
              <p className="text-xl text-government-gray-600 max-w-3xl mx-auto">
                To investigate cybercrime, protect victims, recover stolen assets, and prevent 
                future digital crimes through intelligence-driven operations and international cooperation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {missionPoints.map((point, index) => (
                <Card key={index} className="government-card text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <point.icon className="h-12 w-12 text-fbi-blue mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-fbi-blue mb-2">{point.title}</h3>
                    <p className="text-government-gray-600">{point.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="bg-government-gray-50 py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-fbi-blue mb-12 text-center">Division Leadership</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {leadership.map((leader, index) => (
                <Card key={index} className="government-card">
                  <CardHeader>
                    <div className="text-center">
                      <div className="w-24 h-24 bg-fbi-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                        <Shield className="h-12 w-12 text-white" />
                      </div>
                      <CardTitle className="text-xl text-fbi-blue">{leader.name}</CardTitle>
                      <Badge variant="secondary" className="mt-2">{leader.title}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="text-center space-y-2">
                    <p className="text-sm text-government-gray-600">{leader.background}</p>
                    <p className="text-sm font-medium text-fbi-blue">{leader.specialization}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-fbi-blue mb-12 text-center">2024 Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <Card key={index} className="government-card text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <achievement.icon className="h-8 w-8 text-fbi-blue mx-auto mb-3" />
                    <div className="text-3xl font-bold text-fbi-blue mb-1">{achievement.metric}</div>
                    <p className="text-sm text-government-gray-600">{achievement.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Organizational Structure */}
        <section className="bg-government-gray-50 py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-fbi-blue mb-8">Organizational Structure</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="government-card">
                <CardHeader>
                  <CardTitle className="text-xl text-fbi-blue">Investigation Units</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-government-gray-100">
                    <span>Financial Crimes Unit</span>
                    <Badge variant="secondary">Active</Badge>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-government-gray-100">
                    <span>Digital Forensics Unit</span>
                    <Badge variant="secondary">Active</Badge>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-government-gray-100">
                    <span>International Cooperation Unit</span>
                    <Badge variant="secondary">Active</Badge>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span>Threat Intelligence Unit</span>
                    <Badge variant="secondary">Active</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="government-card">
                <CardHeader>
                  <CardTitle className="text-xl text-fbi-blue">Support Services</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-government-gray-100">
                    <span>Victim Assistance Program</span>
                    <Badge variant="secondary">24/7</Badge>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-government-gray-100">
                    <span>Asset Recovery Division</span>
                    <Badge variant="secondary">Active</Badge>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-government-gray-100">
                    <span>Public Affairs Office</span>
                    <Badge variant="secondary">Active</Badge>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span>Training & Prevention</span>
                    <Badge variant="secondary">Nationwide</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-fbi-blue text-white py-16">
          <div className="container">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">Contact the Cybercrime Division</h2>
              <p className="text-xl text-fbi-blue-100 mb-8 max-w-3xl mx-auto">
                Report cybercrime, request assistance, or partner with us in protecting America's digital infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/contact-us">
                    <Shield className="h-5 w-5 mr-2" />
                    File a Report
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-fbi-blue">
                  <Phone className="h-5 w-5 mr-2" />
                  Emergency: (438) 602-5895
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
