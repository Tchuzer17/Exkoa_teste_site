import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import "@/i18n";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import { Producers, Transporters, Buyers } from "./pages/RolePages.tsx";

const Auth = lazy(() => import("./pages/Auth.tsx"));
const Marketplace = lazy(() => import("./pages/Marketplace.tsx"));
const Tracking = lazy(() => import("./pages/Tracking.tsx"));
const ProducerDashboard = lazy(() => import("./pages/dashboard/ProducerDashboard.tsx"));
const TransporterDashboard = lazy(() => import("./pages/dashboard/TransporterDashboard.tsx"));
const BuyerDashboard = lazy(() => import("./pages/dashboard/BuyerDashboard.tsx"));

const queryClient = new QueryClient();

const Loader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="h-8 w-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/produtores" element={<Producers />} />
            <Route path="/transportadores" element={<Transporters />} />
            <Route path="/compradores" element={<Buyers />} />
            <Route path="/mercado" element={<Marketplace />} />
            <Route path="/rastreamento" element={<Tracking />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/dashboard/produtor" element={<ProducerDashboard />} />
            <Route path="/dashboard/transportador" element={<TransporterDashboard />} />
            <Route path="/dashboard/comprador" element={<BuyerDashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
