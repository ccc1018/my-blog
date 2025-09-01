import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "@/router/index.tsx";
import { ThemeProvider } from "@/components/theme/theme-provider.tsx";
import "@/locales/index.ts";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <RouterProvider router={router} />,
    </ThemeProvider>
  </StrictMode>,
);
