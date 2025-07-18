import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import SocialProofPopup from '@/components/SocialProofPopup';
import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";
import ContactUs from "@/pages/ContactUs";
import Services from "@/pages/Services";
import Career from "@/pages/Career";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsConditions from "@/pages/TermsConditions";
import AssetRecovery from "@/pages/AssetRecovery";
import BlockchainForensic from "@/pages/BlockchainForensic";
import CryptoInvestigation from "@/pages/CryptoInvestigation";
import ScamPrevention from "@/pages/ScamPrevention";
import BlockchainAnalyst from "@/pages/BlockchainAnalyst";
import CryptocurrencyScams from "@/pages/CryptocurrencyScams";
import RomanceScams from "@/pages/RomanceScams";
import FakeTrading from "@/pages/FakeTrading";
import PigButchering from "@/pages/PigButchering";
import BinaryOptionsScams from "@/pages/BinaryOptionsScams";
import JobScam from "@/pages/JobScam";
import AdminLogin from "@/pages/AdminLogin";
import AdminSetup from "@/pages/AdminSetup";
import Install from "@/pages/Install";
import AdminDashboard from "@/pages/AdminDashboard";
import CaseTracker from "@/pages/CaseTracker";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <SocialProofPopup />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/services" element={<Services />} />
              <Route path="/career" element={<Career />} />
              <Route path="/privacy-policy-2" element={<PrivacyPolicy />} />
              <Route path="/terms-conditions" element={<TermsConditions />} />
              <Route path="/asset-recovery-solutions" element={<AssetRecovery />} />
              <Route path="/blockchain-forensic" element={<BlockchainForensic />} />
              <Route path="/crypto-investigation" element={<CryptoInvestigation />} />
              <Route path="/scam-prevention" element={<ScamPrevention />} />
              <Route path="/blockchain-analyst" element={<BlockchainAnalyst />} />
              <Route path="/cryptocurrency-scams" element={<CryptocurrencyScams />} />
              <Route path="/romance-scams" element={<RomanceScams />} />
              <Route path="/fake-trading-scam" element={<FakeTrading />} />
              <Route path="/pig-butchering-scam" element={<PigButchering />} />
              <Route path="/binary-options-scams" element={<BinaryOptionsScams />} />
              <Route path="/job-scam" element={<JobScam />} />
              <Route path="/case-tracker" element={<CaseTracker />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin/setup" element={<AdminSetup />} />
              <Route path="/install" element={<Install />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
};

export default App;
