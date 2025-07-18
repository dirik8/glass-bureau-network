
import React from 'react';
import Layout from '@/components/layout/Layout';
import { CaseTracker as CaseTrackerComponent } from '@/components/CaseTracker';

const CaseTracker: React.FC = () => {
  return (
    <Layout>
      <CaseTrackerComponent />
    </Layout>
  );
};

export default CaseTracker;
