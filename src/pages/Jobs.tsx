import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Briefcase, MapPin, Clock, DollarSign, Users } from 'lucide-react';

const Jobs: React.FC = () => {
  const jobs = [
    {
      title: 'Senior Blockchain Analyst',
      department: 'Cyber Investigation Division',
      location: 'Washington, DC',
      type: 'Full-time',
      level: 'GS-13',
      salary: '$96,000 - $125,000',
      posted: '3 days ago',
      description: 'Lead cryptocurrency investigation team in complex fraud cases. Conduct advanced blockchain analysis and coordinate with international law enforcement.',
      requirements: [
        '5+ years blockchain analysis experience',
        'Advanced degree in Computer Science or related field',
        'Security clearance eligible',
        'Cryptocurrency investigation certification'
      ]
    },
    {
      title: 'Digital Forensics Specialist',
      department: 'Technical Operations',
      location: 'Washington, DC',
      type: 'Full-time',
      level: 'GS-12',
      salary: '$78,000 - $102,000',
      posted: '1 week ago',
      description: 'Perform digital forensics on cryptocurrency-related cases. Extract and analyze digital evidence from various devices and platforms.',
      requirements: [
        '3+ years digital forensics experience',
        'CISSP or equivalent certification',
        'Experience with EnCase, FTK, or similar tools',
        'Bachelor\'s degree in cybersecurity'
      ]
    },
    {
      title: 'Intelligence Analyst',
      department: 'Intelligence Division',
      location: 'Washington, DC',
      type: 'Full-time',
      level: 'GS-11',
      salary: '$65,000 - $85,000',
      posted: '2 weeks ago',
      description: 'Analyze financial crime patterns and provide intelligence support for ongoing investigations. Prepare briefings and reports for management.',
      requirements: [
        '2+ years intelligence analysis experience',
        'Strong analytical and writing skills',
        'Knowledge of financial crimes',
        'Bachelor\'s degree required'
      ]
    },
    {
      title: 'Victim Services Coordinator',
      department: 'Victim Services',
      location: 'Washington, DC',
      type: 'Full-time',
      level: 'GS-12',
      salary: '$78,000 - $102,000',
      posted: '4 days ago',
      description: 'Provide support services to cryptocurrency fraud victims. Coordinate recovery efforts and maintain victim communication throughout investigations.',
      requirements: [
        'Experience in victim services or social work',
        'Excellent communication skills',
        'Master\'s degree preferred',
        'Crisis intervention training'
      ]
    },
    {
      title: 'Legal Counsel',
      department: 'Legal Affairs',
      location: 'Washington, DC',
      type: 'Full-time',
      level: 'GS-14',
      salary: '$117,000 - $153,000',
      posted: '5 days ago',
      description: 'Provide legal guidance on cryptocurrency recovery cases. Draft legal documents and represent the bureau in court proceedings.',
      requirements: [
        'Juris Doctor from accredited law school',
        'Bar admission in good standing',
        '5+ years litigation experience',
        'Financial crimes law experience preferred'
      ]
    },
    {
      title: 'Data Scientist',
      department: 'Research & Development',
      location: 'Washington, DC',
      type: 'Full-time',
      level: 'GS-13',
      salary: '$96,000 - $125,000',
      posted: '1 week ago',
      description: 'Develop predictive models for fraud detection and asset recovery. Analyze large datasets to identify fraud patterns and trends.',
      requirements: [
        'PhD in Data Science, Statistics, or related field',
        'Experience with Python, R, and machine learning',
        'Big data processing experience',
        'Cryptocurrency knowledge preferred'
      ]
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
                Current Openings
              </Badge>
              <h1 className="text-government-xl font-bold mb-6">
                Available Positions
              </h1>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Join our mission to combat cryptocurrency fraud and protect American citizens
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto space-y-8">
            
            {/* Overview */}
            <Card className="government-card p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <Briefcase className="h-8 w-8 text-[hsl(var(--fbi-blue))]" />
                  <div>
                    <h2 className="text-2xl font-bold">Current Job Openings</h2>
                    <p className="text-muted-foreground">Competitive federal positions with excellent benefits</p>
                  </div>
                </div>
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  {jobs.length} Open Positions
                </Badge>
              </div>
            </Card>

            {/* Job Listings */}
            <div className="space-y-6">
              {jobs.map((job, index) => (
                <Card key={index} className="government-card p-8 hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold">{job.title}</h3>
                        <Badge variant="outline">{job.level}</Badge>
                      </div>
                      <div className="flex items-center gap-6 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {job.department}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {job.type}
                        </div>
                        <div className="flex items-center gap-1">
                          <DollarSign className="h-4 w-4" />
                          {job.salary}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary" className="mb-2">
                        Posted {job.posted}
                      </Badge>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Position Description</h4>
                      <p className="text-muted-foreground leading-7">{job.description}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Requirements</h4>
                      <ul className="space-y-1">
                        {job.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <div className="h-1.5 w-1.5 bg-[hsl(var(--fbi-blue))] rounded-full mt-2"></div>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t">
                      <div className="text-sm text-muted-foreground">
                        Apply through USAJobs.gov
                      </div>
                      <Button className="fbi-button">
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Benefits Overview */}
            <Card className="government-card p-8 bg-muted/50">
              <h2 className="text-2xl font-bold mb-6">Why Work With Us?</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Competitive Benefits</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Federal health insurance (FEHB)</li>
                    <li>• Thrift Savings Plan (TSP) with matching</li>
                    <li>• Federal Employees Retirement System (FERS)</li>
                    <li>• Life insurance coverage</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Work-Life Balance</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Flexible work schedules</li>
                    <li>• Telework opportunities</li>
                    <li>• Annual and sick leave</li>
                    <li>• Federal holidays</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Career Development</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Professional training programs</li>
                    <li>• Conference and seminar attendance</li>
                    <li>• Tuition reimbursement</li>
                    <li>• Clear advancement pathways</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Application Process */}
            <Card className="government-card p-8">
              <h2 className="text-2xl font-bold mb-6">Application Process</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-[hsl(var(--fbi-blue))] text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 text-xl font-bold">1</div>
                  <h3 className="font-semibold mb-2">Review Position</h3>
                  <p className="text-sm text-muted-foreground">Read job requirements and qualifications</p>
                </div>
                <div className="text-center">
                  <div className="bg-[hsl(var(--fbi-blue))] text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 text-xl font-bold">2</div>
                  <h3 className="font-semibold mb-2">Apply Online</h3>
                  <p className="text-sm text-muted-foreground">Submit application through USAJobs.gov</p>
                </div>
                <div className="text-center">
                  <div className="bg-[hsl(var(--fbi-blue))] text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 text-xl font-bold">3</div>
                  <h3 className="font-semibold mb-2">Background Check</h3>
                  <p className="text-sm text-muted-foreground">Complete security clearance process</p>
                </div>
                <div className="text-center">
                  <div className="bg-[hsl(var(--fbi-blue))] text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 text-xl font-bold">4</div>
                  <h3 className="font-semibold mb-2">Start Position</h3>
                  <p className="text-sm text-muted-foreground">Begin your federal career</p>
                </div>
              </div>
            </Card>

            {/* Contact */}
            <Card className="government-card p-8">
              <h2 className="text-2xl font-bold mb-6">Questions About Employment?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">HR Contact Information</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p><strong>Email:</strong> careers@lgnrecovery.gov</p>
                    <p><strong>Phone:</strong> 1-800-LGN-JOBS</p>
                    <p><strong>Hours:</strong> Monday - Friday, 8:00 AM - 5:00 PM EST</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Recruitment Office</h3>
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

export default Jobs;