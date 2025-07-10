
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Newspaper, Calendar, TrendingUp, AlertCircle, Award, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const NewsRoom: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-slate-700 to-slate-800 text-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <Newspaper className="h-16 w-16 text-slate-200" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                LGN Recovery News Room
              </h1>
              <p className="text-xl md:text-2xl text-slate-100 mb-8">
                Latest cybercrime intelligence, case updates, and industry developments
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/contact-us">Media Inquiries</Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-slate-700">
                  Press Contact: +1 (438) 602-5895
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Latest News */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Breaking Cybercrime Intelligence</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <Card className="border-red-200">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <AlertCircle className="h-6 w-6 text-red-600" />
                    <span className="text-xs text-red-600 font-medium">URGENT ALERT</span>
                  </div>
                  <CardTitle className="text-red-800">New Pig Butchering Variant Targets Crypto Investors</CardTitle>
                  <CardDescription className="text-red-600">December 15, 2024</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-red-700 text-sm mb-4">
                    LGN Recovery identifies sophisticated new tactics being used by romance scammers to exploit cryptocurrency investors through fake trading platforms.
                  </p>
                  <Button size="sm" variant="outline" className="text-red-600 border-red-600 hover:bg-red-50">
                    Read Full Alert
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-blue-200">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <TrendingUp className="h-6 w-6 text-blue-600" />
                    <span className="text-xs text-blue-600 font-medium">INVESTIGATION UPDATE</span>
                  </div>
                  <CardTitle className="text-blue-800">Major Binary Options Network Dismantled</CardTitle>
                  <CardDescription className="text-blue-600">December 12, 2024</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-700 text-sm mb-4">
                    International cooperation leads to shutdown of fraudulent trading platform that victimized over 10,000 investors across 45 countries.
                  </p>
                  <Button size="sm" variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                    Investigation Details
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-green-200">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Award className="h-6 w-6 text-green-600" />
                    <span className="text-xs text-green-600 font-medium">SUCCESS STORY</span>
                  </div>
                  <CardTitle className="text-green-800">$2.3M Recovered in Romance Scam Case</CardTitle>
                  <CardDescription className="text-green-600">December 10, 2024</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-green-700 text-sm mb-4">
                    LGN Recovery successfully traces and recovers significant funds for elderly victim targeted by sophisticated romance fraud operation.
                  </p>
                  <Button size="sm" variant="outline" className="text-green-600 border-green-600 hover:bg-green-50">
                    Recovery Details
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-800">Industry Intelligence Reports</CardTitle>
                <CardDescription>Comprehensive analysis of cybercrime trends and emerging threats</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-slate-700 mb-4">Q4 2024 Threat Landscape</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• 340% increase in AI-powered social engineering attacks</li>
                      <li>• Cryptocurrency fraud losses exceed $2.1 billion globally</li>
                      <li>• Romance scams adapt to use deepfake technology</li>
                      <li>• Job scam sophistication reaches new levels</li>
                      <li>• Phishing campaigns target remote workers specifically</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-700 mb-4">Emerging Threat Vectors</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Social media platform vulnerabilities exploited</li>
                      <li>• Mobile payment app fraud schemes proliferate</li>
                      <li>• Fake investment opportunities using celebrity endorsements</li>
                      <li>• Cross-platform coordination by criminal networks</li>
                      <li>• Regulatory arbitrage exploitation by scammers</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-purple-800">Media Resources</CardTitle>
                <CardDescription>Press materials and expert commentary available for media outlets</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <Globe className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Press Releases</h3>
                    <p className="text-sm text-gray-600">Official statements on major investigations and industry developments.</p>
                  </div>
                  <div className="text-center">
                    <Calendar className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Expert Interviews</h3>
                    <p className="text-sm text-gray-600">Schedule interviews with our cybercrime investigation specialists.</p>
                  </div>
                  <div className="text-center">
                    <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Statistical Data</h3>
                    <p className="text-sm text-gray-600">Comprehensive fraud statistics and trend analysis reports.</p>
                  </div>
                  <div className="text-center">
                    <Award className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Case Studies</h3>
                    <p className="text-sm text-gray-600">Detailed analysis of significant cybercrime investigations and recoveries.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Recent Press Coverage */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Recent Press Coverage</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-slate-800">Featured In Major Publications</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex justify-between">
                      <span>"Cryptocurrency Recovery Experts Break Down Latest Scams"</span>
                      <span className="text-xs text-gray-400">Forbes</span>
                    </li>
                    <li className="flex justify-between">
                      <span>"Romance Scam Epidemic Costs Americans Billions"</span>
                      <span className="text-xs text-gray-400">CNN Business</span>
                    </li>
                    <li className="flex justify-between">
                      <span>"How Investigators Track Stolen Cryptocurrency"</span>
                      <span className="text-xs text-gray-400">Wall Street Journal</span>
                    </li>
                    <li className="flex justify-between">
                      <span>"Binary Options Fraud: A Growing Threat"</span>
                      <span className="text-xs text-gray-400">Reuters</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-slate-800">Speaking Engagements</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex justify-between">
                      <span>Cybercrime Prevention Summit 2024</span>
                      <span className="text-xs text-gray-400">Keynote</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Financial Crimes Investigation Conference</span>
                      <span className="text-xs text-gray-400">Panel Expert</span>
                    </li>
                    <li className="flex justify-between">
                      <span>International Asset Recovery Symposium</span>
                      <span className="text-xs text-gray-400">Featured Speaker</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Digital Forensics & Incident Response Summit</span>
                      <span className="text-xs text-gray-400">Workshop Leader</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6">Media & Press Inquiries</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              For expert commentary, interview requests, or access to exclusive cybercrime intelligence, contact our media relations team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact-us">Media Contact Form</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/lionsgate-network-research-team">Expert Bios</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default NewsRoom;
