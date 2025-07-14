import React from 'react';
import StatePageTemplate from '@/components/StatePageTemplate';
import { useStateIntelligence } from '@/hooks/useStateIntelligence';
import Layout from '@/components/layout/Layout';
import { Loader2 } from 'lucide-react';

interface StateDynamicPageProps {
  stateCode: string;
}

const StateDynamicPage: React.FC<StateDynamicPageProps> = ({ stateCode }) => {
  const { data, loading, error } = useStateIntelligence(stateCode);

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center">
            <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
            <p className="text-muted-foreground">Loading {stateCode} cybercrime statistics...</p>
          </div>
        </div>
      </Layout>
    );
  }

  if (error || !data) {
    return (
      <Layout>
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Data Not Available</h1>
            <p className="text-muted-foreground">
              Cybercrime statistics for {stateCode} are not currently available.
            </p>
          </div>
        </div>
      </Layout>
    );
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

export default StateDynamicPage;