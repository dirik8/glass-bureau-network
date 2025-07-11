import React from 'react';
import Layout from '../components/layout/Layout';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Shield, Mail, MessageSquare, AlertTriangle, Eye, Lock } from 'lucide-react';

const PhishingScam: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Phishing Scam Investigation | LGN Recovery Bureau</title>
        <meta name="description" content="Expert phishing scam investigation and recovery services. Protect yourself from email, SMS, and website phishing attacks targeting your cryptocurrency assets." />
        <meta name="keywords" content="phishing scam, email fraud, SMS fraud, cryptocurrency phishing, recovery services" />
      </Helmet>
      
      <Layout>
        <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 dark:from-red-950/20 dark:via-orange-950/20 dark:to-yellow-950/20">
          {/* Hero Section */}
          <section className="pt-24 pb-16 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="destructive" className="mb-4 bg-red-100 text-red-800 border-red-200">
                  <AlertTriangle className="w-4 h-4 mr-2" />
                  Critical Threat Alert
                </Badge>
                <h1 className="text-5xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-6">
                  Phishing Scam Investigation
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Combat sophisticated phishing attacks targeting your cryptocurrency assets. Our cybersecurity experts specialize in tracking down phishing operations and recovering stolen funds.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <Card className="border-red-200 bg-white/50 backdrop-blur-sm">
                  <CardHeader>
                    <Mail className="w-12 h-12 text-red-600 mb-4" />
                    <CardTitle className="text-red-700">Email Phishing</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Fraudulent emails mimicking legitimate cryptocurrency exchanges and wallets to steal credentials.</p>
                  </CardContent>
                </Card>

                <Card className="border-orange-200 bg-white/50 backdrop-blur-sm">
                  <CardHeader>
                    <MessageSquare className="w-12 h-12 text-orange-600 mb-4" />
                    <CardTitle className="text-orange-700">SMS Phishing</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Text message scams directing victims to fake websites to capture sensitive information.</p>
                  </CardContent>
                </Card>

                <Card className="border-yellow-200 bg-white/50 backdrop-blur-sm">
                  <CardHeader>
                    <Eye className="w-12 h-12 text-yellow-600 mb-4" />
                    <CardTitle className="text-yellow-700">Website Spoofing</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Fake websites designed to look identical to legitimate crypto platforms to harvest login details.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Investigation Process */}
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
                Our Investigation Process
              </h2>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <Shield className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Threat Assessment</h3>
                      <p className="text-gray-600">Comprehensive analysis of the phishing attack vector and scope of compromise.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <Eye className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Digital Forensics</h3>
                      <p className="text-gray-600">Advanced tracking of malicious domains, email headers, and digital fingerprints.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                      <Lock className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Asset Recovery</h3>
                      <p className="text-gray-600">Strategic intervention to freeze accounts and recover compromised cryptocurrency assets.</p>
                    </div>
                  </div>
                </div>

                <Card className="p-8 bg-gradient-to-br from-red-50 to-orange-50 border-red-200">
                  <CardHeader>
                    <CardTitle className="text-2xl text-red-700 mb-4">Emergency Response Available</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-6">
                      Time is critical in phishing cases. Our 24/7 emergency response team can begin investigation within hours of contact.
                    </p>
                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                      Report Phishing Attack
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Prevention Tips */}
          <section className="py-16 px-4 bg-white/30 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
                Phishing Prevention Guide
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: "Verify URLs", tip: "Always check the exact URL of crypto websites before entering credentials" },
                  { title: "Enable 2FA", tip: "Use hardware security keys or authenticator apps for two-factor authentication" },
                  { title: "Check Emails", tip: "Verify sender authenticity through official channels before clicking links" },
                  { title: "Use Bookmarks", tip: "Access crypto platforms through saved bookmarks, not email links" }
                ].map((item, index) => (
                  <Card key={index} className="p-6 text-center border-orange-200 bg-white/70">
                    <h3 className="text-lg font-semibold mb-3 text-orange-700">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.tip}</p>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default PhishingScam;