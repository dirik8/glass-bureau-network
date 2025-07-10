
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
const CryptocurrencyScams = lazy(() => import("./pages/CryptocurrencyScams"));
const CaliforniaStats = lazy(() => import("./pages/CaliforniaStats"));
const ForexScams = lazy(() => import("./pages/ForexScams"));
const RomanceScams = lazy(() => import("./pages/RomanceScams"));
const AssetRecovery = lazy(() => import("./pages/AssetRecovery"));
const TexasStats = lazy(() => import("./pages/TexasStats"));

// New Scam Intelligence Pages
const BinaryOptionsScams = lazy(() => import("./pages/BinaryOptionsScams"));
const JobScam = lazy(() => import("./pages/JobScam"));
const TaskScam = lazy(() => import("./pages/TaskScam"));
const OnlineDatingScam = lazy(() => import("./pages/OnlineDatingScam"));
const PhishingScam = lazy(() => import("./pages/PhishingScam"));
const WalletPoisoningScam = lazy(() => import("./pages/WalletPoisoningScam"));
const StockTradingScams = lazy(() => import("./pages/StockTradingScams"));
const BlockchainCom = lazy(() => import("./pages/BlockchainCom"));

// Service Pages
const CryptoInvestigation = lazy(() => import("./pages/CryptoInvestigation"));
const BlockchainForensic = lazy(() => import("./pages/BlockchainForensic"));
const BlockchainAnalyst = lazy(() => import("./pages/BlockchainAnalyst"));
const ScamPrevention = lazy(() => import("./pages/ScamPrevention"));

// State Statistics Pages
const ArizonaStats = lazy(() => import("./pages/ArizonaStats"));
const ColoradoStats = lazy(() => import("./pages/ColoradoStats"));
const FloridaStats = lazy(() => import("./pages/FloridaStats"));
const GeorgiaStats = lazy(() => import("./pages/GeorgiaStats"));
const IllinoisStats = lazy(() => import("./pages/IllinoisStats"));
const IndianaStats = lazy(() => import("./pages/IndianaStats"));
const MarylandStats = lazy(() => import("./pages/MarylandStats"));
const MassachusettsStats = lazy(() => import("./pages/MassachusettsStats"));
const MichiganStats = lazy(() => import("./pages/MichiganStats"));
const NevadaStats = lazy(() => import("./pages/NevadaStats"));
const NewJerseyStats = lazy(() => import("./pages/NewJerseyStats"));
const NewYorkStats = lazy(() => import("./pages/NewYorkStats"));
const NorthCarolinaStats = lazy(() => import("./pages/NorthCarolinaStats"));
const OhioStats = lazy(() => import("./pages/OhioStats"));
const PennsylvaniaStats = lazy(() => import("./pages/PennsylvaniaStats"));
const TennesseeStats = lazy(() => import("./pages/TennesseeStats"));
const VirginiaStats = lazy(() => import("./pages/VirginiaStats"));
const WashingtonStats = lazy(() => import("./pages/WashingtonStats"));

// Business & Content Pages
const NewsRoom = lazy(() => import("./pages/NewsRoom"));
const Manuals = lazy(() => import("./pages/Manuals"));
const Career = lazy(() => import("./pages/Career"));
const StudentDiscount = lazy(() => import("./pages/StudentDiscount"));
const ReferAFriend = lazy(() => import("./pages/ReferAFriend"));
const BountyHotline = lazy(() => import("./pages/BountyHotline"));
const ResearchTeam = lazy(() => import("./pages/ResearchTeam"));
const QA = lazy(() => import("./pages/QA"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsConditions = lazy(() => import("./pages/TermsConditions"));
const Services = lazy(() => import("./pages/Services"));
const Jobs = lazy(() => import("./pages/Jobs"));

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
              
              {/* Scam Intelligence Routes */}
              <Route path="/cryptocurrency-scams" element={<CryptocurrencyScams />} />
              <Route path="/forex-scams" element={<ForexScams />} />
              <Route path="/romance-scams" element={<RomanceScams />} />
              <Route path="/pig-butchering-scam" element={<Index />} />
              <Route path="/fake-trading-scam" element={<Index />} />
              <Route path="/binary-options-scams" element={<BinaryOptionsScams />} />
              <Route path="/job-scam" element={<JobScam />} />
              <Route path="/task-scam" element={<TaskScam />} />
              <Route path="/online-dating-scam" element={<OnlineDatingScam />} />
              <Route path="/phishing-scam" element={<PhishingScam />} />
              <Route path="/wallet-poisoning-scam" element={<WalletPoisoningScam />} />
              <Route path="/stock-trading-scams" element={<StockTradingScams />} />
              <Route path="/blockchain-com" element={<BlockchainCom />} />
              
              {/* Service Routes */}
              <Route path="/asset-recovery-solutions" element={<AssetRecovery />} />
              <Route path="/blockchain-forensic" element={<BlockchainForensic />} />
              <Route path="/crypto-investigation" element={<CryptoInvestigation />} />
              <Route path="/blockchain-analyst" element={<BlockchainAnalyst />} />
              <Route path="/scam-prevention" element={<ScamPrevention />} />
              
              {/* Content Routes - Blog removed */}
              <Route path="/news-room" element={<NewsRoom />} />
              <Route path="/manuals" element={<Manuals />} />
              <Route path="/qa" element={<QA />} />
              <Route path="/lionsgate-network-research-team" element={<ResearchTeam />} />
              <Route path="/ledger-security-incidents-analysis-and-recommendations" element={<Index />} />
              
              {/* Legal Routes */}
              <Route path="/privacy-policy-2" element={<PrivacyPolicy />} />
              <Route path="/terms-conditions" element={<TermsConditions />} />
              <Route path="/opt-out-preferences" element={<Index />} />
              
              {/* Business Routes */}
              <Route path="/career" element={<Career />} />
              <Route path="/student-discount" element={<StudentDiscount />} />
              <Route path="/refer-a-friend" element={<ReferAFriend />} />
              <Route path="/bounty-hotline" element={<BountyHotline />} />
              <Route path="/services" element={<Services />} />
              <Route path="/jobs" element={<Jobs />} />
              
              {/* State Statistics Routes */}
              <Route path="/arizona-cryptocurrency-scam-statistics-2020-2024" element={<ArizonaStats />} />
              <Route path="/california-cryptocurrency-scam-statistics-2020-2024" element={<CaliforniaStats />} />
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
              <Route path="/texas-cryptocurrency-scam-statistics-2020-2024" element={<TexasStats />} />
              <Route path="/virginia-cryptocurrency-scam-statistics-2020-2024" element={<VirginiaStats />} />
              <Route path="/washington-cryptocurrency-scam-statistics-2020-2024" element={<WashingtonStats />} />
              
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
