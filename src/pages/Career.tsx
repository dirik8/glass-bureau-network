import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Briefcase, Users, GraduationCap, Shield } from 'lucide-react';

const Career: React.FC = () => {
  const benefits = [
    'Federal health insurance',
    'Retirement savings plan',
    'Paid time off and holidays',
    'Professional development',
    'Security clearance assistance',
    'Flexible work arrangements'
  ];

  const departments = [
    {
      title: 'Cyber Investigation Division',
      description: 'Digital forensics and cryptocurrency investigation specialists',
      positions: 3
    },
    {
      title: 'Legal Affairs Department',
      description: 'Attorneys and legal analysts supporting recovery operations',
      positions: 2
    },
    {
      title: 'Intelligence Analysis Unit',
      description: 'Data analysts and intelligence specialists',
      positions: 4
    },
    {
      title: 'Operations Support',
      description: 'Administrative and operational support roles',
      positions: 2
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Header Section */}
        <div className="bg-[hsl(var(--fbi-blue))] text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4 bg-white/10 text-white">
                Employment Opportunities
              </Badge>
              <h1 className="text-government-xl font-bold mb-6">
                Career Opportunities
              </h1>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Join the LGN Recovery Bureau in protecting citizens from cryptocurrency fraud
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto space-y-12">
            
            {/* Mission Statement */}
            <Card className="government-card p-8">
              <div className="flex items-start gap-4 mb-6">
                <Shield className="h-8 w-8 text-[hsl(var(--fbi-blue))] mt-1" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                  <p className="text-muted-foreground leading-7 text-lg">
                    The LGN Recovery Bureau is dedicated to combating cryptocurrency fraud and helping victims recover their assets. We seek dedicated professionals who share our commitment to justice and public service.
                  </p>
                </div>
              </div>
            </Card>

            {/* Open Positions */}
            <div>
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <Briefcase className="h-6 w-6 text-[hsl(var(--fbi-blue))]" />
                Current Openings by Department
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {departments.map((dept, index) => (
                  <Card key={index} className="government-card p-6 hover:shadow-lg transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold">{dept.title}</h3>
                      <Badge variant="secondary">{dept.positions} openings</Badge>
                    </div>
                    <p className="text-muted-foreground mb-6">{dept.description}</p>
                    <Button variant="outline" className="w-full">
                      View Positions
                    </Button>
                  </Card>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <Card className="government-card p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Users className="h-6 w-6 text-[hsl(var(--fbi-blue))]" />
                Employee Benefits
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Comprehensive Benefits Package</h3>
                  <ul className="space-y-2">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center gap-2 text-muted-foreground">
                        <div className="h-2 w-2 bg-[hsl(var(--fbi-blue))] rounded-full"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Career Development</h3>
                  <p className="text-muted-foreground leading-7">
                    We invest in our employees' professional growth through training programs, conference attendance, certification support, and clear advancement pathways. Join a team that values continuous learning and career progression.
                  </p>
                </div>
              </div>
            </Card>

            {/* Requirements */}
            <Card className="government-card p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <GraduationCap className="h-6 w-6 text-[hsl(var(--fbi-blue))]" />
                General Requirements
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Basic Qualifications</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• U.S. citizenship required</li>
                    <li>• Bachelor's degree (Master's preferred)</li>
                    <li>• Background investigation clearance</li>
                    <li>• Strong analytical and communication skills</li>
                    <li>• Commitment to public service</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Preferred Experience</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Law enforcement or legal background</li>
                    <li>• Cybersecurity or digital forensics experience</li>
                    <li>• Financial crimes investigation</li>
                    <li>• Cryptocurrency knowledge</li>
                    <li>• Federal government experience</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Application Process */}
            <Card className="government-card p-8 bg-muted/50">
              <h2 className="text-2xl font-bold mb-6">Application Process</h2>
              <div className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-[hsl(var(--fbi-blue))] text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 text-xl font-bold">1</div>
                    <h3 className="font-semibold mb-2">Apply Online</h3>
                    <p className="text-sm text-muted-foreground">Submit application through USAJobs.gov</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-[hsl(var(--fbi-blue))] text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 text-xl font-bold">2</div>
                    <h3 className="font-semibold mb-2">Background Check</h3>
                    <p className="text-sm text-muted-foreground">Complete security clearance process</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-[hsl(var(--fbi-blue))] text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 text-xl font-bold">3</div>
                    <h3 className="font-semibold mb-2">Interview</h3>
                    <p className="text-sm text-muted-foreground">Panel interview with department heads</p>
                  </div>
                </div>
                
                <div className="text-center pt-6">
                  <Button className="fbi-button px-8">
                    View All Openings on USAJobs.gov
                  </Button>
                </div>
              </div>
            </Card>

            {/* Contact */}
            <Card className="government-card p-8">
              <h2 className="text-2xl font-bold mb-6">Human Resources Contact</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">General Inquiries</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p><strong>Email:</strong> careers@lgnrecovery.gov</p>
                    <p><strong>Phone:</strong> 1-800-LGN-JOBS</p>
                    <p><strong>Hours:</strong> Monday - Friday, 8:00 AM - 5:00 PM EST</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Address</h3>
                  <div className="space-y-1 text-muted-foreground">
                    <p>LGN Recovery Bureau</p>
                    <p>Human Resources Division</p>
                    <p>935 Pennsylvania Avenue, NW</p>
                    <p>Washington, DC 20535</p>
                  </div>
                </div>
              </div>
            </Card>

          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Career;