import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PageLoader from "./components/ui/PageLoader";
import ClickSpark from "./components/ui/ClickSpark";

// Lazy load pages
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Courses = lazy(() => import("./pages/Courses"));
const Admissions = lazy(() => import("./pages/Admissions"));
const CampusLife = lazy(() => import("./pages/CampusLife"));
const Placements = lazy(() => import("./pages/Placements"));
const NewsEvents = lazy(() => import("./pages/NewsEvents"));
const Gallery = lazy(() => import("./pages/Gallery"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AdmissionsGatewayWrapper = lazy(() => import("./pages/AdmissionsGatewayWrapper"));

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    <div style={{ position: 'relative', height: '100dvh', overflow: 'hidden' }}>
      <ClickSpark
        sparkColor='#fff'
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <div ref={scrollRef} style={{ height: '100%', overflowY: 'auto' }}>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/admissions" element={<Admissions />} />
              <Route path="/campus-life" element={<CampusLife />} />
              <Route path="/placements" element={<Placements />} />
              <Route path="/news-events" element={<NewsEvents />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/admissions-gateway/*" element={<AdmissionsGatewayWrapper />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </div>
      </ClickSpark>
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
