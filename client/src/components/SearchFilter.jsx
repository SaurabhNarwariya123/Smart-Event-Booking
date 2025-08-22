import React from "react";

const SearchFilter = ({ filters, onChange, locations }) => {
  return (
    <div className="bg-white/70 backdrop-blur-sm p-4 rounded-2xl shadow-sm grid grid-cols-1 md:grid-cols-3 gap-4">
      <input type="text"  value={filters.q}
        onChange={(e) => onChange({ ...filters, q: e.target.value })}
        placeholder="Search by event name…"
        className="w-full rounded-xl border border-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"/>

      <select value={filters.location}
        onChange={(e) => onChange({ ...filters, location: e.target.value })}
        className="w-full rounded-xl border border-gray-200 px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500">
        <option value="">All Locations</option>
        {locations.map((loc) => (
          <option key={loc} value={loc}>
            {loc}
          </option>
        ))}
      </select>
      <input  type="date"  value={filters.date}
        onChange={(e) => onChange({ ...filters, date: e.target.value })}
        className="w-full rounded-xl border border-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
    </div>
  );
};

export default SearchFilter;
