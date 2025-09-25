import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from "@/hooks/useAuth";
import AdminProtectedRoute from "@/components/layout/AdminProtectedRoute";
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
import AdminSetupWizard from "@/pages/AdminSetupWizard";
import Setup from "@/pages/Setup";
import Install from "@/pages/Install";
import AdminDashboard from "@/pages/AdminDashboard";
import CaseTracker from "@/pages/CaseTracker";
import LedgerSecurityReport from "@/pages/LedgerSecurityReport";
import QA from "@/pages/QA";
import Manuals from "@/pages/Manuals";
import CaseStudies from "@/pages/CaseStudies";
import CaseStudyDetail from "@/pages/CaseStudyDetail";
import NewsRoom from "@/pages/NewsRoom";
import ResearchTeam from "@/pages/ResearchTeam";
import StateDirectory from "@/pages/StateDirectory";
import TaskScam from "@/pages/TaskScam";
import OnlineDatingScam from "@/pages/OnlineDatingScam";
import PhishingScam from "@/pages/PhishingScam";
import WalletPoisoning from "@/pages/WalletPoisoning";
import StockTradingScams from "@/pages/StockTradingScams";
import ForexScams from "@/pages/ForexScams";
import About from "@/pages/About";
import Jobs from "@/pages/Jobs";
import BountyHotline from "@/pages/BountyHotline";
import BlockchainCom from "@/pages/BlockchainCom";
import OptOut from "@/pages/OptOut";
import ReferralProgram from "@/pages/ReferralProgram";
import StudentDiscount from "@/pages/StudentDiscount";

