import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Admissions from "./pages/Admissions";
import CampusLife from "./pages/CampusLife";
import Placements from "./pages/Placements";
import NewsEvents from "./pages/NewsEvents";
import Gallery from "./pages/Gallery";
import NotFound from "./pages/NotFound";
import ClickSpark from "./components/ui/ClickSpark";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
          <ClickSpark
            sparkColor='#fff'
            sparkSize={10}
            sparkRadius={15}
            sparkCount={8}
            duration={400}
          >
            <div style={{ height: '100%', overflowY: 'auto' }}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/admissions" element={<Admissions />} />
                <Route path="/campus-life" element={<CampusLife />} />
                <Route path="/placements" element={<Placements />} />
                <Route path="/news-events" element={<NewsEvents />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </ClickSpark>

        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
