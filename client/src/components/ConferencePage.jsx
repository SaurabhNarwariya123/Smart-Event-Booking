import React from "react";
 import { useRef , useState , useEffect } from "react";
 import { useScroll } from "framer-motion";
import { MapPin, ArrowRight  } from "lucide-react";
import { motion  , useTransform} from "framer-motion";
import { Box, Button } from "@mui/material";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import LocationOnIcon from "@mui/icons-material/LocationOn";
 import LandingPage from "../pages/LandingPage";
 import EventListPage from "../pages/EventListPage";
 import BookingPage from "../pages/BookingPage";

import test1 from "../assets/Dr.Marcus.png"
import test2 from "../assets/Jonathan.png"
import test3 from  "../assets/Daniel.png"
import test4 from   "../assets/Ahmed.png"
import  video from  "../assets/videoframe.png"
import Jone from "../assets/Jone.png"
import carlos from "../assets/carlos.png"
import Ethan from "../assets/Ethan.png"
import Tomislav from "../assets/Tomislav.png"
import David  from "../assets/David.png"
import logo1 from "../assets/logo1.svg"
import logo2 from "../assets/logo2.svg"
import logo3 from "../assets/logo3.svg"
import logo4 from "../assets/logo4.svg"
import logo5 from "../assets/logo5.svg"
import logo6 from "../assets/logo6.svg"
import logo7 from  "../assets/logo7.svg"
import logo8 from  "../assets/logo8.svg"
import image1 from  "../assets/image1.jpg"
import image2 from "../assets/image2.jpg"
import image3 from  "../assets/image3.jpg"
import arrow from "../assets/arrow_transparent.png"
// import EventListPage from "../pages/EventListPage";



const ConferencePage = () => {

   const [blink, setBlink] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setBlink(true);
        setTimeout(() => setBlink(false), 1200); // blink खत्म होने पर remove
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);





const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  useEffect(() => {
    // ✅ Target Date (Change to your event date)
    const targetDate = new Date("2025-09-13T00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);



  const speakers = [
    { name: "John Anderson", role: "Head of Community Design", img: Jone },
    { name: "Carlos Mendes", role: "Senior DevOps Engineer", img: carlos },
    { name: "Ethan Zhao", role: "AI/ML Researcher", img: Ethan },
    { name: "Tomislav Petrovic", role: "Blockchain Solutions Architect", img: Tomislav },
    { name: "David Klein", role: "VP Product, TechBoom", img: David },
  ];

   const silverSponsors = [logo1, logo2, logo3,logo4];
  const diamondSponsors = [logo5, logo6, logo7, logo8];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, 
        delayChildren: 0.3    
      }
    }
  };

  // Individual logo animation
  const logoVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 10 }
    }
  };

  

