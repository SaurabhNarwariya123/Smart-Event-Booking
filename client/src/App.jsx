import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import EventListPage from "./pages/EventListPage";
import EventDetailPage from "./pages/EventDetailPage";
import BookingPage from "./pages/BookingPage";
import AdminDashboard from "./pages/AdminDashboard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ConferencePage from "./components/ConferencePage";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* <ConferencePage /> */}
         {/* <Navbar /> */}
        <main className="flex-grow">
          <Routes>
            {/* Conference page as home */}
            <Route path="/" element={<ConferencePage />} /> 
            <Route path="/LandingPage" element={<LandingPage />} />
            <Route path="/events" element={<EventListPage />} />
            <Route path="/events/:id" element={<EventDetailPage />} />
            <Route path="/booking/:id" element={<BookingPage />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
          {/* <Footer /> */}
        </main>
        
      </div>
    </Router>
  );
}

export default App;
