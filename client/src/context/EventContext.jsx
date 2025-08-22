import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const EventContext = createContext();

export const EventProvider = ({ children }) => {

  const API = import.meta.env.VITE_API_URL;

  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get(`${API}/api/events`);
        setEvents(res.data);
      } catch (err) {
        console.error("Error fetching events:", err);
      }
    };
    fetchEvents();
  }, []);

  return (
    <EventContext.Provider value={{ events, setEvents }}>
      {children}
    </EventContext.Provider>
  );
};

export const useEvents = () => useContext(EventContext);
