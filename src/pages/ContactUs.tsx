
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Layout from '@/components/layout/Layout';
import { LiquidGlassCard } from '@/components/LiquidGlassCard';
import { Phone, Mail, MapPin, Clock, AlertTriangle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    caseType: '',
    urgency: '',
    message: ''
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Case Submission Received",
      description: "Our investigation team will contact you within 24 hours.",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Layout>
      <div className="py-24">
        <div className="container">
          {/* Emergency Alert */}
          <div className="mb-12">
            <LiquidGlassCard className="p-6 border-l-4 border-red-500 bg-red-50/50">
              <div className="flex items-center space-x-3">
                <AlertTriangle className="h-6 w-6 text-red-600" />
                <div>
                  <h3 className="font-bold text-red-800">Emergency Cybercrime Response</h3>
                  <p className="text-red-700">
                    For active scams or urgent cases, call our emergency hotline immediately: 
                    <strong className="ml-1">+1 (438) 602-5895</strong>
                  </p>
                </div>
              </div>
            </LiquidGlassCard>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h1 className="text-bureau-lg font-bold text-deep-navy mb-6">
                Report Cybercrime
              </h1>
              <p className="text-steel-gray mb-8">
                Submit your case details and our investigation team will assess your situation 
                and provide immediate assistance.
              </p>

              <LiquidGlassCard className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="caseType">Case Type *</Label>
                      <Select onValueChange={(value) => handleInputChange('caseType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select case type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cryptocurrency">Cryptocurrency Scam</SelectItem>
                          <SelectItem value="romance">Romance Scam</SelectItem>
                          <SelectItem value="forex">Forex Scam</SelectItem>
                          <SelectItem value="pig-butchering">Pig Butchering Scam</SelectItem>
                          <SelectItem value="trading">Trading Scam</SelectItem>
                          <SelectItem value="phishing">Phishing Attack</SelectItem>
                          <SelectItem value="other">Other Cybercrime</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="urgency">Urgency Level *</Label>
                      <Select onValueChange={(value) => handleInputChange('urgency', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select urgency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="emergency">Emergency (Active Scam)</SelectItem>
                          <SelectItem value="urgent">Urgent (Recent Loss)</SelectItem>
                          <SelectItem value="standard">Standard Investigation</SelectItem>
                          <SelectItem value="consultation">General Consultation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Case Details *</Label>
                    <Textarea
                      id="message"
                      placeholder="Please provide detailed information about your case, including dates, amounts, contact methods used by scammers, and any evidence you have collected..."
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" variant="default" className="w-full btn-enhanced">
                    Submit Case for Investigation
                  </Button>
                </form>
              </LiquidGlassCard>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-deep-navy mb-6">
                Get Immediate Assistance
              </h2>

              <div className="space-y-6">
                <LiquidGlassCard className="p-6">
                  <div className="flex items-center space-x-4">
                    <Phone className="h-8 w-8 text-premium-gold" />
                    <div>
                      <h3 className="font-bold text-deep-navy">Emergency Hotline</h3>
                      <p className="text-2xl font-bold text-calm-blue">+1 (438) 602-5895</p>
                      <p className="text-steel-gray">24/7 Emergency Response</p>
                    </div>
                  </div>
                </LiquidGlassCard>

                <LiquidGlassCard className="p-6">
                  <div className="flex items-center space-x-4">
                    <Mail className="h-8 w-8 text-trust-green" />
                    <div>
                      <h3 className="font-bold text-deep-navy">Investigation Email</h3>
                      <p className="text-lg font-semibold text-calm-blue">investigations@lionsrecovery.com</p>
                      <p className="text-steel-gray">Secure case communications</p>
                    </div>
                  </div>
                </LiquidGlassCard>

                <LiquidGlassCard className="p-6">
                  <div className="flex items-center space-x-4">
                    <Clock className="h-8 w-8 text-premium-gold" />
                    <div>
                      <h3 className="font-bold text-deep-navy">Response Times</h3>
                      <div className="space-y-1 text-steel-gray">
                        <p>• Emergency Cases: Immediate</p>
                        <p>• Urgent Cases: Within 2 hours</p>
                        <p>• Standard Cases: Within 24 hours</p>
                      </div>
                    </div>
                  </div>
                </LiquidGlassCard>

                <LiquidGlassCard className="p-6">
                  <h3 className="font-bold text-deep-navy mb-4">What to Prepare</h3>
                  <ul className="space-y-2 text-steel-gray">
                    <li>• All communication records with scammers</li>
                    <li>• Transaction receipts and wallet addresses</li>
                    <li>• Screenshots of trading platforms or apps</li>
                    <li>• Timeline of events and key dates</li>
                    <li>• Any documentation or contracts received</li>
                  </ul>
                </LiquidGlassCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;
