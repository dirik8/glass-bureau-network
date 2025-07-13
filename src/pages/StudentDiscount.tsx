import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { GraduationCap, Percent, Users, FileText } from 'lucide-react';

const StudentDiscount: React.FC = () => {
  const [formData, setFormData] = useState({
    studentId: '',
    university: '',
    email: '',
    graduationYear: ''
  });

  const eligiblePrograms = [
    'Computer Science & Cybersecurity',
    'Criminal Justice & Law Enforcement',
    'Legal Studies & Law School',
    'Finance & Economics',
    'Digital Forensics & Information Security'
  ];

  const benefits = [
    { title: '50% Off Investigation Services', description: 'Reduced fees for blockchain analysis and case investigation' },
    { title: 'Free Educational Materials', description: 'Access to cryptocurrency security guides and best practices' },
    { title: 'Priority Support', description: 'Expedited case review and student-dedicated support team' },
    { title: 'Internship Opportunities', description: 'Paid internship positions in cybersecurity and forensics' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Student application:', formData);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Header Section */}
        <div className="bg-[hsl(var(--fbi-blue))] text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4 bg-white/10 text-white">
                Educational Program
              </Badge>
              <h1 className="text-government-xl font-bold mb-6">
                Student Assistance Program
              </h1>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Special discounts and support for students affected by cryptocurrency fraud
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto space-y-12">
            
            {/* Program Overview */}
            <Card className="government-card p-8">
              <div className="flex items-start gap-4 mb-6">
                <GraduationCap className="h-8 w-8 text-[hsl(var(--fbi-blue))] mt-1" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">Educational Support Initiative</h2>
                  <p className="text-muted-foreground leading-7 text-lg">
                    The LGN Recovery Bureau recognizes that students are particularly vulnerable to cryptocurrency fraud. Our Student Assistance Program provides reduced-cost services and educational resources to help student victims recover their assets and avoid future scams.
                  </p>
                </div>
              </div>
            </Card>

            {/* Eligibility & Benefits */}
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Eligibility */}
              <Card className="government-card p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Users className="h-6 w-6 text-[hsl(var(--fbi-blue))]" />
                  Eligibility Requirements
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Current Students</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Currently enrolled in accredited college/university</li>
                      <li>• Valid student ID and enrollment verification</li>
                      <li>• .edu email address required</li>
                      <li>• Undergraduate or graduate programs</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Preferred Programs</h3>
                    <ul className="space-y-1">
                      {eligiblePrograms.map((program, index) => (
                        <li key={index} className="text-sm text-muted-foreground">
                          • {program}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>

              {/* Benefits */}
              <Card className="government-card p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Percent className="h-6 w-6 text-[hsl(var(--fbi-blue))]" />
                  Program Benefits
                </h2>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index}>
                      <h3 className="font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Application Form */}
            <Card className="government-card p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <FileText className="h-6 w-6 text-[hsl(var(--fbi-blue))]" />
                Student Verification Application
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="studentId" className="text-base font-semibold">
                      Student ID Number
                    </Label>
                    <Input
                      id="studentId"
                      name="studentId"
                      value={formData.studentId}
                      onChange={handleInputChange}
                      placeholder="Enter your student ID"
                      className="mt-2"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="university" className="text-base font-semibold">
                      University/College
                    </Label>
                    <Input
                      id="university"
                      name="university"
                      value={formData.university}
                      onChange={handleInputChange}
                      placeholder="Institution name"
                      className="mt-2"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email" className="text-base font-semibold">
                      Student Email (.edu)
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="student@university.edu"
                      className="mt-2"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="graduationYear" className="text-base font-semibold">
                      Expected Graduation Year
                    </Label>
                    <Input
                      id="graduationYear"
                      name="graduationYear"
                      value={formData.graduationYear}
                      onChange={handleInputChange}
                      placeholder="2025"
                      className="mt-2"
                      required
                    />
                  </div>
                </div>

                <div className="text-center pt-4">
                  <Button type="submit" className="fbi-button px-8">
                    Apply for Student Status
                  </Button>
                </div>
              </form>
            </Card>

            {/* Case Examples */}
            <Card className="government-card p-8 bg-muted/50">
              <h2 className="text-2xl font-bold mb-6">Common Student Fraud Cases</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Investment Scams</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Fake investment platforms targeting students with promises of easy money for tuition.
                  </p>
                  <div className="text-xs text-[hsl(var(--fbi-blue))]">Average loss: $8,500</div>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Romance Scams</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Dating app fraudsters targeting college students with emotional manipulation.
                  </p>
                  <div className="text-xs text-[hsl(var(--fbi-blue))]">Average loss: $3,200</div>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Job Scams</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Fake remote work opportunities requiring cryptocurrency payments for "training."
                  </p>
                  <div className="text-xs text-[hsl(var(--fbi-blue))]">Average loss: $1,850</div>
                </div>
              </div>
            </Card>

            {/* Student Resources */}
            <Card className="government-card p-8">
              <h2 className="text-2xl font-bold mb-6">Educational Resources</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Free Downloads</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between items-center py-2 border-b">
                      <span className="text-sm">Cryptocurrency Safety Guide</span>
                      <Button variant="outline" size="sm">Download</Button>
                    </li>
                    <li className="flex justify-between items-center py-2 border-b">
                      <span className="text-sm">Student Fraud Prevention Handbook</span>
                      <Button variant="outline" size="sm">Download</Button>
                    </li>
                    <li className="flex justify-between items-center py-2 border-b">
                      <span className="text-sm">Digital Wallet Security Checklist</span>
                      <Button variant="outline" size="sm">Download</Button>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Webinar Series</h3>
                  <div className="space-y-3">
                    <div className="p-3 border rounded">
                      <h4 className="font-medium">Cryptocurrency Basics for Students</h4>
                      <p className="text-xs text-muted-foreground">Next session: February 15, 2025</p>
                    </div>
                    <div className="p-3 border rounded">
                      <h4 className="font-medium">Recognizing Online Fraud</h4>
                      <p className="text-xs text-muted-foreground">Next session: February 22, 2025</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Contact */}
            <Card className="government-card p-8">
              <h2 className="text-2xl font-bold mb-6">Student Support Contact</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Student Services Team</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p><strong>Email:</strong> students@lgnrecovery.gov</p>
                    <p><strong>Phone:</strong> 1-800-LGN-STUD</p>
                    <p><strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM EST</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Campus Outreach</h3>
                  <p className="text-muted-foreground mb-3">
                    We offer campus presentations and educational workshops. Contact us to schedule a visit to your university.
                  </p>
                  <Button variant="outline">
                    Request Campus Visit
                  </Button>
                </div>
              </div>
            </Card>

          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StudentDiscount;