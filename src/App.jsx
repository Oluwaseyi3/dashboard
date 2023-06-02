import { useState } from 'react'
import { ColorModeContext, useMode } from "../theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './pages/global/Navbar';
import  {MyProSidebarProvider}  from "./pages/global/sidebar/sidebarContext";
import Dashboard from "./pages/dashboard"
function App() {

  const [theme, colorMode] = useMode();

  return (
    <>
     <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
      <CssBaseline />
        <MyProSidebarProvider>
          <div style={{ height: "100%", width: "100%" }}>
            <main>
              <Navbar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
              </Routes>
            </main>
          </div>
        </MyProSidebarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
    </>
  )
}

export default App
