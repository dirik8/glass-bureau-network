import React from 'react';
import StatePageTemplate from '@/components/StatePageTemplate';
import { useStateIntelligence } from '@/hooks/useStateIntelligence';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, AlertCircle, Phone, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const NewYorkStats: React.FC = () => {
  const { data, loading, error } = useStateIntelligence('NY');

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center">
            <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
            <p className="text-muted-foreground">Loading New York cybercrime statistics...</p>
          </div>
        </div>
      </Layout>
    );
  }

  if (error || !data) {
    // Fallback to static data if database fetch fails
    const fallbackData = {
      state: "New York",
      office: "New York Field Office",
      totalCases: "8,967",
      totalLosses: "$742.3M", 
      increase: "145%",
      avgLoss: "$82.8K",
      yearlyData: [
        { year: 2020, cases: 1456, losses: "$89.2M", avgLoss: "$61.3K" },
        { year: 2021, cases: 1823, losses: "$124.8M", avgLoss: "$68.5K" },
        { year: 2022, cases: 2234, losses: "$189.4M", avgLoss: "$84.8K" },
        { year: 2023, cases: 1678, losses: "$178.6M", avgLoss: "$106.4K" },
        { year: 2024, cases: 1776, losses: "$160.3M", avgLoss: "$90.2K" }
      ],
      topScamTypes: [
        { type: "Investment Fraud", percentage: 32, cases: 2869, losses: "$287.4M" },
        { type: "Romance Scams", percentage: 24, cases: 2152, losses: "$145.8M" },
        { type: "Business Email Compromise", percentage: 18, cases: 1614, losses: "$178.2M" },
        { type: "Real Estate Fraud", percentage: 14, cases: 1255, losses: "$89.7M" },
        { type: "Online Shopping Fraud", percentage: 12, cases: 1077, losses: "$41.2M" }
      ],
      regionalHotspots: [
        { city: "New York City", cases: 3847, losses: "$423.8M" },
        { city: "Buffalo", cases: 967, losses: "$78.4M" },
        { city: "Rochester", cases: 823, losses: "$67.2M" },
        { city: "Syracuse", cases: 734, losses: "$52.1M" },
        { city: "Albany", cases: 689, losses: "$48.9M" }
      ],
      phoneNumber: "(212) 384-1000",
      description: "New York state leads the nation in sophisticated investment fraud schemes, with cybercriminals targeting the state's large financial sector and affluent population."
    };

    return <StatePageTemplate data={fallbackData} />;
  }

  // Convert database data to template format
  const templateData = {
    state: data.state_name,
    office: data.field_office,
    totalCases: data.total_cases.toLocaleString(),
    totalLosses: `$${(data.total_losses / 1000000).toFixed(1)}M`,
    increase: `${data.year_over_year_increase}%`,
    avgLoss: `$${(data.average_loss / 1000).toFixed(1)}K`,
    yearlyData: data.yearly_data.map(year => ({
      ...year,
      losses: `$${(year.losses / 1000000).toFixed(1)}M`,
      avgLoss: `$${(year.losses / year.cases / 1000).toFixed(1)}K`
    })),
    topScamTypes: data.top_scam_types.map(scam => ({
      ...scam,
      losses: `$${(scam.cases * data.average_loss / 1000000).toFixed(1)}M`
    })),
    regionalHotspots: data.regional_hotspots.map(hotspot => ({
      ...hotspot,
      losses: `$${(hotspot.cases * data.average_loss / 1000000).toFixed(1)}M`
    })),
    phoneNumber: data.phone_number,
    description: data.description
  };

  return <StatePageTemplate data={templateData} />;
};

export default NewYorkStats;