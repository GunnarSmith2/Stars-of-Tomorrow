import React from "react";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./utils/theme.js";
import "./app.css";

// Importing Pages
import {
  LoginPage,
  Events,
  Rosters,
  HittingData,
  FieldingData,
  PitchingData,
} from "./pages";

// Import Routes
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <div className="background">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Rosters" element={<Rosters />} />
          <Route path="/HittingData" element={<HittingData />} />
          <Route path="/FieldingData" element={<FieldingData />} />
          <Route path="/PitchingData" element={<PitchingData />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
