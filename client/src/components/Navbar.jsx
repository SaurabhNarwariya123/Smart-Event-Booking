
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-wide">
          EventPortal
        </Link>
        <div className="flex gap-6">
          <NavLink  to="/"
            className={({ isActive }) =>
              `hover:text-yellow-400 ${isActive ? "text-yellow-400 font-semibold" : ""}`}> Home
          </NavLink>

          <NavLink to="/events"
            className={({ isActive }) =>
              `hover:text-yellow-400 ${isActive ? "text-yellow-400 font-semibold" : ""}`} >
            Events
          </NavLink>

          <NavLink
            to="/booking"
            className={({ isActive }) =>
              `hover:text-yellow-400 ${isActive ? "text-yellow-400 font-semibold" : ""}` }>
            Booking
          </NavLink>

          <NavLink
            to="/admin"
            className={({ isActive }) =>
              `hover:text-yellow-400 ${isActive ? "text-yellow-400 font-semibold" : ""}`} >
            Admin
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
