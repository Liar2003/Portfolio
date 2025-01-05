import React from "react";
import PublicPage from "./pages/PublicPage";
import { Suspense, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router";
import NotFoundPage from "./pages/NotFoundPage";
 const App = () => {
  return (
    <Suspense>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<PublicPage />} />
          {/* Private Routes */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </Suspense>
  );
};
export default App;