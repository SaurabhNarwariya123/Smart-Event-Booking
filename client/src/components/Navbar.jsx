
// import React from "react";
// import { Link, NavLink } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
//       <div className="container mx-auto flex justify-between items-center">
//         <Link to="/" className="text-2xl font-bold tracking-wide">
//           EventPortal
//         </Link>
//         <div className="flex gap-6">
//           <NavLink  to="/"
//             className={({ isActive }) =>
//               `hover:text-yellow-400 ${isActive ? "text-yellow-400 font-semibold" : ""}`}> Home
//           </NavLink>

//           <NavLink to="/events"
//             className={({ isActive }) =>
//               `hover:text-yellow-400 ${isActive ? "text-yellow-400 font-semibold" : ""}`} >
//             Events
//           </NavLink>

//           <NavLink
//             to="/booking"
//             className={({ isActive }) =>
//               `hover:text-yellow-400 ${isActive ? "text-yellow-400 font-semibold" : ""}` }>
//             Booking
//           </NavLink>

//           <NavLink
//             to="/admin"
//             className={({ isActive }) =>
//               `hover:text-yellow-400 ${isActive ? "text-yellow-400 font-semibold" : ""}`} >
//             Admin
//           </NavLink>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // hamburger & close icon

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wide">
          EventPortal
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-yellow-400 ${isActive ? "text-yellow-400 font-semibold" : ""}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/events"
            className={({ isActive }) =>
              `hover:text-yellow-400 ${isActive ? "text-yellow-400 font-semibold" : ""}`
            }
          >
            Events
          </NavLink>
          <NavLink
            to="/booking/1" // example id
            className={({ isActive }) =>
              `hover:text-yellow-400 ${isActive ? "text-yellow-400 font-semibold" : ""}`
            }
          >
            Booking
          </NavLink>
          <NavLink
            to="/admin"
            className={({ isActive }) =>
              `hover:text-yellow-400 ${isActive ? "text-yellow-400 font-semibold" : ""}`
            }
          >
            Admin
          </NavLink>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 mt-4 bg-gray-800 p-4 rounded-lg">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `block hover:text-yellow-400 ${isActive ? "text-yellow-400 font-semibold" : ""}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/events"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `block hover:text-yellow-400 ${isActive ? "text-yellow-400 font-semibold" : ""}`
            }
          >
            Events
          </NavLink>
          <NavLink
            to="/booking/1"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `block hover:text-yellow-400 ${isActive ? "text-yellow-400 font-semibold" : ""}`
            }
          >
            Booking
          </NavLink>
          <NavLink
            to="/admin"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `block hover:text-yellow-400 ${isActive ? "text-yellow-400 font-semibold" : ""}`
            }
          >
            Admin
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
