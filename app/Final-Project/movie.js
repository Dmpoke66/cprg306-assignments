"use client";

export default function Movie({ movie, onBack}){
    if (!movie) return null;

    return(
        <div className="p-4">
                <button className="mb-4 bg-purple-600 text-shadow-black px-3 py-1 rounded" onClick={onBack}>
                    Back to List 
                </button>
                <h2 className="text-2xl font-bold mb-2">{movie.title}</h2>
                <p><strong>Release Date: </strong> {movie.release_date}</p>
                <p><strong>Overview: </strong>{movie.overview} </p>
                <p><strong>Rating: </strong> {movie.average_rating}</p>
        </div>
    )
}