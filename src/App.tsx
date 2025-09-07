import { Outlet } from "react-router-dom"; // <-- Important: Import Outlet
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Create the query client instance just once
const queryClient = new QueryClient();

// App.tsx is now the root layout component
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Header /> 
      <ScrollToTop />


      <main className="min-h-screen">
        <Outlet />
      </main>

      <Footer />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
