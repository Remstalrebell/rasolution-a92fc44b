import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import MarketingPage from "./pages/Marketing.tsx";
import NotFound from "./pages/NotFound.tsx";
import AppLayout from "./layouts/AppLayout.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import Projekte from "./pages/Projekte.tsx";
import Kunden from "./pages/Kunden.tsx";
import Analysen from "./pages/Analysen.tsx";
import Einstellungen from "./pages/Einstellungen.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/marketing" element={<MarketingPage />} />

          {/* App Shell mit Sidebar */}
          <Route path="/app" element={<AppLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="projekte" element={<Projekte />} />
            <Route path="kunden" element={<Kunden />} />
            <Route path="analysen" element={<Analysen />} />
            <Route path="einstellungen" element={<Einstellungen />} />
          </Route>

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