const images = [
    image1,
    image2,
    image3
  ];

  // Parent variants (stagger children)

 const containerVariant = {   // ✅ keep this
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

  // Single image animation
  const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };


  const scheduleItems = [
    {
      time: "09:00 - 10:00 am",
      title: "Opening",
      description: "Kick off the day with a warm welcome from the host.",
      tags: ["Welcome"],
      color: "blue",
      speaker: "",
    },
    {
      time: "10:30 - 11:00 am",
      title: "Keynote Speech",
      description: "A visionary talk by our headline speaker on AI and SaaS.",
      tags: ["Keynote", "AI", "SaaS"],
      color: "purple",
      speaker: "Sheri Zhao",
    },
    {
      time: "11:00 - 12:00 pm",
      title: "Live App Showcase",
      description: "Demonstration of SaaS products and enterprise apps.",
      tags: ["Demo", "SaaS"],
      color: "red",
      speaker: "John Anderson",
    },
    {
      time: "12:00 - 2:30 pm",
      title: "Networking Lunch",
      description: "Connect with other attendees over lunch.",
      tags: ["Networking", "Food"],
      color: "yellow",
      speaker: "",
    },
  ];

  const colorMap = {
    blue: "bg-blue-100 text-blue-800",
    purple: "bg-purple-100 text-purple-800",
    red: "bg-red-100 text-red-800",
    yellow: "bg-yellow-100 text-yellow-800",
  };




     const pricingData = [
    {
      title: "Basic",
      price: "99",
      features: [
        "Full event access",
        "Access to keynote & breakout sessions",
        "Networking opportunities",
        "Access to post-event session recordings",
        "Conference materials and swag bag",
      ],
    },
    {
      title: "Premium",
      price: "399",
      features: [
        "Full event access",
        "Access to keynote & breakout sessions",
        "Networking opportunities",
        "Access to post-event session recordings",
        "Conference materials and swag bag",
      ],
    },
  ];



  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    "Will the talks be recorded?",
    "Is this event just for designers?",
    "Does my ticket cover everything?",
    "Can I refund or transfer my ticket?",
    "What is the conference about?",
    "Are there any perks with my ticket?",
    "What does my ticket include?",
    "How to become a speaker?",
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  

   const colors = [
  "bg-orange-200",
  "bg-blue-200",
  "bg-purple-200",
  "bg-red-200",
  "bg-green-200",
  "bg-pink-200",
];


 const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  };

  return (
     <div className="min-h-screen flex flex-col ">
    
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-purple-700 via-purple-600 to-black text-white relative overflow-hidden">
     

      {/* ---------------- Hero Section ---------------- */}
  
<header
  className={`fixed top-0 left-0 w-full bg-purple-700/70 backdrop-blur-md z-50 ${
    blink ? "animate-blink" : ""
  }`}
>
  <div className="w-full max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-4 sm:px-10 py-3">
    
    {/* Logo */}
    <h1 className="text-xl font-bold text-white text-center sm:text-left">
      Summitra
    </h1>

    {/* Contact + Button Wrapper */}
    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 w-full sm:w-auto sm:justify-end">
      
      {/* Contact Info */}
      <div className="flex flex-col items-center sm:items-end text-center sm:text-right space-y-1 mb-2 sm:mb-0">
        <span className="text-sm sm:text-base font-medium text-white">
          (888) 123 4567
        </span>
        <span className="text-sm sm:text-base font-medium text-white">
          info@example.com
        </span>
      </div>

      {/* Buy Ticket Button */}
      <a
        href="/LandingPage"
        className="inline-flex items-center gap-2 rounded-full bg-white text-black font-bold 
             px-4 py-2 text-sm 
             sm:px-5 sm:py-2 sm:text-base 
             md:px-6 md:py-3 md:text-lg 
             hover:bg-gray-100 transition"
      >
        Buy Ticket
        <span
          className="flex items-center justify-center 
                   w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 
                   rounded-full bg-purple-600 text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </span>
      </a>
    </div>
  </div>
</header>




{/* Mobile Fixed Bottom Button */}
 <a  href="/LandingPage"
        className="inline-flex items-center gap-2 rounded-full bg-white text-black font-bold 
             px-3 py-1.5 text-sm 
             sm:px-5 sm:py-2 sm:text-base 
             md:px-6 md:py-3 md:text-lg 
             hover:bg-gray-100 transition"> Buy Ticket
         <span className="flex items-center justify-center 
                   w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 
                   rounded-full bg-purple-600 text-white">
    <svg xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </span>
</a>


      <main className="relative z-10 flex flex-col text-4xl items-center text-center px-4 space-y-8 mt-40">
        <h2 className=" text-6xl font-extrabold leading-tight text-yellow-300">
          Code. Connect. Create. <br /> One Epic Conference
        </h2>
        <p className="text-white/80 max-w-2xl">
          Explore our lineup of keynote speakers and industry leaders who will
          inspire and enlighten at the conference.
        </p>

        <div className="flex items-center gap-8 m-6">
          {/* <Button */}
     <a  href="/LandingPage"
        className="inline-flex items-center gap-2 rounded-full bg-white text-black font-bold 
             px-3 py-1.5 text-sm 
             sm:px-5 sm:py-2 sm:text-base 
             md:px-6 md:py-3 md:text-lg 
             hover:bg-gray-100 transition"> Buy Ticket
         <span className="flex items-center justify-center 
                   w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 
                   rounded-full bg-purple-600 text-white">
    <svg xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </span>
</a>

{/* </Button> */}

          <div className="flex items-center flex-row gap-5 bg-purple-600 text-white rounded-full px-6 py-3 shadow-lg">
            <LocationOnIcon
              sx={{ fontSize: 40, color: "#facc15", marginRight: "12px" }}
            />
            <span className="text-2xl font-medium">
              Elgin Celina, Delaware
            </span>
          </div>
        </div>
      </main>

      {/* ---------------- Speakers Section ---------------- */}
      <section className="relative z-10 py-20 px-10">
       

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Speaker 1 */}
          <div className = "rounded-2xl p-6 text-center shadow-lg hover:scale-105 hover:shadow-2xl transition">
             {/* ✅ Image container with BG color */}
                <div className="bg-orange-200 rounded-2xl  text-center shadow-lg hover:scale-105 hover:shadow-2xl transition">
                <img
               src={test1}
                  alt="Speaker"
                className="rounded-3xl mt-3"
                   />
                    </div>

               {/* ✅ Text section */}
               <div className="p-5 text-center">
               <h3 className= "font-semibold text-xl">John Anderson</h3>
               <p className="text-sm text-gray-200">Head of Community Design</p>
               </div>
        </div>


          {/* Speaker 2 */}
          <div className = "rounded-2xl p-6 text-center shadow-lg hover:scale-105 hover:shadow-2xl transition">
             {/* ✅ Image container with BG color */}
                <div className="bg-blue-200 rounded-2xl  text-center shadow-lg hover:scale-105 hover:shadow-2xl transition">
                <img
               src={test2}
                  alt="Speaker"
                className="rounded-3xl mt-3"
                   />
                    </div>

               {/* ✅ Text section */}
               <div className="p-5 text-center">
               <h3 className= "font-semibold text-xl">John Anderson</h3>
               <p className="text-sm text-gray-200">Head of Community Design</p>
               </div>
        </div>

          {/* Speaker 3 */}
          <div className = "rounded-2xl p-6 text-center shadow-lg hover:scale-105 hover:shadow-2xl transition">
             {/* ✅ Image container with BG color */}
                <div className="bg-purple-200 rounded-2xl  text-center shadow-lg hover:scale-105 hover:shadow-2xl transition">
                <img
               src={test3}
                  alt="Speaker"
                className="rounded-3xl mt-3"
                   />
                    </div>

               {/* ✅ Text section */}
               <div className="p-5 text-center">
               <h3 className= "font-semibold text-xl">John Anderson</h3>
               <p className="text-sm text-gray-200">Head of Community Design</p>
               </div>
        </div>

          {/* Speaker 4 */}
          <div className = "rounded-2xl p-6 text-center shadow-lg hover:scale-105 hover:shadow-2xl transition">
             {/* ✅ Image container with BG color */}
                <div className="bg-red-200 rounded-2xl  text-center shadow-lg hover:scale-105 hover:shadow-2xl transition">
                <img
               src={test4}
                  alt="Speaker"
                className="rounded-3xl mt-3"
                   />
                    </div>

               {/* ✅ Text section */}
               <div className="p-5 text-center">
               <h3 className= "font-semibold text-xl">John Anderson</h3>
               <p className="text-sm text-gray-200">Head of Community Design</p>
               </div>
        </div>
        </div>
      </section>
    </div>

    <section className="relative min-h-[80vh] flex flex-col justify-center px-6 md:px-20 overflow-hidden bg-gradient-to-br bg-black">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r bg-black blur-3xl"
        animate={{ x: ["0%", "10%", "0%"], opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center w-full max-w-6xl mx-auto text-4xl">
        {/* Left Content */}
        <div className="max-w-2xl">
          <motion.h2
            className="text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            About
          </motion.h2>

          <motion.p
            className="text-4xl text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-white font-semibold text-3xl">Summitra 2025</span> is
            an immersive IT Conference over the course of three days,{" "}
            <span className="text-purple-400 font-semibold">September 13-15</span>.
            Our mission is to inspire innovation and challenge the way we think.
          </motion.p>

          {/* ✅ Fixed Countdown */}
          <motion.div
            className="mt-8 flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
          >
            {Object.entries(timeLeft).map(([key, value]) => (
              <div
                key={key}
                className="bg-gray-800/70 rounded-xl p-4 min-w-[70px] text-center text-4xl"
              >
                <span className="text-4xl font-bold text-white">{value}</span>
                <p className="text-gray-400 text-4xl">
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Button */}
        <a
             href= "/LandingPage"
             target="_blank"
             rel="noopener noreferrer"
             >
    <motion.button
      className="mt-10 md:mt-0 px-6 py-3 bg-white text-black font-semibold rounded-full shadow-lg flex items-center gap-2 hover:bg-purple-500 hover:text-white transition-all duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}>
      Buy Ticket
    <img className="bg-violet-500 rounded-2xl p-2" src={arrow} alt="arrow" />
  </motion.button>
</a>

      </div>
    </section>


     {/* Video Section */}
<section className="flex justify-center items-center py-16 bg-gradient-to-br from-black via-gray-900 to-black relative">
  <motion.div
    className="overflow-hidden rounded-2xl shadow-2xl"
    initial={{ opacity: 0, scale: 0.1 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    <motion.img
      src={video} // <-- Replace with your image path
      alt="Speaker giving presentation"
      className="w-[90vw] md:w-[60vw] h-auto object-cover"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.4 }}
    />
  </motion.div>

  {/* Curve Divider */}
  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
    <svg
      className="relative block w-full h-32"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      viewBox="0 0 1440 320"
    >
      <path
        fill="#9333ea" // Purple color (same as next section)
        d="M0,128 C480,320 960,0 1440,192 L1440,320 L0,320 Z"
      ></path>
    </svg>
  </div>
</section>



<EventListPage/>

{/* Partners Section */}
<section className="bg-black text-white py-16 px-6 md:px-20 relative">
  <div className="flex flex-col md:flex-row md:items-start md:justify-between">
    <div>
      <h2 className="text-7xl font-bold mb-2">We Are Partners</h2>
      <h3 className="text-7xl text-gray-400 mb-6">In Innovation</h3>
    </div>
    <p className="text-gray-400 text-2xl max-w-md">
      Meet the organizations fueling our event. Our sponsors are leaders in tech,
      helping us create an extraordinary experience.
    </p>
  </div>

  <div className="grid md:grid-cols-2 gap-6 mt-10">
    {/* Silver Sponsors */}
    <motion.div
      className="bg-zinc-900 rounded-2xl p-6 border border-zinc-700"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h4 className="text-purple-400 font-semibold mb-4">Silver Sponsor</h4>
      <motion.div
        className="grid grid-cols-2 gap-4 bg-zinc-900 p-6"
        variants={containerVariants}
      >
        {silverSponsors.map((logo, i) => (
          <motion.div
            key={i}
            className="bg-zinc-800 flex items-center justify-center p-4 cursor-pointer border border-transparent hover:border-purple-500 hover:shadow-[0_0_15px_rgba(168,85,247,0.6)] transition-all"
            variants={logoVariants}
            whileHover={{ scale: 1.08 }}
          >
            <img src={logo} alt={`Silver sponsor ${i}`} className="h-12 object-contain" />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>

    {/* Diamond Sponsors */}
    <motion.div
      className="bg-zinc-900 rounded-2xl p-10 border border-zinc-700"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h4 className="text-purple-400 font-semibold mb-4">Diamond Sponsor</h4>
      <motion.div className="grid grid-cols-2 gap-4" variants={containerVariants}>
        {diamondSponsors.map((logo, i) => (
          <motion.div
            key={i}
            className="bg-zinc-800 rounded-xl flex items-center justify-center p-4 cursor-pointer border border-transparent hover:border-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.8)] transition-all"
            variants={logoVariants}
            whileHover={{ scale: 1.08 }}
          >
            <img src={logo} alt={`Diamond sponsor ${i}`} className="h-12 object-contain" />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  </div>
</section>

     <section className="bg-purple-600 py-16 px-6 md:px-20 text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-yellow-200 mb-4">
        Resources From Past Conferences
      </h2>

      {/* NOTE: this is motion.div (important!) */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
        variants={containerVariant}      // parent variants
        initial="hidden"                  // start state
        whileInView="visible"             // animate when in view
        viewport={{ once: true, amount: 0.2 }}
      >
        {images.map((img, i) => (
          // each child uses imageVariants
         <motion.div
  key={i}
  className="overflow-hidden rounded-2xl shadow-xl cursor-pointer"
  variants={imageVariants}
>
  <motion.img
    src={img}
    alt={`Conference ${i + 1}`}
    className="object-cover mx-auto"
    style={{ width: "100%", height: "500px" }}
    whileHover={{
      width: "110%",  // width thoda badh gaya
      height: "550px", // height bhi badh gayi
    }}
    transition={{ duration: 0.4, ease: "easeInOut" }}
  />
</motion.div>

        ))}
      </motion.div>
    </section>

      {/*    left and right bala  */}
   <section>
       <div className="min-h-screen py-10 bg-black text-white flex items-start justify-center p-10">
      {/* Left Side - Timeline */}
      <div className="flex gap-10 w-full max-w-6xl">
        {/* Timeline Line */}
        <div className="w-1 bg-purple-600 rounded-full"></div>

        {/* Schedule Content */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex-1 space-y-8"
        >
          {/* Opening Session */}
          <motion.div
            variants={item}
            className="bg-neutral-900 p-6 rounded-xl shadow-md max-w-lg"
          >
            <p className="text-sm text-gray-400">09:00 - 10:00 am</p>
            <h2 className="text-2xl font-semibold mt-2">Opening</h2>
            <p className="text-gray-400 mt-2 text-sm">
              Kick off the day with a warm welcome from the host. We’ll walk
              through the schedule, introduce key speakers, and set the tone for
              an inspiring day.
            </p>
          </motion.div>

          {/* Example of another session */}
          <motion.div
            variants={item}
            className="bg-neutral-900 p-6 rounded-xl shadow-md max-w-lg"
          >
            <p className="text-sm text-gray-400">10:30 - 11:50 am</p>
            <h2 className="text-2xl font-semibold mt-2">
              Keynote: Future of Tech
            </h2>
            <p className="text-gray-400 mt-2 text-sm">
              Discover insights from industry leaders about the next big
              innovations shaping the world.
            </p>
          </motion.div>

          <motion.div
            variants={item}
            className="bg-neutral-900 p-6 rounded-xl shadow-md max-w-lg"
          >
            <p className="text-sm text-gray-400">10:30 - 11:50 am</p>
            <h2 className="text-2xl font-semibold mt-2">
              Keynote: Future of Tech
            </h2>
            <p className="text-gray-400 mt-2 text-sm">
              Discover insights from industry leaders about the next big
              innovations shaping the world.
            </p>
          </motion.div>

          <motion.div
            variants={item}
            className="bg-neutral-900 p-6 rounded-xl shadow-md max-w-lg"
          >
            <p className="text-sm text-gray-400">12.00 - 12.50pm</p>
            <h2 className="text-2xl font-semibold mt-2">Live App Showcase</h2>
            <p className="text-gray-400 mt-2 text-sm">
              See demos of exciting new SaaS products , apps ,and platforms , A
              mix of startup spotlight and enterprice Innovation
            </p>
          </motion.div>

          <motion.div
            variants={item}
            className="bg-neutral-900 p-6 rounded-xl shadow-md max-w-lg"
          >
            <p className="text-sm text-gray-400">1:20 - 2:30pm</p>
            <h2 className="text-2xl font-semibold mt-2">Networking Lunch</h2>
            <p className="text-gray-400 mt-2 text-sm">
              Enjoy food , meet other attendees and make real connection. Swap
              ideas , business card , and maybe your next partnership.
            </p>
          </motion.div>

          <motion.div
            variants={item}
            className="bg-neutral-900 p-6 rounded-xl shadow-md max-w-lg"
          >
            <p className="text-sm text-gray-400">3:00 - 4:30pm</p>
            <h2 className="text-2xl font-semibold mt-2">
              Building Scalable Products
            </h2>
            <p className="text-gray-400 mt-2 text-sm">
              Top founder and products leads share real stories and strategies
              on Building tools that grow with users and market
            </p>
          </motion.div>

          <motion.div
            variants={item}
            className="bg-neutral-900 p-6 rounded-xl shadow-md max-w-lg"
          >
            <p className="text-sm text-gray-400">5.00 - 5:30 pm</p>
            <h2 className="text-2xl font-semibold mt-2">
              Closing Remarks & Next Steps
            </h2>
            <p className="text-gray-400 mt-2 text-sm">
              Well recep the day , thank our speaker and share whats next -
              including post-event Resources and recordings
            </p>
          </motion.div>
        </motion.div>

        {/* Right Side - Text + Button */}
        <div className="w-1/3 flex flex-col justify-center pl-10">
          <h1 className="text-3xl font-bold leading-tight m-9 py-9">
            Organize <br /> Your <br /> Schedule
          </h1>
          <p className="mt-6 m-5 p-5 text-gray-400 text-2xl">
            Explore our lineup of <span className="font-semibold">keynote speakers</span> and{" "}
            <span className="font-semibold">industry</span> leaders who will
            inspire and enlighten at the conference.
          </p>

          {/* Button */}
           <a href="/LandingPage">
          <button className="mt-6 w-60 text-2xl inline-center flex gap-9 px-6 py-5 rounded-full bg-white text-black font-medium hover:bg-purple-400 transition cursor-pointer">
            Buy Ticket
            <span className="bg-purple-600 text-white rounded-2xl text-center p-1">
              <ArrowForwardIosRoundedIcon size={18} />
            </span>
          </button>

          </a>
        </div>
      </div>
    </div>
    </section>


    <section className="bg-gradient-to-b from-purple-700 to-purple-900 min-h-screen flex flex-col items-center justify-center py-12 px-4">
      <div className="text-center max-w-4xl">
        <h2 className="text-6xl font-bold m-8 py-6 text-yellow-300 mb-2">Pricing For Tickets</h2>
        <p className="text-gray-200 mb-10 text-4xl p-9">
          Explore our lineup of keynote speakers and industry leaders who will inspire and enlighten at the conference.
        </p>

        <div className="flex flex-col md:flex-row gap-8 justify-center h-100px">
          {pricingData.map((plan, index) => (
            <div
              key={index}
              className="bg-purple-600 rounded-3xl shadow-2xl p-8 w-full md:w-96 transform transition-transform duration-500 hover:scale-105 hover:shadow-3xl h-[800px] flex flex-col justify-between"
            >
              <div className="flex flex-col flex-grow mt-8 ">
                <span className="uppercase text-gray-200 text-4xl font-semibold">{plan.title}</span>
                <h3 className="text-5xl font-bold text-yellow-300 my-4">${plan.price}</h3>
                <p className="mb-6 text-gray-200 text-2xl">Get a seat</p>

                <ul className="space-y-3 mb-6 text-sm flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span className="text-yellow-300 text-lg">✦</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                 
                <a href="/LandingPage"  target="_blank" rel="noopener noreferrer" className="w-full">
                  <button className="w-full  bg-white text-purple-700 font-bold rounded-full py-3 hover:bg-yellow-300 hover:text-purple-900 transition-all duration-300">
                    Buy Ticket
                  </button>
                </a>

                   
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* FAQ Section */}
      <section className="flex-grow py-20 px-4">
        <h2 className="text-5xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-4 py-3 text-left hover:bg-gray-900 transition-colors duration-300"
              >
                <span>{faq}</span>
                <span className="text-3xl">{openIndex === index ? "−" : "+"}</span>
              </button>

              {/* Animated Accordion */}
              <div
                className={`px-4 overflow-hidden transition-[max-height] duration-500 ease-in-out text-gray-400 text-sm`}
                style={{
                  maxHeight: openIndex === index ? "200px" : "0px",
                }}
              >
                <p className="py-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  facilisi. Curabitur non neque id urna venenatis bibendum.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-purple-700 text-white py-10 px-6 mt-auto">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-2">Summitra</h3>
            <p className="text-xl text-gray-200 max-w-sm mb-5 ">
              Thank you for exploring our world through the lens. From everyday
              stories and moments to unveiling the beauty of the everyday.
            </p>
            
          </div>
          <div className="flex flex-row items-center md:items-end gap-9">
            <span
             className=" rounded-full transition px-10 mt-1.5  py-1 text-3xl text-white border border-white/30 shadow-md">
              August 20
            </span>

            <p className="text-yellow-300 font-semibold text-2xl">
              Largest 2025 IT Conference.
            </p>
          </div>
        </div>
        <div className="border-t border-purple-500 mt-8 pt-4 flex flex-col md:flex-row justify-between text-2xl text-gray-200 gap-2">
          <div className="flex gap-4">
            <a href="#" className="hover:text-yellow-300">
              Styleguide
            </a>
            <a href="#" className="hover:text-yellow-300">
              Instructions
            </a>
            <a href="#" className="hover:text-yellow-300">
              Licenses
            </a>
            <a href="#" className="hover:text-yellow-300">
              Changelog
            </a>
            <a href="#" className="hover:text-yellow-300">
              404
            </a>
          </div>
          <p className="text-gray-300">
            Design by Summitra – Powered by Webflow
          </p>
        </div>
      </footer>
    </div>
  </div>
  );
};

export default ConferencePage;
