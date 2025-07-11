import React from 'react';
import Layout from '../components/layout/Layout';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Link, AlertTriangle, Shield, Lock, Eye, Zap } from 'lucide-react';

const BlockchainCom: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Blockchain.com Security Analysis | LGN Recovery Bureau</title>
        <meta name="description" content="Comprehensive security analysis of Blockchain.com platform. Investigation of account compromises, security vulnerabilities, and fund recovery services." />
        <meta name="keywords" content="blockchain.com, security analysis, account compromise, cryptocurrency security, wallet investigation" />
      </Helmet>
      
      <Layout>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50 dark:from-blue-950/20 dark:via-cyan-950/20 dark:to-indigo-950/20">
          {/* Hero Section */}
          <section className="pt-24 pb-16 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="outline" className="mb-4 bg-blue-100 text-blue-800 border-blue-200">
                  <Link className="w-4 h-4 mr-2" />
                  Platform Security Analysis
                </Badge>
                <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
                  Blockchain.com Security Investigation
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Specialized security analysis and investigation services for Blockchain.com platform incidents. Expert recovery of compromised accounts and stolen cryptocurrency assets.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <Card className="border-blue-200 bg-white/50 backdrop-blur-sm">
                  <CardHeader>
                    <Lock className="w-12 h-12 text-blue-600 mb-4" />
                    <CardTitle className="text-blue-700">Account Compromise</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Investigation of unauthorized access to Blockchain.com wallets and accounts.</p>
                  </CardContent>
                </Card>

                <Card className="border-cyan-200 bg-white/50 backdrop-blur-sm">
                  <CardHeader>
                    <Shield className="w-12 h-12 text-cyan-600 mb-4" />
                    <CardTitle className="text-cyan-700">Security Vulnerabilities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Analysis of platform security weaknesses and exploitation vectors.</p>
                  </CardContent>
                </Card>

                <Card className="border-indigo-200 bg-white/50 backdrop-blur-sm">
                  <CardHeader>
                    <Zap className="w-12 h-12 text-indigo-600 mb-4" />
                    <CardTitle className="text-indigo-700">Fund Recovery</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Strategic recovery of cryptocurrency assets from compromised Blockchain.com accounts.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Platform Analysis */}
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
                Blockchain.com Security Assessment
              </h2>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <Card className="p-8 bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
                  <CardHeader>
                    <CardTitle className="text-2xl text-blue-700 mb-4">Platform Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Eye className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">Wallet service provider since 2011</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Shield className="w-5 h-5 text-cyan-600" />
                      <span className="text-gray-700">70+ million registered users</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Lock className="w-5 h-5 text-indigo-600" />
                      <span className="text-gray-700">Multi-cryptocurrency support</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Zap className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">Exchange and trading features</span>
                    </div>
                  </CardContent>
                </Card>

                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Eye className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Security Monitoring</h3>
                      <p className="text-gray-600">Continuous monitoring of Blockchain.com security incidents and user complaints.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                      <Shield className="w-6 h-6 text-cyan-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Vulnerability Assessment</h3>
                      <p className="text-gray-600">Technical analysis of platform security measures and potential attack vectors.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                      <Lock className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Account Recovery</h3>
                      <p className="text-gray-600">Specialized techniques for recovering compromised Blockchain.com accounts and assets.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Common Issues */}
          <section className="py-16 px-4 bg-white/30 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
                Common Security Issues
              </h2>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <Card className="p-6 border-red-200 bg-white/70">
                  <CardHeader>
                    <AlertTriangle className="w-8 h-8 text-red-600 mb-3" />
                    <CardTitle className="text-red-700">Account Takeover</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">Unauthorized access through compromised credentials or social engineering.</p>
                    <ul className="text-sm text-gray-500 space-y-1">
                      <li>• Password reuse vulnerabilities</li>
                      <li>• SIM swapping attacks</li>
                      <li>• Email account compromise</li>
                      <li>• Weak security questions</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="p-6 border-orange-200 bg-white/70">
                  <CardHeader>
                    <AlertTriangle className="w-8 h-8 text-orange-600 mb-3" />
                    <CardTitle className="text-orange-700">Phishing Attacks</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">Fake Blockchain.com websites and emails targeting user credentials.</p>
                    <ul className="text-sm text-gray-500 space-y-1">
                      <li>• Lookalike domain names</li>
                      <li>• Fake mobile applications</li>
                      <li>• Email impersonation</li>
                      <li>• SMS phishing campaigns</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="p-6 border-yellow-200 bg-white/70">
                  <CardHeader>
                    <AlertTriangle className="w-8 h-8 text-yellow-600 mb-3" />
                    <CardTitle className="text-yellow-700">API Vulnerabilities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">Security issues with third-party integrations and API usage.</p>
                    <ul className="text-sm text-gray-500 space-y-1">
                      <li>• API key exposure</li>
                      <li>• Insecure integrations</li>
                      <li>• Rate limiting bypass</li>
                      <li>• Authentication flaws</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="p-6 border-blue-200 bg-white/70">
                  <CardHeader>
                    <AlertTriangle className="w-8 h-8 text-blue-600 mb-3" />
                    <CardTitle className="text-blue-700">Technical Issues</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">Platform bugs and technical vulnerabilities affecting user funds.</p>
                    <ul className="text-sm text-gray-500 space-y-1">
                      <li>• Transaction processing errors</li>
                      <li>• Wallet synchronization issues</li>
                      <li>• Fee calculation problems</li>
                      <li>• Exchange rate manipulation</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Recovery Services */}
          <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
                Professional Recovery Services
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our team of cybersecurity experts specializes in Blockchain.com platform investigations and asset recovery. We work with law enforcement and platform security teams to ensure the best possible outcome for victims.
              </p>
              <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                  Report Security Incident
                </Button>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3">
                  Request Security Audit
                </Button>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default BlockchainCom;