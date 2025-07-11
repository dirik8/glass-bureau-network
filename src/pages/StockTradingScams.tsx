import React from 'react';
import Layout from '../components/layout/Layout';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { TrendingUp, AlertTriangle, DollarSign, Shield, Users, BarChart3 } from 'lucide-react';

const StockTradingScams: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Stock Trading Scam Investigation | LGN Recovery Bureau</title>
        <meta name="description" content="Expert investigation of fraudulent stock trading platforms and investment scams. Recover funds from fake trading apps and Ponzi schemes." />
        <meta name="keywords" content="stock trading scam, investment fraud, fake trading platform, Ponzi scheme, recovery services" />
      </Helmet>
      
      <Layout>
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-green-950/20 dark:via-emerald-950/20 dark:to-teal-950/20">
          {/* Hero Section */}
          <section className="pt-24 pb-16 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="destructive" className="mb-4 bg-green-100 text-green-800 border-green-200">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Investment Fraud Alert
                </Badge>
                <h1 className="text-5xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-6">
                  Stock Trading Scam Investigation
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Comprehensive investigation of fraudulent stock trading platforms and investment schemes. Our financial crime experts specialize in tracking fake trading apps and recovering investor funds.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <Card className="border-green-200 bg-white/50 backdrop-blur-sm">
                  <CardHeader>
                    <BarChart3 className="w-12 h-12 text-green-600 mb-4" />
                    <CardTitle className="text-green-700">Fake Trading Platforms</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Sophisticated apps mimicking legitimate brokers with manipulated charts and fake profits.</p>
                  </CardContent>
                </Card>

                <Card className="border-emerald-200 bg-white/50 backdrop-blur-sm">
                  <CardHeader>
                    <Users className="w-12 h-12 text-emerald-600 mb-4" />
                    <CardTitle className="text-emerald-700">Ponzi Schemes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Investment programs promising high returns while using new investor funds to pay earlier investors.</p>
                  </CardContent>
                </Card>

                <Card className="border-teal-200 bg-white/50 backdrop-blur-sm">
                  <CardHeader>
                    <DollarSign className="w-12 h-12 text-teal-600 mb-4" />
                    <CardTitle className="text-teal-700">Pump & Dump</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Coordinated schemes to artificially inflate stock prices before selling to unsuspecting investors.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Investigation Process */}
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
                Financial Crime Investigation
              </h2>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Shield className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Platform Analysis</h3>
                      <p className="text-gray-600">Comprehensive technical analysis of fraudulent trading platforms and mobile applications.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                      <BarChart3 className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Financial Tracking</h3>
                      <p className="text-gray-600">Advanced tracing of funds through multiple banking systems and cryptocurrency networks.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Network Investigation</h3>
                      <p className="text-gray-600">Mapping criminal networks and identifying key operators behind fraudulent schemes.</p>
                    </div>
                  </div>
                </div>

                <Card className="p-8 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                  <CardHeader>
                    <CardTitle className="text-2xl text-green-700 mb-4">Case Success Metrics</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Successful Investigations</span>
                      <span className="text-2xl font-bold text-green-600">800+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Funds Recovered</span>
                      <span className="text-2xl font-bold text-emerald-600">$50M+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Platforms Shut Down</span>
                      <span className="text-2xl font-bold text-teal-600">200+</span>
                    </div>
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white mt-6">
                      Start Investigation
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Warning Signs */}
          <section className="py-16 px-4 bg-white/30 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
                Red Flags to Watch For
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: <AlertTriangle className="w-8 h-8 text-red-500" />,
                    title: "Unrealistic Returns",
                    description: "Promises of guaranteed high returns with no risk"
                  },
                  {
                    icon: <Shield className="w-8 h-8 text-orange-500" />,
                    title: "No Regulation",
                    description: "Platform lacks proper licensing and regulatory oversight"
                  },
                  {
                    icon: <DollarSign className="w-8 h-8 text-yellow-500" />,
                    title: "Withdrawal Issues",
                    description: "Difficulty or inability to withdraw funds when requested"
                  },
                  {
                    icon: <Users className="w-8 h-8 text-blue-500" />,
                    title: "Pressure Tactics",
                    description: "High-pressure sales tactics and urgency to invest quickly"
                  },
                  {
                    icon: <BarChart3 className="w-8 h-8 text-purple-500" />,
                    title: "Fake Testimonials",
                    description: "Fabricated success stories and fake user reviews"
                  },
                  {
                    icon: <TrendingUp className="w-8 h-8 text-green-500" />,
                    title: "Complex Strategies",
                    description: "Overly complex trading strategies that are hard to understand"
                  }
                ].map((item, index) => (
                  <Card key={index} className="p-6 text-center border-gray-200 bg-white/70">
                    <div className="flex justify-center mb-4">{item.icon}</div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-800">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-12">
                <p className="text-lg text-gray-700 mb-6">
                  Spotted any of these red flags? Get immediate professional help.
                </p>
                <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
                  Report Suspicious Activity
                </Button>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default StockTradingScams;