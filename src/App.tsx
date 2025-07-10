
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

// New Scam Intelligence Pages (only existing ones)
const BinaryOptionsScams = lazy(() => import("./pages/BinaryOptionsScams"));
const JobScam = lazy(() => import("./pages/JobScam"));
const TaskScam = lazy(() => import("./pages/TaskScam"));

// Service Pages (only existing ones)
const ScamPrevention = lazy(() => import("./pages/ScamPrevention"));

// Content Pages (only existing ones)
const NewsRoom = lazy(() => import("./pages/NewsRoom"));

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
              
              {/* Scam Intelligence Routes - Only existing pages */}
              <Route path="/cryptocurrency-scams" element={<CryptocurrencyScams />} />
              <Route path="/forex-scams" element={<ForexScams />} />
              <Route path="/romance-scams" element={<RomanceScams />} />
              <Route path="/binary-options-scams" element={<BinaryOptionsScams />} />
              <Route path="/job-scam" element={<JobScam />} />
              <Route path="/task-scam" element={<TaskScam />} />
              
              {/* Placeholder routes for pages that will be created later */}
              <Route path="/pig-butchering-scam" element={<Index />} />
              <Route path="/fake-trading-scam" element={<Index />} />
              <Route path="/online-dating-scam" element={<Index />} />
              <Route path="/phishing-scam" element={<Index />} />
              <Route path="/wallet-poisoning-scam" element={<Index />} />
              <Route path="/stock-trading-scams" element={<Index />} />
              <Route path="/blockchain-com" element={<Index />} />
              
              {/* Service Routes */}
              <Route path="/asset-recovery-solutions" element={<AssetRecovery />} />
              <Route path="/scam-prevention" element={<ScamPrevention />} />
              
              {/* Placeholder service routes */}
              <Route path="/blockchain-forensic" element={<Index />} />
              <Route path="/crypto-investigation" element={<Index />} />
              <Route path="/blockchain-analyst" element={<Index />} />
              
              {/* Content Routes */}
              <Route path="/news-room" element={<NewsRoom />} />
              
              {/* Placeholder content routes */}
              <Route path="/manuals" element={<Index />} />
              <Route path="/qa" element={<Index />} />
              <Route path="/lionsgate-network-research-team" element={<Index />} />
              <Route path="/ledger-security-incidents-analysis-and-recommendations" element={<Index />} />
              
              {/* Legal Routes - Placeholder */}
              <Route path="/privacy-policy-2" element={<Index />} />
              <Route path="/terms-conditions" element={<Index />} />
              <Route path="/opt-out-preferences" element={<Index />} />
              
              {/* Business Routes - Placeholder */}
              <Route path="/career" element={<Index />} />
              <Route path="/student-discount" element={<Index />} />
              <Route path="/refer-a-friend" element={<Index />} />
              <Route path="/bounty-hotline" element={<Index />} />
              <Route path="/services" element={<Index />} />
              <Route path="/jobs" element={<Index />} />
              
              {/* State Statistics Routes */}
              <Route path="/california-cryptocurrency-scam-statistics-2020-2024" element={<CaliforniaStats />} />
              <Route path="/texas-cryptocurrency-scam-statistics-2020-2024" element={<TexasStats />} />
              
              {/* Placeholder state routes */}
              <Route path="/arizona-cryptocurrency-scam-statistics-2020-2024" element={<Index />} />
              <Route path="/colorado-cryptocurrency-scam-statistics-2020-2024" element={<Index />} />
              <Route path="/florida-cryptocurrency-scam-statistics-2020-2024" element={<Index />} />
              <Route path="/georgia-cryptocurrency-scam-statistics-2020-2024" element={<Index />} />
              <Route path="/illinois-cryptocurrency-scam-statistics-2020-2024" element={<Index />} />
              <Route path="/indiana-cryptocurrency-scam-statistics-2020-2024" element={<Index />} />
              <Route path="/maryland-cryptocurrency-scam-statistics-2020-2024" element={<Index />} />
              <Route path="/massachusetts-cryptocurrency-scam-statistics-2020-2024" element={<Index />} />
              <Route path="/michigan-cryptocurrency-scam-statistics-2020-2024" element={<Index />} />
              <Route path="/nevada-cryptocurrency-scam-statistics-2020-2024" element={<Index />} />
              <Route path="/new-jersey-cryptocurrency-scam-statistics-2020-2024" element={<Index />} />
              <Route path="/new-york-cryptocurrency-scam-statistics-2020-2024" element={<Index />} />
              <Route path="/north-carolina-cryptocurrency-scam-statistics-2020-2024" element={<Index />} />
              <Route path="/ohio-cryptocurrency-scam-statistics-2020-2024" element={<Index />} />
              <Route path="/pennsylvania-cryptocurrency-scam-statistics-2020-2024" element={<Index />} />
              <Route path="/tennessee-cryptocurrency-scam-statistics-2020-2024" element={<Index />} />
              <Route path="/virginia-cryptocurrency-scam-statistics-2020-2024" element={<Index />} />
              <Route path="/washington-cryptocurrency-scam-statistics-2020-2024" element={<Index />} />
              
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
