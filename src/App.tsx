
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { lazy, Suspense } from "react";

// Lazy load pages for better performance
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const NotFound = lazy(() => import("./pages/NotFound"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const CaseStudyDetail = lazy(() => import("./pages/CaseStudyDetail"));
const CryptocurrencyScams = lazy(() => import("./pages/CryptocurrencyScams"));
const ForexScams = lazy(() => import("./pages/ForexScams"));
const RomanceScams = lazy(() => import("./pages/RomanceScams"));
const AssetRecovery = lazy(() => import("./pages/AssetRecovery"));

// Business & Legal Pages
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsConditions = lazy(() => import("./pages/TermsConditions"));
const OptOut = lazy(() => import("./pages/OptOut"));
const Career = lazy(() => import("./pages/Career"));
const Services = lazy(() => import("./pages/Services"));
const Jobs = lazy(() => import("./pages/Jobs"));
const StudentDiscount = lazy(() => import("./pages/StudentDiscount"));
const ReferralProgram = lazy(() => import("./pages/ReferralProgram"));
const BountyHotline = lazy(() => import("./pages/BountyHotline"));
const LedgerSecurityReport = lazy(() => import("./pages/LedgerSecurityReport"));

// State Statistics Pages
const AlabamaStats = lazy(() => import("./pages/AlabamaStats"));
const AlaskaStats = lazy(() => import("./pages/AlaskaStats"));
const ArizonaStats = lazy(() => import("./pages/ArizonaStats"));
const ArkansasStats = lazy(() => import("./pages/ArkansasStats"));
const CaliforniaStats = lazy(() => import("./pages/CaliforniaStats"));
const ColoradoStats = lazy(() => import("./pages/ColoradoStats"));
const ConnecticutStats = lazy(() => import("./pages/ConnecticutStats"));
const DelawareStats = lazy(() => import("./pages/DelawareStats"));
const FloridaStats = lazy(() => import("./pages/FloridaStats"));
const GeorgiaStats = lazy(() => import("./pages/GeorgiaStats"));
const HawaiiStats = lazy(() => import("./pages/HawaiiStats"));
const IdahoStats = lazy(() => import("./pages/IdahoStats"));
const IllinoisStats = lazy(() => import("./pages/IllinoisStats"));
const IndianaStats = lazy(() => import("./pages/IndianaStats"));
const IowaStats = lazy(() => import("./pages/IowaStats"));
const KansasStats = lazy(() => import("./pages/KansasStats"));
const KentuckyStats = lazy(() => import("./pages/KentuckyStats"));
const LouisianaStats = lazy(() => import("./pages/LouisianaStats"));
const MaineStats = lazy(() => import("./pages/MaineStats"));
const MarylandStats = lazy(() => import("./pages/MarylandStats"));
const MassachusettsStats = lazy(() => import("./pages/MassachusettsStats"));
const MichiganStats = lazy(() => import("./pages/MichiganStats"));
const MinnesotaStats = lazy(() => import("./pages/MinnesotaStats"));
const MississippiStats = lazy(() => import("./pages/MississippiStats"));
const MissouriStats = lazy(() => import("./pages/MissouriStats"));
const MontanaStats = lazy(() => import("./pages/MontanaStats"));
const NebraskaStats = lazy(() => import("./pages/NebraskaStats"));
const NevadaStats = lazy(() => import("./pages/NevadaStats"));
const NewHampshireStats = lazy(() => import("./pages/NewHampshireStats"));
const NewJerseyStats = lazy(() => import("./pages/NewJerseyStats"));
const NewMexicoStats = lazy(() => import("./pages/NewMexicoStats"));
const NewYorkStats = lazy(() => import("./pages/NewYorkStats"));
const NorthCarolinaStats = lazy(() => import("./pages/NorthCarolinaStats"));
const NorthDakotaStats = lazy(() => import("./pages/NorthDakotaStats"));
const OhioStats = lazy(() => import("./pages/OhioStats"));
const OklahomaStats = lazy(() => import("./pages/OklahomaStats"));
const OregonStats = lazy(() => import("./pages/OregonStats"));
const PennsylvaniaStats = lazy(() => import("./pages/PennsylvaniaStats"));
const RhodeIslandStats = lazy(() => import("./pages/RhodeIslandStats"));
const SouthCarolinaStats = lazy(() => import("./pages/SouthCarolinaStats"));
const SouthDakotaStats = lazy(() => import("./pages/SouthDakotaStats"));
const TennesseeStats = lazy(() => import("./pages/TennesseeStats"));
const TexasStats = lazy(() => import("./pages/TexasStats"));
const UtahStats = lazy(() => import("./pages/UtahStats"));
const VermontStats = lazy(() => import("./pages/VermontStats"));
const VirginiaStats = lazy(() => import("./pages/VirginiaStats"));
const WashingtonStats = lazy(() => import("./pages/WashingtonStats"));
const WestVirginiaStats = lazy(() => import("./pages/WestVirginiaStats"));
const WisconsinStats = lazy(() => import("./pages/WisconsinStats"));
const WyomingStats = lazy(() => import("./pages/WyomingStats"));
const StateDirectory = lazy(() => import("./pages/StateDirectory"));

// New Scam Intelligence Pages
const BinaryOptionsScams = lazy(() => import("./pages/BinaryOptionsScams"));
const JobScam = lazy(() => import("./pages/JobScam"));
const TaskScam = lazy(() => import("./pages/TaskScam"));
const FakeTrading = lazy(() => import("./pages/FakeTrading"));
const PigButchering = lazy(() => import("./pages/PigButchering"));
const OnlineDatingScam = lazy(() => import("./pages/OnlineDatingScam"));
const PhishingScam = lazy(() => import("./pages/PhishingScam"));
const WalletPoisoning = lazy(() => import("./pages/WalletPoisoning"));
const StockTradingScams = lazy(() => import("./pages/StockTradingScams"));
const BlockchainCom = lazy(() => import("./pages/BlockchainCom"));
const BlockchainForensic = lazy(() => import("./pages/BlockchainForensic"));

// Service Pages
const ScamPrevention = lazy(() => import("./pages/ScamPrevention"));
const CryptoInvestigation = lazy(() => import("./pages/CryptoInvestigation"));
const BlockchainAnalyst = lazy(() => import("./pages/BlockchainAnalyst"));

// Content Pages
const NewsRoom = lazy(() => import("./pages/NewsRoom"));
const Manuals = lazy(() => import("./pages/Manuals"));
const QA = lazy(() => import("./pages/QA"));
const ResearchTeam = lazy(() => import("./pages/ResearchTeam"));
const AdminLogin = lazy(() => import("./pages/AdminLogin"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));
const AdminSetup = lazy(() => import("./pages/AdminSetup"));

const queryClient = new QueryClient();

const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
  </div>
);

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Helmet>
          <title>LGN Recovery - Elite Cybercrime Investigation & Asset Recovery</title>
          <meta name="description" content="LGN Recovery Division investigates digital crimes, assists victims, and recovers stolen assets. Expert cryptocurrency fraud investigation and asset recovery services." />
          <meta name="keywords" content="asset recovery, cybercrime investigation, cryptocurrency fraud, romance scam recovery, blockchain forensics, digital asset recovery" />
          <meta property="og:title" content="LGN Recovery - Elite Cybercrime Investigation" />
          <meta property="og:description" content="Professional cybercrime investigation and asset recovery specialists. Recovering stolen digital assets worldwide." />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://lionsgate.network" />
        </Helmet>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/case-studies/:id" element={<CaseStudyDetail />} />
              
              {/* Scam Intelligence Routes */}
              <Route path="/cryptocurrency-scams" element={<CryptocurrencyScams />} />
              <Route path="/forex-scams" element={<ForexScams />} />
              <Route path="/romance-scams" element={<RomanceScams />} />
              <Route path="/binary-options-scams" element={<BinaryOptionsScams />} />
              <Route path="/job-scam" element={<JobScam />} />
              <Route path="/task-scam" element={<TaskScam />} />
              <Route path="/fake-trading-scam" element={<FakeTrading />} />
              <Route path="/pig-butchering-scam" element={<PigButchering />} />
              <Route path="/online-dating-scam" element={<OnlineDatingScam />} />
              
              {/* New Scam Intelligence Pages */}
              <Route path="/phishing-scam" element={<PhishingScam />} />
              <Route path="/wallet-poisoning-scam" element={<WalletPoisoning />} />
              <Route path="/stock-trading-scams" element={<StockTradingScams />} />
              <Route path="/blockchain-com" element={<BlockchainCom />} />
              
              {/* Service Routes */}
              <Route path="/asset-recovery-solutions" element={<AssetRecovery />} />
              <Route path="/scam-prevention" element={<ScamPrevention />} />
              <Route path="/blockchain-forensic" element={<BlockchainForensic />} />
              
              {/* Service routes */}
              <Route path="/crypto-investigation" element={<CryptoInvestigation />} />
              <Route path="/blockchain-analyst" element={<BlockchainAnalyst />} />
              
              {/* Content Routes */}
              <Route path="/news-room" element={<NewsRoom />} />
              
              {/* Content routes */}
              <Route path="/manuals" element={<Manuals />} />
              <Route path="/qa" element={<QA />} />
              <Route path="/lionsgate-network-research-team" element={<ResearchTeam />} />
              <Route path="/ledger-security-incidents-analysis-and-recommendations" element={<LedgerSecurityReport />} />
              
              {/* Admin Routes */}
              <Route path="/admin/setup" element={<AdminSetup />} />
              <Route path="/admin" element={<AdminLogin />} />
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              
              {/* Legal Routes */}
              <Route path="/privacy-policy-2" element={<PrivacyPolicy />} />
              <Route path="/terms-conditions" element={<TermsConditions />} />
              <Route path="/opt-out-preferences" element={<OptOut />} />
              
              {/* Business Routes */}
              <Route path="/career" element={<Career />} />
              <Route path="/student-discount" element={<StudentDiscount />} />
              <Route path="/refer-a-friend" element={<ReferralProgram />} />
              <Route path="/bounty-hotline" element={<BountyHotline />} />
              <Route path="/services" element={<Services />} />
              <Route path="/jobs" element={<Jobs />} />
              
              {/* State Statistics Routes */}
              <Route path="/california-cryptocurrency-scam-statistics-2020-2024" element={<CaliforniaStats />} />
              <Route path="/texas-cryptocurrency-scam-statistics-2020-2024" element={<TexasStats />} />
              
              {/* State Statistics Routes */}
              <Route path="/arizona-cryptocurrency-scam-statistics-2020-2024" element={<ArizonaStats />} />
              <Route path="/colorado-cryptocurrency-scam-statistics-2020-2024" element={<ColoradoStats />} />
              <Route path="/florida-cryptocurrency-scam-statistics-2020-2024" element={<FloridaStats />} />
              <Route path="/georgia-cryptocurrency-scam-statistics-2020-2024" element={<GeorgiaStats />} />
              <Route path="/illinois-cryptocurrency-scam-statistics-2020-2024" element={<IllinoisStats />} />
              <Route path="/indiana-cryptocurrency-scam-statistics-2020-2024" element={<IndianaStats />} />
              <Route path="/maryland-cryptocurrency-scam-statistics-2020-2024" element={<MarylandStats />} />
              <Route path="/massachusetts-cryptocurrency-scam-statistics-2020-2024" element={<MassachusettsStats />} />
              <Route path="/michigan-cryptocurrency-scam-statistics-2020-2024" element={<MichiganStats />} />
              <Route path="/nevada-cryptocurrency-scam-statistics-2020-2024" element={<NevadaStats />} />
              <Route path="/new-jersey-cryptocurrency-scam-statistics-2020-2024" element={<NewJerseyStats />} />
              <Route path="/new-york-cryptocurrency-scam-statistics-2020-2024" element={<NewYorkStats />} />
              <Route path="/north-carolina-cryptocurrency-scam-statistics-2020-2024" element={<NorthCarolinaStats />} />
              <Route path="/ohio-cryptocurrency-scam-statistics-2020-2024" element={<OhioStats />} />
              <Route path="/pennsylvania-cryptocurrency-scam-statistics-2020-2024" element={<PennsylvaniaStats />} />
              <Route path="/tennessee-cryptocurrency-scam-statistics-2020-2024" element={<TennesseeStats />} />
              <Route path="/virginia-cryptocurrency-scam-statistics-2020-2024" element={<VirginiaStats />} />
              <Route path="/washington-cryptocurrency-scam-statistics-2020-2024" element={<WashingtonStats />} />
              
              {/* All States Route Directory */}
              <Route path="/state-intelligence" element={<StateDirectory />} />
              
              {/* Additional State Routes */}
              <Route path="/alabama-cryptocurrency-scam-statistics-2020-2024" element={<AlabamaStats />} />
              <Route path="/alaska-cryptocurrency-scam-statistics-2020-2024" element={<AlaskaStats />} />
              <Route path="/arkansas-cryptocurrency-scam-statistics-2020-2024" element={<ArkansasStats />} />
              <Route path="/connecticut-cryptocurrency-scam-statistics-2020-2024" element={<ConnecticutStats />} />
              <Route path="/delaware-cryptocurrency-scam-statistics-2020-2024" element={<DelawareStats />} />
              <Route path="/hawaii-cryptocurrency-scam-statistics-2020-2024" element={<HawaiiStats />} />
              <Route path="/idaho-cryptocurrency-scam-statistics-2020-2024" element={<IdahoStats />} />
              <Route path="/iowa-cryptocurrency-scam-statistics-2020-2024" element={<IowaStats />} />
              <Route path="/kansas-cryptocurrency-scam-statistics-2020-2024" element={<KansasStats />} />
              <Route path="/kentucky-cryptocurrency-scam-statistics-2020-2024" element={<KentuckyStats />} />
              <Route path="/louisiana-cryptocurrency-scam-statistics-2020-2024" element={<LouisianaStats />} />
              <Route path="/maine-cryptocurrency-scam-statistics-2020-2024" element={<MaineStats />} />
              <Route path="/minnesota-cryptocurrency-scam-statistics-2020-2024" element={<MinnesotaStats />} />
              <Route path="/mississippi-cryptocurrency-scam-statistics-2020-2024" element={<MississippiStats />} />
              <Route path="/missouri-cryptocurrency-scam-statistics-2020-2024" element={<MissouriStats />} />
              <Route path="/montana-cryptocurrency-scam-statistics-2020-2024" element={<MontanaStats />} />
              <Route path="/nebraska-cryptocurrency-scam-statistics-2020-2024" element={<NebraskaStats />} />
              <Route path="/new-hampshire-cryptocurrency-scam-statistics-2020-2024" element={<NewHampshireStats />} />
              <Route path="/new-mexico-cryptocurrency-scam-statistics-2020-2024" element={<NewMexicoStats />} />
              <Route path="/north-dakota-cryptocurrency-scam-statistics-2020-2024" element={<NorthDakotaStats />} />
              <Route path="/oklahoma-cryptocurrency-scam-statistics-2020-2024" element={<OklahomaStats />} />
              <Route path="/oregon-cryptocurrency-scam-statistics-2020-2024" element={<OregonStats />} />
              <Route path="/rhode-island-cryptocurrency-scam-statistics-2020-2024" element={<RhodeIslandStats />} />
              <Route path="/south-carolina-cryptocurrency-scam-statistics-2020-2024" element={<SouthCarolinaStats />} />
              <Route path="/south-dakota-cryptocurrency-scam-statistics-2020-2024" element={<SouthDakotaStats />} />
              <Route path="/utah-cryptocurrency-scam-statistics-2020-2024" element={<UtahStats />} />
              <Route path="/vermont-cryptocurrency-scam-statistics-2020-2024" element={<VermontStats />} />
              <Route path="/west-virginia-cryptocurrency-scam-statistics-2020-2024" element={<WestVirginiaStats />} />
              <Route path="/wisconsin-cryptocurrency-scam-statistics-2020-2024" element={<WisconsinStats />} />
              <Route path="/wyoming-cryptocurrency-scam-statistics-2020-2024" element={<WyomingStats />} />
              
              {/* Catch-all route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
