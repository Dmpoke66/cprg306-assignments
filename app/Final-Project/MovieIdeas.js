"use client";

import { useEffect, useState } from "react";

export default function MovieIdeas() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const API_KEY = process.env.NEXT_PUBLIC_TMDB_KEY

    console.log("API KEY", API_KEY)

    async function fetchMovieIdeas() {
        try {
            const resp = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}`);
            const data = await resp.json();
            setMovies(data.results || []);
        } catch (error) {
            console.error("Error fetching movie ideas: ", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchMovieIdeas();
    }, []);

    if (loading) return <p>Loading movies...</p>;

    return (
        <div>
            <h2 className="text-xl font-semibold mb-2">Movie Ideas</h2>
            <ul className="list-disc list-inside space-y-1">
                {movies.map((m) => (
                    <li key={m.id}>{m.title}</li>
                ))}
            </ul>
        </div>
    );
}
