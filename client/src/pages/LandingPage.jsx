import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import backgroundImg from "../assets/background.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div> 
      <Navbar />
    <div className="relative min-h-[calc(100vh-140px)] w-full overflow-hidden bg-gray-900 text-white">
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
       style={{ backgroundImage: `url(${backgroundImg})` }}
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 5, ease: "easeOut" }}
      />

      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4 py-16">
        <motion.h1  className="text-5xl md:text-7xl font-extrabold mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }} >
          Welcome to Event Portal Saurabh 
        </motion.h1>

        <motion.p  className="text-lg md:text-2xl max-w-2xl mb-8 text-gray-200"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }} >
          Discover and book amazing events near you. Stay updated with real-time
          seat availability and smooth booking experience.
        </motion.p>

        <motion.button
          onClick={() => navigate("/events")}
          className="px-8 py-4 text-lg font-semibold rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 shadow-lg hover:scale-105 transition-transform"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}>
          Explore Events
        </motion.button>
      </div>
    </div>
          <Footer />
    </div>
  );
};

export default LandingPage;
