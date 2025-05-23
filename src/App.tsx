import { Toaster as ShadToaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Confirmacao from "./pages/Confirmacao";
import LoadingPage from "./pages/LoadingPage";
import Obrigado from "./pages/Obrigado";
import UltimaOportunidad from "./pages/ultima-oportunidad";
import Parabens from "./pages/Parabens";
import Oportunidad from "./pages/Oportunidad";



const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ShadToaster />
      <SonnerToaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/salvando" element={<LoadingPage />} />
          <Route path="/confirmacao" element={<Confirmacao />} />
          <Route path="/obrigado" element={<Obrigado />} />
          <Route path="/parabens" element={<Parabens />} />
          <Route path="/oportunidad" element={<Oportunidad />} />
          <Route path="/ultima-oportunidad" element={<UltimaOportunidad />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;