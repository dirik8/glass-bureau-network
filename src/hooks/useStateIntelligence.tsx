import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

export interface StateIntelligenceData {
  state_name: string;
  state_code: string;
  field_office: string;
  total_cases: number;
  total_losses: number;
  average_loss: number;
  year_over_year_increase: number;
  phone_number: string;
  yearly_data: Array<{
    year: number;
    cases: number;
    losses: number;
  }>;
  top_scam_types: Array<{
    type: string;
    cases: number;
    percentage: number;
  }>;
  regional_hotspots: Array<{
    city: string;
    cases: number;
  }>;
  description: string;
}

export const useStateIntelligence = (stateCode: string) => {
  const [data, setData] = useState<StateIntelligenceData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStateData = async () => {
      try {
        setLoading(true);
        const { data: stateData, error } = await supabase
          .from('state_intelligence')
          .select('*')
          .eq('state_code', stateCode.toUpperCase())
          .single();

        if (error) throw error;
        
        // Type the JSON data properly
        setData({
          ...stateData,
          yearly_data: stateData.yearly_data as Array<{ year: number; cases: number; losses: number; }>,
          top_scam_types: stateData.top_scam_types as Array<{ type: string; cases: number; percentage: number; }>,
          regional_hotspots: stateData.regional_hotspots as Array<{ city: string; cases: number; }>
        });
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch state data');
      } finally {
        setLoading(false);
      }
    };

    if (stateCode) {
      fetchStateData();
    }
  }, [stateCode]);

  return { data, loading, error };
};