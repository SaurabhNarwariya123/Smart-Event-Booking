import React from "react";
import { MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const ConferencePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-500 to-purple-700 text-white px-6">
      
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full flex justify-between items-center max-w-5xl py-6"
      >
        <h1 className="text-2xl font-bold">Graviti</h1>
        <a
          href="/LandingPage"
          className="flex items-center gap-2 bg-white text-purple-600 px-5 py-2 rounded-full font-semibold shadow-md hover:bg-gray-200 transition"
        >
          Buy Ticket <ArrowRight size={18} />
        </a>
      </motion.header>

     
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="text-center space-y-1"
      >
        <p className="text-lg font-semibold"></p>
        <a
          href="mailto:info@example.com"
          className="text-white/80 hover:underline"
        >
          info@gravitinfosystems.com
        </a>
      </motion.div>

      
      <main className="flex-1 flex flex-col items-center justify-center text-center space-y-6">
        <motion.h2
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold leading-tight"
        >
         WelCome <br />
         Gravit InfoSystems Pvt. Ltd. <br />
         Software Development
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="max-w-2xl text-white/80 text-lg"
        >
         Gravit InfoSystems was founded in 2017. 
         Gravit Infosystems leadership team consists of devoted professionals with over fifteen years
         of high-tech experience. We provide business process and technology consulting with strong 
         expertise in architecture, design, customization, integration and development
         of cloud systems like Force.com, Salesforce, AWS and on premise systems as well.
        </motion.p>

      
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          id="buy"
          href="/LandingPage"
          className="flex items-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-200 transition"
        >
          Buy Ticket <ArrowRight size={20} />
        </motion.a>
      </main>

   
      <motion.footer
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="flex items-center gap-3 py-6"
      >
        <span className="bg-yellow-400 p-2 rounded-full">
          <MapPin className="text-purple-800" size={20} />
        </span>
        <a
          href="https://www.google.com/maps?q=Kailash+Vihar+Road,+Gwalior,+Madhya+Pradesh+474003,+IN"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg hover:underline hover:text-yellow-300 transition"
        >
          Kailash Vihar Road, Gwalior, MP 474003
        </a>
      </motion.footer>
    </div>
  );
};

export default ConferencePage;
