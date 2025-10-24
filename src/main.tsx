import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Layout from "./layout/layout.tsx";
import { Toaster } from "./components/ui/sonner.tsx";
import { ThemeProvider } from "./components/custom_ui/theme-provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark">
      <div className="flex items-center justify-center h-screen font-fira ">
        <Toaster richColors position="top-right" />
        <Layout />
      </div>
    </ThemeProvider>
  </StrictMode>
);
