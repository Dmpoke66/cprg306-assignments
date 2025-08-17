"use client";

import { useState } from "react";

export default function MovieList({ movies, onMovieSelect }) {
    const [sortBy, setSortBy] = useState("title");

    if (!movies || movies.length === 0)
        return <p>No Movies found for your search</p>;

    const sortedMovies = [...movies].sort((a, b) => {
        if (sortBy === "title") {
            return a.title.localeCompare(b.title);
        } else if (sortBy === "release_date") {
            return new Date(a.release_date) - new Date(b.release_date);
        } else if (sortBy === "genre") {
            // Compare first genre id (if exists), fallback to 0
            return (a.genre_ids[0] || 0) - (b.genre_ids[0] || 0);
        }
        return 0;
    });

    return (
        <div>
            <div className="space-x-2">
                <button
                    className="bg-red-600 text-white px-2 py-1 rounded"
                    onClick={() => setSortBy("title")}
                >
                    Title
                </button>
                <button
                    className="bg-red-600 text-white px-2 py-1 rounded"
                    onClick={() => setSortBy("release_date")}
                >
                    Release Date
                </button>
                <button
                    className="bg-red-600 text-white px-2 py-1 rounded"
                    onClick={() => setSortBy("genre")}
                >
                    Genre
                </button>
            </div>

            <ul className="space-y-4 mt-4">
                {sortedMovies.map((movie) => (
                    <li
                        key={movie.id}
                        className="cursor-pointer hover:underline"
                        onClick={() => onMovieSelect(movie)}
                    >
                        {movie.title} ({movie.release_date})
                    </li>
                ))}
            </ul>
        </div>
    );
}
