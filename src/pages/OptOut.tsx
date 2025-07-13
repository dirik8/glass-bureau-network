import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Settings, Mail, Phone, Shield } from 'lucide-react';

const OptOut: React.FC = () => {
  const [email, setEmail] = useState('');
  const [preferences, setPreferences] = useState({
    marketing: false,
    newsletters: false,
    sms: false,
    calls: false,
    research: false,
    analytics: false
  });

  const handlePreferenceChange = (key: string, checked: boolean) => {
    setPreferences(prev => ({ ...prev, [key]: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle opt-out submission
    console.log('Opt-out preferences:', { email, preferences });
  };

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Header Section */}
        <div className="bg-[hsl(var(--fbi-blue))] text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4 bg-white/10 text-white">
                Privacy Control
              </Badge>
              <h1 className="text-government-xl font-bold mb-6">
                Communication Preferences
              </h1>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Manage your communication preferences and opt-out options
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto space-y-8">
            
            {/* Overview */}
            <Card className="government-card p-8">
              <div className="flex items-start gap-4 mb-6">
                <Settings className="h-8 w-8 text-[hsl(var(--fbi-blue))] mt-1" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">Your Privacy Rights</h2>
                  <p className="text-muted-foreground leading-7">
                    You have the right to control how LGN Recovery Bureau communicates with you. Use this form to update your preferences or opt-out of non-essential communications.
                  </p>
                </div>
              </div>
            </Card>

            {/* Opt-Out Form */}
            <Card className="government-card p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Mail className="h-6 w-6 text-[hsl(var(--fbi-blue))]" />
                Communication Preferences
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="email" className="text-base font-semibold">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="mt-2"
                    required
                  />
                  <p className="text-sm text-muted-foreground mt-2">
                    Enter the email address you want to update preferences for
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Marketing Communications</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id="marketing"
                        checked={preferences.marketing}
                        onCheckedChange={(checked) => handlePreferenceChange('marketing', checked as boolean)}
                      />
                      <Label htmlFor="marketing" className="text-sm">
                        Opt-out of marketing emails and promotional content
                      </Label>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id="newsletters"
                        checked={preferences.newsletters}
                        onCheckedChange={(checked) => handlePreferenceChange('newsletters', checked as boolean)}
                      />
                      <Label htmlFor="newsletters" className="text-sm">
                        Opt-out of newsletters and educational content
                      </Label>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id="sms"
                        checked={preferences.sms}
                        onCheckedChange={(checked) => handlePreferenceChange('sms', checked as boolean)}
                      />
                      <Label htmlFor="sms" className="text-sm">
                        Opt-out of SMS text messages (non-case related)
                      </Label>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id="calls"
                        checked={preferences.calls}
                        onCheckedChange={(checked) => handlePreferenceChange('calls', checked as boolean)}
                      />
                      <Label htmlFor="calls" className="text-sm">
                        Opt-out of marketing phone calls
                      </Label>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Data Usage</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id="research"
                        checked={preferences.research}
                        onCheckedChange={(checked) => handlePreferenceChange('research', checked as boolean)}
                      />
                      <Label htmlFor="research" className="text-sm">
                        Opt-out of research and survey invitations
                      </Label>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id="analytics"
                        checked={preferences.analytics}
                        onCheckedChange={(checked) => handlePreferenceChange('analytics', checked as boolean)}
                      />
                      <Label htmlFor="analytics" className="text-sm">
                        Opt-out of website analytics and tracking (non-essential cookies)
                      </Label>
                    </div>
                  </div>
                </div>

                <Button type="submit" className="w-full fbi-button">
                  Update Preferences
                </Button>
              </form>
            </Card>

            {/* Important Notice */}
            <Card className="government-card p-8 border-orange-200 bg-orange-50">
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-orange-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-orange-800">Important Notice</h3>
                  <div className="space-y-2 text-orange-700">
                    <p>• Case-related communications cannot be opted out of during active investigations</p>
                    <p>• Legal notices and safety alerts will continue to be sent regardless of preferences</p>
                    <p>• Account security notifications are mandatory for your protection</p>
                    <p>• Court-ordered communications may override opt-out preferences</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Complete Opt-Out */}
            <Card className="government-card p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Shield className="h-6 w-6 text-[hsl(var(--fbi-blue))]" />
                Complete Data Removal
              </h2>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-7">
                  If you wish to completely remove your data from our systems, please contact our Data Protection Officer. Note that this may affect ongoing cases and legal obligations.
                </p>
                <div className="space-y-2">
                  <p><strong>Email:</strong> privacy@lgnrecovery.gov</p>
                  <p><strong>Phone:</strong> 1-800-LGN-PRIV</p>
                  <p><strong>Reference:</strong> Data Removal Request</p>
                </div>
              </div>
            </Card>

            {/* Processing Notice */}
            <Card className="government-card p-8 bg-muted/50">
              <h3 className="text-lg font-semibold mb-3">Processing Information</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>• Preference changes take effect within 72 hours</p>
                <p>• You will receive a confirmation email once processed</p>
                <p>• Changes may not affect emails already in transit</p>
                <p>• You can update preferences at any time</p>
              </div>
            </Card>

          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OptOut;