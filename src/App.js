import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./navbar.jsx";
import Home from "./home.jsx";
import Contact from "./contact.jsx";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
        {/* Footer */}
        <footer className="bg-slate-800 text-white py-8 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-slate-300">© 2025 Laurie. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;