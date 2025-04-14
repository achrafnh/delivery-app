import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Restaurants from "./pages/Restaurants";
import Orders from "./pages/Orders";
import Users from "./pages/Users";
import DriversMap from "./pages/DriversMap";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = createTheme({ palette: { mode: darkMode ? "dark" : "light" } });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Topbar toggleTheme={() => setDarkMode(!darkMode)} />
        <div style={{ display: "flex" }}>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/restaurants" element={<ProtectedRoute><Restaurants /></ProtectedRoute>} />
            <Route path="/orders" element={<ProtectedRoute><Orders /></ProtectedRoute>} />
            <Route path="/users" element={<ProtectedRoute><Users /></ProtectedRoute>} />
            <Route path="/drivers-map" element={<ProtectedRoute><DriversMap /></ProtectedRoute>} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
