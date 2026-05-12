import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
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
import AdminControl from "./pages/AdminControl.tsx";
import CookieConsent from "./components/CookieConsent.tsx";

const queryClient = new QueryClient();

const MAINTENANCE_KEY = "rasolution_maintenance";

const MaintenanceGate = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const isMaintenance = localStorage.getItem(MAINTENANCE_KEY) === "true";

  // Always allow access to admin control & maintenance page itself
  if (location.pathname === "/admin-control" || location.pathname === "/wartung") {
    return <>{children}</>;
  }

  if (isMaintenance) {
    return <Wartung />;
  }

  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <CookieConsent />
        <MaintenanceGate>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/marketing" element={<MarketingPage />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="/login" element={<Login />} />
            <Route path="/wartung" element={<Wartung />} />
            <Route path="/admin-control" element={<AdminControl />} />

            {/* App Shell mit Sidebar – geschützt */}
            <Route path="/app" element={<AuthGuard><AppLayout /></AuthGuard>}>
              <Route index element={<Dashboard />} />
              <Route path="projekte" element={<Projekte />} />
              <Route path="kunden" element={<Kunden />} />
              <Route path="analysen" element={<Analysen />} />
              <Route path="einstellungen" element={<Einstellungen />} />
              <Route path="marketing-internal" element={<MarketingInternal />} />
            </Route>

            {/* Stealth-Link-System V2.0 - Industrial Alpha Protocol */}
            <Route path="/vidiq" element={<Navigate to="https://vidiq.com/features/keyword-tools/?afmc=ralfiverse&a=99094" replace />} />
            <Route path="/emergent" element={<Navigate to="https://app.emergent.sh/register?ref=ceor250178" replace />} />
            <Route path="/qonto" element={<Navigate to="https://qonto.com/r/loa54f" replace />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </MaintenanceGate>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
