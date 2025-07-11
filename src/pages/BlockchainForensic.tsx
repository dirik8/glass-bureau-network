import React from 'react';
import Layout from '../components/layout/Layout';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Search, Microscope, Network, FileText, Shield, Target } from 'lucide-react';

const BlockchainForensic: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Blockchain Forensic Services | LGN Recovery Bureau</title>
        <meta name="description" content="Advanced blockchain forensic investigation services. Expert analysis of cryptocurrency transactions, wallet clustering, and digital asset tracing." />
        <meta name="keywords" content="blockchain forensics, cryptocurrency investigation, transaction analysis, digital forensics, asset tracing" />
      </Helmet>
      
      <Layout>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 dark:from-slate-950/20 dark:via-gray-950/20 dark:to-zinc-950/20">
          {/* Hero Section */}
          <section className="pt-24 pb-16 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="outline" className="mb-4 bg-slate-100 text-slate-800 border-slate-200">
                  <Microscope className="w-4 h-4 mr-2" />
                  Digital Forensics Laboratory
                </Badge>
                <h1 className="text-5xl font-bold bg-gradient-to-r from-slate-700 to-zinc-600 bg-clip-text text-transparent mb-6">
                  Blockchain Forensic Services
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Advanced blockchain forensic investigation using cutting-edge technology and methodologies. Our certified forensic experts provide detailed analysis for legal proceedings and asset recovery.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <Card className="border-slate-200 bg-white/50 backdrop-blur-sm">
                  <CardHeader>
                    <Search className="w-12 h-12 text-slate-600 mb-4" />
                    <CardTitle className="text-slate-700">Transaction Analysis</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Deep analysis of blockchain transactions to trace fund movements and identify patterns.</p>
                  </CardContent>
                </Card>

                <Card className="border-gray-200 bg-white/50 backdrop-blur-sm">
                  <CardHeader>
                    <Network className="w-12 h-12 text-gray-600 mb-4" />
                    <CardTitle className="text-gray-700">Wallet Clustering</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Advanced algorithms to identify wallet ownership and link addresses to real-world entities.</p>
                  </CardContent>
                </Card>

                <Card className="border-zinc-200 bg-white/50 backdrop-blur-sm">
                  <CardHeader>
                    <FileText className="w-12 h-12 text-zinc-600 mb-4" />
                    <CardTitle className="text-zinc-700">Legal Reporting</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Court-admissible forensic reports with detailed evidence chain and expert testimony.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Services Overview */}
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
                Comprehensive Forensic Analysis
              </h2>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
                      <Microscope className="w-6 h-6 text-slate-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Digital Evidence Collection</h3>
                      <p className="text-gray-600">Systematic collection and preservation of blockchain evidence following legal standards.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                      <Search className="w-6 h-6 text-gray-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Advanced Analytics</h3>
                      <p className="text-gray-600">Machine learning algorithms for pattern recognition and anomaly detection in transactions.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center">
                      <Network className="w-6 h-6 text-zinc-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Network Mapping</h3>
                      <p className="text-gray-600">Comprehensive mapping of transaction networks and entity relationships.</p>
                    </div>
                  </div>
                </div>

                <Card className="p-8 bg-gradient-to-br from-slate-50 to-gray-50 border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-2xl text-slate-700 mb-4">Forensic Capabilities</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Shield className="w-5 h-5 text-slate-600" />
                      <span className="text-gray-700">Court-certified methodologies</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Target className="w-5 h-5 text-gray-600" />
                      <span className="text-gray-700">Multi-blockchain analysis</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <FileText className="w-5 h-5 text-zinc-600" />
                      <span className="text-gray-700">Expert witness services</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Microscope className="w-5 h-5 text-slate-600" />
                      <span className="text-gray-700">Chain of custody protocols</span>
                    </div>
                    <Button className="w-full bg-slate-600 hover:bg-slate-700 text-white mt-6">
                      Request Forensic Analysis
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Technical Capabilities */}
          <section className="py-16 px-4 bg-white/30 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
                Technical Expertise
              </h2>
              
              <div className="grid lg:grid-cols-3 gap-8">
                <Card className="p-6 border-slate-200 bg-white/70">
                  <CardHeader>
                    <Search className="w-8 h-8 text-slate-600 mb-3" />
                    <CardTitle className="text-slate-700">Blockchain Networks</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">Comprehensive support for major blockchain networks and protocols.</p>
                    <ul className="text-sm text-gray-500 space-y-1">
                      <li>• Bitcoin and Bitcoin forks</li>
                      <li>• Ethereum and ERC-20 tokens</li>
                      <li>• Privacy coins (Monero, Zcash)</li>
                      <li>• Layer 2 solutions</li>
                      <li>• DeFi protocols</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="p-6 border-gray-200 bg-white/70">
                  <CardHeader>
                    <Network className="w-8 h-8 text-gray-600 mb-3" />
                    <CardTitle className="text-gray-700">Analysis Tools</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">Professional-grade blockchain analysis and investigation tools.</p>
                    <ul className="text-sm text-gray-500 space-y-1">
                      <li>• Chainalysis Reactor</li>
                      <li>• Elliptic Investigator</li>
                      <li>• CipherTrace Inspector</li>
                      <li>• Custom analysis scripts</li>
                      <li>• Open source intelligence</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="p-6 border-zinc-200 bg-white/70">
                  <CardHeader>
                    <FileText className="w-8 h-8 text-zinc-600 mb-3" />
                    <CardTitle className="text-zinc-700">Legal Standards</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">Adherence to international forensic and legal standards.</p>
                    <ul className="text-sm text-gray-500 space-y-1">
                      <li>• ISO 27037 digital evidence</li>
                      <li>• NIST cybersecurity framework</li>
                      <li>• Daubert standard compliance</li>
                      <li>• Chain of custody protocols</li>
                      <li>• Expert witness certification</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Process Overview */}
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
                Forensic Investigation Process
              </h2>
              
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { step: "01", title: "Evidence Preservation", description: "Secure collection and preservation of digital evidence" },
                  { step: "02", title: "Initial Analysis", description: "Preliminary investigation and data mapping" },
                  { step: "03", title: "Deep Investigation", description: "Comprehensive forensic analysis and pattern identification" },
                  { step: "04", title: "Report Delivery", description: "Detailed forensic report with expert recommendations" }
                ].map((item, index) => (
                  <Card key={index} className="p-6 text-center border-slate-200 bg-white/50">
                    <div className="w-12 h-12 bg-slate-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-slate-700">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-12">
                <Button className="bg-slate-600 hover:bg-slate-700 text-white px-8 py-3">
                  Start Forensic Investigation
                </Button>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default BlockchainForensic;