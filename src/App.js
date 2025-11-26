import React from "react";
import "./components/Navbar.css";
import "./App.css";
import Projects from "./pages/pastProjects/Projects";
import Service from "./pages/serviceOffered/Service";
import Team from "./pages/team/Team";
import Contacts from "./pages/contacts/Contacts";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Footer from "./components/Footer";
import Collaborations from "./pages/collaborazioni/Collaborations";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router basename="/websitelandini">
      <div className="App">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/servizi" element={<Service />} />
            <Route path="/progetti" element={<Projects />} />
            {/* <Route path="/team" element={<Team />} />
            <Route path="/contatti" element={<Contacts />} />
            <Route path="/collaborazioni" element={<Collaborations />} /> */}

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
