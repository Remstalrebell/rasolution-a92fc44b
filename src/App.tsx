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
import MarketingInternal from "./pages/MarketingInternal.tsx";
import Impressum from "./pages/Impressum.tsx";
import Datenschutz from "./pages/Datenschutz.tsx";
import Login from "./pages/Login.tsx";
import AuthGuard from "./components/AuthGuard.tsx";
import Wartung from "./pages/Wartung.tsx";

const queryClient = new QueryClient();

// Wartungsmodus: auf true setzen, um die gesamte App auf die Wartungsseite umzuleiten
const isMaintenanceMode = false;

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {isMaintenanceMode ? (
          <Routes>
            <Route path="*" element={<Wartung />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/marketing" element={<MarketingPage />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="/login" element={<Login />} />
            <Route path="/wartung" element={<Wartung />} />

            {/* App Shell mit Sidebar – geschützt */}
            <Route path="/app" element={<AuthGuard><AppLayout /></AuthGuard>}>
              <Route index element={<Dashboard />} />
              <Route path="projekte" element={<Projekte />} />
              <Route path="kunden" element={<Kunden />} />
              <Route path="analysen" element={<Analysen />} />
              <Route path="einstellungen" element={<Einstellungen />} />
              <Route path="marketing-internal" element={<MarketingInternal />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        )}
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
