"use client";

import { useState } from "react";

export default function MovieSearch({ onSearch}){
    const [query, setQuery] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(query)
    };

    return(
<form onSubmit={handleSubmit} className="flex space-x-1.5 mb-3">
    <input
    type="text"
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    placeholder="Search movies or actors..."
    className="border rounded px-2 py-1 flex-1"
    />
    <button className="bg-blue-400 text-shadow-black px-3 py-1 rounded" type="submit">
        Search

    </button>

</form>
    );
}