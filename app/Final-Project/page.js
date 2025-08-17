"use client"

import {useState, useEffect} from "react";
import MovieList from "./MovieList";
import MovieIdeas from "./MovieIdeas";
import Movie from "./movie";
import MovieSearch from "./MovieSearch";

export default function FinalProjectPage(){
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [loading, setLoading] = useState(true);

    const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

    async function fetchMovies(query = "") {
        setLoading(true);
        try{
            let url = query
            ? `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
            : `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
            
            console.log("Fetching URL:", url);
            
            const res = await fetch(url);
            const data = await res.json()
            console.log("API response", data)
            setMovies(data.results || [])
        } catch (error) {
            console.error("Error fetching movies: ", error)
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchMovies();

    }, []);

    if (loading) return <p className="p-4">Loading movies...</p>

    return(
        <div className="max-w-4xl mx-auto p-4 text-shadow-black">
            <h1 className="text-4xl font-bold mb-4 text-shadow-black">Movie Database</h1>

        {selectedMovie ? (
            <Movie movie={selectedMovie} onBack={() => setSelectedMovie(null)}/>
        ) : (
            <>
                <MovieSearch onSearch={(query) => fetchMovies(query)}/>
                <MovieList movies={movies} onMovieSelect={setSelectedMovie}/>
                <hr className="my-6 border-blue-800"/>
                <MovieIdeas/>    
            </>
        )
        
        }
        </div>

    )
}