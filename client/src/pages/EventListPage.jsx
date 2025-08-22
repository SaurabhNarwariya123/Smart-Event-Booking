import React, { useMemo, useState } from "react";
import { useEvents } from "../context/EventContext";
import EventCard from "../components/EventCard";
import SearchFilter from "../components/SearchFilter";

const EventListPage = () => {
  
  const { events } = useEvents();
  const [filters, setFilters] = useState({ q: "", location: "", date: "" });

  const locations = useMemo(() => [...new Set(events.map((e) => e.location))], [events]);

  const filtered = useMemo(
    () =>
      events.filter((e) => {
        const byQ = !filters.q || e.title.toLowerCase().includes(filters.q.toLowerCase());
        const byLoc = !filters.location || e.location === filters.location;
        const byDate = !filters.date || e.date === filters.date;
        return byQ && byLoc && byDate;
      }),
    [events, filters]
  );

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-4">Find Events</h1>
      <SearchFilter filters={filters} onChange={setFilters} locations={locations} />

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.length > 0 ? filtered.map((ev) => <EventCard key={ev._id} event={ev} />) : <p>No events found.</p>}
      </div>
    </div>
  );
};

export default EventListPage;
