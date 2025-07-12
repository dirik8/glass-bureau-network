import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Search, HelpCircle, Clock, Shield, DollarSign, FileText } from 'lucide-react';
import Layout from '@/components/layout/Layout';

const QA = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const faqCategories = [
    {
      category: "General Services",
      icon: HelpCircle,
      questions: [
        {
          question: "What types of cryptocurrency scams do you investigate?",
          answer: "We investigate all types of cryptocurrency scams including romance scams, investment fraud, phishing attacks, fake trading platforms, pig butchering schemes, wallet draining, exit scams, and more. Our team has experience with scams across all major cryptocurrency networks."
        },
        {
          question: "How long does a typical investigation take?",
          answer: "Investigation timelines vary depending on complexity. Basic cases typically take 2-4 weeks, while complex multi-jurisdictional cases may take 6-12 weeks. We provide regular updates throughout the process and can expedite urgent cases."
        },
        {
          question: "What information do I need to start an investigation?",
          answer: "To begin, we need details about the scam, transaction hashes, wallet addresses, communication records with scammers, and any relevant documentation. Our intake team will guide you through the information gathering process."
        },
        {
          question: "Do you work with law enforcement?",
          answer: "Yes, we collaborate closely with law enforcement agencies worldwide. We can provide court-admissible evidence and expert testimony when needed. Many of our team members are former law enforcement officers."
        }
      ]
    },
    {
      category: "Recovery Process",
      icon: Clock,
      questions: [
        {
          question: "What is your success rate for asset recovery?",
          answer: "Our success rate varies by case type and complexity, but we maintain a 60-75% recovery rate for cases where funds are still traceable. Early reporting significantly improves recovery chances."
        },
        {
          question: "How do you trace cryptocurrency transactions?",
          answer: "We use advanced blockchain analysis tools like Chainalysis, Elliptic, and Crystal to trace transactions across multiple blockchains. Our analysts can follow complex transaction patterns and identify exchange deposits."
        },
        {
          question: "Can you recover funds sent to a wrong address?",
          answer: "Recovery depends on whether the recipient address is controlled by an exchange or individual. If sent to an exchange, we can often facilitate recovery through our industry relationships. Self-custody addresses are more challenging."
        },
        {
          question: "What happens if my funds are found on an exchange?",
          answer: "When we locate funds on exchanges, we coordinate with their compliance teams to freeze accounts and initiate recovery procedures. This process requires proper documentation and legal cooperation."
        }
      ]
    },
    {
      category: "Costs & Pricing",
      icon: DollarSign,
      questions: [
        {
          question: "How much do your services cost?",
          answer: "We offer both fixed-fee and contingency-based pricing depending on the case. Initial consultations are free, and we provide transparent pricing before beginning any work. Contingency rates typically range from 15-25% of recovered funds."
        },
        {
          question: "Do you charge upfront fees?",
          answer: "For most cases, we work on a contingency basis with no upfront fees. However, complex cases requiring extensive investigation may involve some upfront costs for specialized tools and resources."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept bank transfers, credit cards, and cryptocurrency payments. Payment terms are flexible and discussed during the initial consultation based on your specific situation."
        },
        {
          question: "Are there any hidden fees?",
          answer: "No, we believe in complete transparency. All fees and costs are clearly outlined in our service agreement before any work begins. There are no hidden charges or surprise fees."
        }
      ]
    },
    {
      category: "Legal & Compliance",
      icon: Shield,
      questions: [
        {
          question: "Is LGN Recovery licensed and regulated?",
          answer: "Yes, we operate under proper licensing and maintain compliance with relevant regulations. Our team includes licensed private investigators and certified fraud examiners."
        },
        {
          question: "Can you provide evidence for legal proceedings?",
          answer: "Absolutely. We prepare court-admissible evidence packages and can provide expert witness testimony. Our reports meet legal standards for use in civil and criminal proceedings."
        },
        {
          question: "How do you protect client confidentiality?",
          answer: "We maintain strict confidentiality protocols and use secure communication channels. All client information is protected under attorney-client privilege where applicable and professional confidentiality agreements."
        },
        {
          question: "Do you report findings to authorities?",
          answer: "We report criminal activity to relevant authorities as required by law, always in coordination with our clients. We can also assist clients in filing their own reports with appropriate agencies."
        }
      ]
    },
    {
      category: "Technical Questions",
      icon: FileText,
      questions: [
        {
          question: "Which blockchain networks do you support?",
          answer: "We support all major blockchains including Bitcoin, Ethereum, Binance Smart Chain, Polygon, Tron, Litecoin, and 500+ other networks. Our tools can analyze both UTXO and account-based blockchains."
        },
        {
          question: "Can you track privacy coins like Monero?",
          answer: "While privacy coins are more challenging, we have specialized techniques and tools for investigating Monero, Zcash, and other privacy-focused cryptocurrencies. Success depends on transaction patterns and exchange interactions."
        },
        {
          question: "How do you handle cross-chain transactions?",
          answer: "We use advanced analysis techniques to track funds across different blockchains through bridges, atomic swaps, and decentralized exchanges. Our tools can correlate activities across multiple networks."
        },
        {
          question: "What about DeFi and DEX transactions?",
          answer: "We specialize in DeFi investigations and can trace transactions through decentralized exchanges, liquidity pools, yield farming protocols, and complex smart contract interactions."
        }
      ]
    }
  ];

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
           q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <Layout>
      <Helmet>
        <title>Frequently Asked Questions | LGN Recovery</title>
        <meta name="description" content="Get answers to common questions about cryptocurrency recovery, blockchain investigation, and our professional services." />
        <meta name="keywords" content="cryptocurrency recovery FAQ, blockchain investigation questions, digital asset recovery help" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Frequently Asked Questions
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Questions & Answers
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Find answers to common questions about our cryptocurrency recovery services, 
              investigation process, and how we can help you recover your stolen digital assets.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-background/50 backdrop-blur"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {filteredCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="mb-8 border-primary/10">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <category.icon className="h-6 w-6 text-primary" />
                    <CardTitle className="text-xl">{category.category}</CardTitle>
                    <Badge variant="outline">{category.questions.length} questions</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible>
                    {category.questions.map((faq, faqIndex) => (
                      <AccordionItem key={faqIndex} value={`${categoryIndex}-${faqIndex}`}>
                        <AccordionTrigger className="text-left">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-muted-foreground mb-8">
              Can't find the answer you're looking for? Our expert team is here to help with personalized assistance.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="border-primary/10">
                <CardHeader className="text-center pb-4">
                  <HelpCircle className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <CardTitle className="text-lg">Live Chat Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get instant answers from our support team
                  </p>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Start Live Chat
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-secondary/10">
                <CardHeader className="text-center pb-4">
                  <FileText className="h-8 w-8 mx-auto mb-2 text-secondary" />
                  <CardTitle className="text-lg">Free Consultation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Schedule a call with our investigation experts
                  </p>
                  <Button className="w-full bg-secondary hover:bg-secondary/90">
                    Book Consultation
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Immediate Assistance?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            For urgent matters or complex questions, contact our emergency response team directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Emergency Hotline: +1-800-LGN-HELP
            </Button>
            <Button size="lg" variant="outline">
              Email: help@lgnrecovery.com
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default QA;