// State statistics pages
import AlabamaStats from "@/pages/AlabamaStats";
import AlaskaStats from "@/pages/AlaskaStats";
import ArizonaStats from "@/pages/ArizonaStats";
import ArkansasStats from "@/pages/ArkansasStats";
import CaliforniaStats from "@/pages/CaliforniaStats";
import ColoradoStats from "@/pages/ColoradoStats";
import ConnecticutStats from "@/pages/ConnecticutStats";
import DelawareStats from "@/pages/DelawareStats";
import FloridaStats from "@/pages/FloridaStats";
import GeorgiaStats from "@/pages/GeorgiaStats";
import HawaiiStats from "@/pages/HawaiiStats";
import IdahoStats from "@/pages/IdahoStats";
import IllinoisStats from "@/pages/IllinoisStats";
import IndianaStats from "@/pages/IndianaStats";
import IowaStats from "@/pages/IowaStats";
import KansasStats from "@/pages/KansasStats";
import KentuckyStats from "@/pages/KentuckyStats";
import LouisianaStats from "@/pages/LouisianaStats";
import MaineStats from "@/pages/MaineStats";
import MarylandStats from "@/pages/MarylandStats";
import MassachusettsStats from "@/pages/MassachusettsStats";
import MichiganStats from "@/pages/MichiganStats";
import MinnesotaStats from "@/pages/MinnesotaStats";
import MississippiStats from "@/pages/MississippiStats";
import MissouriStats from "@/pages/MissouriStats";
import MontanaStats from "@/pages/MontanaStats";
import NebraskaStats from "@/pages/NebraskaStats";
import NevadaStats from "@/pages/NevadaStats";
import NewHampshireStats from "@/pages/NewHampshireStats";
import NewJerseyStats from "@/pages/NewJerseyStats";
import NewMexicoStats from "@/pages/NewMexicoStats";
import NewYorkStats from "@/pages/NewYorkStats";
import NorthCarolinaStats from "@/pages/NorthCarolinaStats";
import NorthDakotaStats from "@/pages/NorthDakotaStats";
import OhioStats from "@/pages/OhioStats";
import OklahomaStats from "@/pages/OklahomaStats";
import OregonStats from "@/pages/OregonStats";
import PennsylvaniaStats from "@/pages/PennsylvaniaStats";
import RhodeIslandStats from "@/pages/RhodeIslandStats";
import SouthCarolinaStats from "@/pages/SouthCarolinaStats";
import SouthDakotaStats from "@/pages/SouthDakotaStats";
import TennesseeStats from "@/pages/TennesseeStats";
import TexasStats from "@/pages/TexasStats";
import UtahStats from "@/pages/UtahStats";
import VermontStats from "@/pages/VermontStats";
import VirginiaStats from "@/pages/VirginiaStats";
import WashingtonStats from "@/pages/WashingtonStats";
import WestVirginiaStats from "@/pages/WestVirginiaStats";
import WisconsinStats from "@/pages/WisconsinStats";
import WyomingStats from "@/pages/WyomingStats";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <AuthProvider>
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
              
              {/* Resource Pages */}
              <Route path="/ledger-security-incidents-analysis-and-recommendations" element={<LedgerSecurityReport />} />
              <Route path="/qa" element={<QA />} />
              <Route path="/manuals" element={<Manuals />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/case-studies/:id" element={<CaseStudyDetail />} />
              <Route path="/news-room" element={<NewsRoom />} />
              <Route path="/lionsgate-network-research-team" element={<ResearchTeam />} />
              <Route path="/state-intelligence" element={<StateDirectory />} />
              
              {/* Additional Scam Intelligence Pages */}
              <Route path="/task-scam" element={<TaskScam />} />
              <Route path="/online-dating-scam" element={<OnlineDatingScam />} />
              <Route path="/phishing-scam" element={<PhishingScam />} />
              <Route path="/wallet-poisoning-scam" element={<WalletPoisoning />} />
              <Route path="/stock-trading-scams" element={<StockTradingScams />} />
              <Route path="/forex-scams" element={<ForexScams />} />
              
              {/* Other Pages */}
              <Route path="/about" element={<About />} />
              <Route path="/jobs" element={<Jobs />} />
              <Route path="/bounty-hotline" element={<BountyHotline />} />
              <Route path="/blockchain-com" element={<BlockchainCom />} />
              <Route path="/opt-out" element={<OptOut />} />
              <Route path="/referral-program" element={<ReferralProgram />} />
              <Route path="/student-discount" element={<StudentDiscount />} />
              
              {/* State Statistics Pages */}
              <Route path="/alabama-cryptocurrency-scam-statistics-2020-2024" element={<AlabamaStats />} />
              <Route path="/alaska-cryptocurrency-scam-statistics-2020-2024" element={<AlaskaStats />} />
              <Route path="/arizona-cryptocurrency-scam-statistics-2020-2024" element={<ArizonaStats />} />
              <Route path="/arkansas-cryptocurrency-scam-statistics-2020-2024" element={<ArkansasStats />} />
              <Route path="/california-cryptocurrency-scam-statistics-2020-2024" element={<CaliforniaStats />} />
              <Route path="/colorado-cryptocurrency-scam-statistics-2020-2024" element={<ColoradoStats />} />
              <Route path="/connecticut-cryptocurrency-scam-statistics-2020-2024" element={<ConnecticutStats />} />
              <Route path="/delaware-cryptocurrency-scam-statistics-2020-2024" element={<DelawareStats />} />
              <Route path="/florida-cryptocurrency-scam-statistics-2020-2024" element={<FloridaStats />} />
              <Route path="/georgia-cryptocurrency-scam-statistics-2020-2024" element={<GeorgiaStats />} />
              <Route path="/hawaii-cryptocurrency-scam-statistics-2020-2024" element={<HawaiiStats />} />
              <Route path="/idaho-cryptocurrency-scam-statistics-2020-2024" element={<IdahoStats />} />
              <Route path="/illinois-cryptocurrency-scam-statistics-2020-2024" element={<IllinoisStats />} />
              <Route path="/indiana-cryptocurrency-scam-statistics-2020-2024" element={<IndianaStats />} />
              <Route path="/iowa-cryptocurrency-scam-statistics-2020-2024" element={<IowaStats />} />
              <Route path="/kansas-cryptocurrency-scam-statistics-2020-2024" element={<KansasStats />} />
              <Route path="/kentucky-cryptocurrency-scam-statistics-2020-2024" element={<KentuckyStats />} />
              <Route path="/louisiana-cryptocurrency-scam-statistics-2020-2024" element={<LouisianaStats />} />
              <Route path="/maine-cryptocurrency-scam-statistics-2020-2024" element={<MaineStats />} />
              <Route path="/maryland-cryptocurrency-scam-statistics-2020-2024" element={<MarylandStats />} />
              <Route path="/massachusetts-cryptocurrency-scam-statistics-2020-2024" element={<MassachusettsStats />} />
              <Route path="/michigan-cryptocurrency-scam-statistics-2020-2024" element={<MichiganStats />} />
              <Route path="/minnesota-cryptocurrency-scam-statistics-2020-2024" element={<MinnesotaStats />} />
              <Route path="/mississippi-cryptocurrency-scam-statistics-2020-2024" element={<MississippiStats />} />
              <Route path="/missouri-cryptocurrency-scam-statistics-2020-2024" element={<MissouriStats />} />
              <Route path="/montana-cryptocurrency-scam-statistics-2020-2024" element={<MontanaStats />} />
              <Route path="/nebraska-cryptocurrency-scam-statistics-2020-2024" element={<NebraskaStats />} />
              <Route path="/nevada-cryptocurrency-scam-statistics-2020-2024" element={<NevadaStats />} />
              <Route path="/new-hampshire-cryptocurrency-scam-statistics-2020-2024" element={<NewHampshireStats />} />
              <Route path="/new-jersey-cryptocurrency-scam-statistics-2020-2024" element={<NewJerseyStats />} />
              <Route path="/new-mexico-cryptocurrency-scam-statistics-2020-2024" element={<NewMexicoStats />} />
              <Route path="/new-york-cryptocurrency-scam-statistics-2020-2024" element={<NewYorkStats />} />
              <Route path="/north-carolina-cryptocurrency-scam-statistics-2020-2024" element={<NorthCarolinaStats />} />
              <Route path="/north-dakota-cryptocurrency-scam-statistics-2020-2024" element={<NorthDakotaStats />} />
              <Route path="/ohio-cryptocurrency-scam-statistics-2020-2024" element={<OhioStats />} />
              <Route path="/oklahoma-cryptocurrency-scam-statistics-2020-2024" element={<OklahomaStats />} />
              <Route path="/oregon-cryptocurrency-scam-statistics-2020-2024" element={<OregonStats />} />
              <Route path="/pennsylvania-cryptocurrency-scam-statistics-2020-2024" element={<PennsylvaniaStats />} />
              <Route path="/rhode-island-cryptocurrency-scam-statistics-2020-2024" element={<RhodeIslandStats />} />
              <Route path="/south-carolina-cryptocurrency-scam-statistics-2020-2024" element={<SouthCarolinaStats />} />
              <Route path="/south-dakota-cryptocurrency-scam-statistics-2020-2024" element={<SouthDakotaStats />} />
              <Route path="/tennessee-cryptocurrency-scam-statistics-2020-2024" element={<TennesseeStats />} />
              <Route path="/texas-cryptocurrency-scam-statistics-2020-2024" element={<TexasStats />} />
              <Route path="/utah-cryptocurrency-scam-statistics-2020-2024" element={<UtahStats />} />
              <Route path="/vermont-cryptocurrency-scam-statistics-2020-2024" element={<VermontStats />} />
              <Route path="/virginia-cryptocurrency-scam-statistics-2020-2024" element={<VirginiaStats />} />
              <Route path="/washington-cryptocurrency-scam-statistics-2020-2024" element={<WashingtonStats />} />
              <Route path="/west-virginia-cryptocurrency-scam-statistics-2020-2024" element={<WestVirginiaStats />} />
              <Route path="/wisconsin-cryptocurrency-scam-statistics-2020-2024" element={<WisconsinStats />} />
              <Route path="/wyoming-cryptocurrency-scam-statistics-2020-2024" element={<WyomingStats />} />
              
              {/* Admin Routes */}
              <Route path="/admin" element={
                <AdminProtectedRoute>
                  <AdminDashboard />
                </AdminProtectedRoute>
              } />
              <Route path="/admin/dashboard" element={
                <AdminProtectedRoute>
                  <AdminDashboard />
                </AdminProtectedRoute>
              } />
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin/setup" element={
                <AdminProtectedRoute requireAuth={false}>
                  <AdminSetup />
                </AdminProtectedRoute>
              } />
              <Route path="/admin/wizard" element={<AdminSetupWizard />} />
              <Route path="/setup" element={
                <AdminProtectedRoute requireAuth={false}>
                  <Setup />
                </AdminProtectedRoute>
              } />
              <Route path="/install" element={
                <AdminProtectedRoute requireAuth={false}>
                  <Install />
                </AdminProtectedRoute>
              } />
              <Route path="*" element={<NotFound />} />
            </Routes>
            </AuthProvider>
          </BrowserRouter>
        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
};

export default App;
