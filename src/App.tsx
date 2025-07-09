
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound";
import CaseStudies from "./pages/CaseStudies";
import CryptocurrencyScams from "./pages/CryptocurrencyScams";
import CaliforniaStats from "./pages/CaliforniaStats";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Helmet>
          <title>FBI Cybercrime Division - Protecting America in the Digital Age</title>
          <meta name="description" content="The FBI Cybercrime Division investigates digital crimes, assists victims, and recovers stolen assets. Report cybercrime and access prevention resources." />
          <meta name="keywords" content="FBI, cybercrime, digital investigation, asset recovery, scam prevention, cryptocurrency fraud, romance scams" />
          <meta property="og:title" content="FBI Cybercrime Division" />
          <meta property="og:description" content="Official FBI division dedicated to investigating cybercrime and protecting American citizens from digital threats." />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://fbi-cybercrime.gov" />
        </Helmet>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/cryptocurrency-scams" element={<CryptocurrencyScams />} />
            <Route path="/california-cryptocurrency-scam-statistics-2020-2024" element={<CaliforniaStats />} />
            
            {/* Scam Type Routes */}
            <Route path="/forex-scams" element={<Index />} />
            <Route path="/romance-scams" element={<Index />} />
            <Route path="/pig-butchering-scam" element={<Index />} />
            <Route path="/fake-trading-scam" element={<Index />} />
            <Route path="/binary-options-scams" element={<Index />} />
            <Route path="/job-scam" element={<Index />} />
            <Route path="/task-scam" element={<Index />} />
            <Route path="/online-dating-scam" element={<Index />} />
            <Route path="/phishing-scam" element={<Index />} />
            <Route path="/wallet-poisoning-scam" element={<Index />} />
            
            {/* Service Routes */}
            <Route path="/asset-recovery-solutions" element={<Index />} />
            <Route path="/blockchain-forensic" element={<Index />} />
            <Route path="/crypto-investigation" element={<Index />} />
            <Route path="/blockchain-analyst" element={<Index />} />
            <Route path="/scam-prevention" element={<Index />} />
            
            {/* Content Routes */}
            <Route path="/blog" element={<Index />} />
            <Route path="/news-room" element={<Index />} />
            <Route path="/manuals" element={<Index />} />
            <Route path="/shitlist" element={<Index />} />
            <Route path="/qa" element={<Index />} />
            <Route path="/lionsgate-network-research-team" element={<Index />} />
            
            {/* Legal Routes */}
            <Route path="/privacy-policy-2" element={<Index />} />
            <Route path="/terms-conditions" element={<Index />} />
            <Route path="/opt-out-preferences" element={<Index />} />
            
            {/* Business Routes */}
            <Route path="/career" element={<Index />} />
            <Route path="/student-discount" element={<Index />} />
            <Route path="/refer-a-friend" element={<Index />} />
            <Route path="/bounty-hotline" element={<Index />} />
            
            {/* State Statistics Routes */}
            <Route path="/new-york-cryptocurrency-scam-statistics-2020-2024" element={<Index />} />
            <Route path="/texas-cryptocurrency-scam-statistics-2020-2024" element={<Index />} />
            <Route path="/florida-cryptocurrency-scam-statistics-2020-2024" element={<Index />} />
            <Route path="/arizona-cryptocurrency-scam-statistics-2020-2024" element={<Index />} />
            <Route path="/colorado-cryptocurrency-scam-statistics-2020-2024" element={<Index />} />
            <Route path="/georgia-cryptocurrency-scam-statistics-2020-2024" element={<Index />} />
            <Route path="/illinois-cryptocurrency-scam-statistics-2020-2024" element={<Index />} />
            <Route path="/indiana-cryptocurrency-scam-statistics-2020-2024" element={<Index />} />
            <Route path="/maryland-cryptocurrency-scam-statistics-2020-2024" element={<Index />} />
            <Route path="/massachusetts-cryptocurrency-scam-statistics-2020-2024" element={<Index />} />
            <Route path="/michigan-cryptocurrency-scam-statistics-2020-2024" element={<Index />} />
            <Route path="/nevada-cryptocurrency-scam-statistics-2020-2024" element={<Index />} />
            <Route path="/new-jersey-cryptocurrency-scam-statistics-2020-2024" element={<Index />} />
            <Route path="/north-carolina-cryptocurrency-scam-statistics-2020-2024" element={<Index />} />
            <Route path="/ohio-cryptocurrency-scam-statistics-2020-2024" element={<Index />} />
            <Route path="/pennsylvania-cryptocurrency-scam-statistics-2020-2024" element={<Index />} />
            <Route path="/tennessee-cryptocurrency-scam-statistics-2020-2024" element={<Index />} />
            <Route path="/virginia-cryptocurrency-scam-statistics-2020-2024" element={<Index />} />
            <Route path="/washington-cryptocurrency-scam-statistics-2020-2024" element={<Index />} />
            
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
