import App from "@app/App";
import { StoreProvider } from "@app/providers/StoreProvider";
import { ThemeProvider } from "@app/providers/ThemeProvider";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StoreProvider>
      <BrowserRouter>
        <ThemeProvider>
          <ToastProvider />
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </StoreProvider>
  </React.StrictMode>
);
