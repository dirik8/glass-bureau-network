import React from 'react';
import Layout from '../components/layout/Layout';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Wallet, AlertTriangle, Shield, Search, Target, Zap } from 'lucide-react';

const WalletPoisoning: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Wallet Poisoning Scam Investigation | LGN Recovery Bureau</title>
        <meta name="description" content="Expert investigation of wallet poisoning attacks. Recover funds from sophisticated cryptocurrency wallet dusting and poisoning scams." />
        <meta name="keywords" content="wallet poisoning, dusting attack, cryptocurrency security, wallet investigation, recovery services" />
      </Helmet>
      
      <Layout>
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 dark:from-purple-950/20 dark:via-indigo-950/20 dark:to-blue-950/20">
          {/* Hero Section */}
          <section className="pt-24 pb-16 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="destructive" className="mb-4 bg-purple-100 text-purple-800 border-purple-200">
                  <Target className="w-4 h-4 mr-2" />
                  Advanced Threat
                </Badge>
                <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
                  Wallet Poisoning Investigation
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Specialized investigation of wallet poisoning attacks and dusting scams. Our blockchain forensics team tracks malicious transactions and recovers compromised cryptocurrency assets.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <Card className="border-purple-200 bg-white/50 backdrop-blur-sm">
                  <CardHeader>
                    <Wallet className="w-12 h-12 text-purple-600 mb-4" />
                    <CardTitle className="text-purple-700">Dusting Attacks</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Small amounts of cryptocurrency sent to wallets to track and de-anonymize user transactions.</p>
                  </CardContent>
                </Card>

                <Card className="border-indigo-200 bg-white/50 backdrop-blur-sm">
                  <CardHeader>
                    <Target className="w-12 h-12 text-indigo-600 mb-4" />
                    <CardTitle className="text-indigo-700">Address Poisoning</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Malicious addresses similar to legitimate ones used to intercept cryptocurrency transfers.</p>
                  </CardContent>
                </Card>

                <Card className="border-blue-200 bg-white/50 backdrop-blur-sm">
                  <CardHeader>
                    <Zap className="w-12 h-12 text-blue-600 mb-4" />
                    <CardTitle className="text-blue-700">Transaction Hijacking</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Sophisticated attacks that redirect cryptocurrency transactions to attacker-controlled wallets.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Investigation Methodology */}
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
                Advanced Blockchain Forensics
              </h2>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <Card className="p-8 bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200">
                  <CardHeader>
                    <CardTitle className="text-2xl text-purple-700 mb-4">Our Expertise</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Search className="w-5 h-5 text-purple-600" />
                      <span className="text-gray-700">On-chain transaction analysis</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Shield className="w-5 h-5 text-indigo-600" />
                      <span className="text-gray-700">Wallet clustering algorithms</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Target className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">Address attribution techniques</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Zap className="w-5 h-5 text-purple-600" />
                      <span className="text-gray-700">Real-time monitoring systems</span>
                    </div>
                  </CardContent>
                </Card>

                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <Search className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Pattern Recognition</h3>
                      <p className="text-gray-600">Advanced algorithms identify wallet poisoning patterns across multiple blockchain networks.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                      <Shield className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Fund Tracing</h3>
                      <p className="text-gray-600">Comprehensive tracking of stolen assets through mixing services and exchanges.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Target className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Asset Recovery</h3>
                      <p className="text-gray-600">Strategic coordination with exchanges and law enforcement for fund recovery.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Protection Strategies */}
          <section className="py-16 px-4 bg-white/30 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
                Wallet Security Best Practices
              </h2>
              
              <div className="grid lg:grid-cols-3 gap-8">
                <Card className="p-6 border-purple-200 bg-white/70">
                  <CardHeader>
                    <Shield className="w-8 h-8 text-purple-600 mb-3" />
                    <CardTitle className="text-purple-700">Isolation Strategy</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">Use separate wallets for different purposes to limit exposure to poisoning attacks.</p>
                    <ul className="text-sm text-gray-500 space-y-1">
                      <li>• Hot wallet for daily transactions</li>
                      <li>• Cold storage for long-term holdings</li>
                      <li>• Dedicated wallets for DeFi activities</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="p-6 border-indigo-200 bg-white/70">
                  <CardHeader>
                    <Search className="w-8 h-8 text-indigo-600 mb-3" />
                    <CardTitle className="text-indigo-700">Transaction Verification</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">Always verify recipient addresses before sending transactions.</p>
                    <ul className="text-sm text-gray-500 space-y-1">
                      <li>• Double-check address characters</li>
                      <li>• Use address whitelisting features</li>
                      <li>• Send small test amounts first</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="p-6 border-blue-200 bg-white/70">
                  <CardHeader>
                    <AlertTriangle className="w-8 h-8 text-blue-600 mb-3" />
                    <CardTitle className="text-blue-700">Monitoring & Alerts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">Implement monitoring systems to detect suspicious wallet activity.</p>
                    <ul className="text-sm text-gray-500 space-y-1">
                      <li>• Set up transaction alerts</li>
                      <li>• Monitor for dusting attacks</li>
                      <li>• Regular wallet address audits</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center mt-12">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3">
                  Request Wallet Security Assessment
                </Button>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default WalletPoisoning;