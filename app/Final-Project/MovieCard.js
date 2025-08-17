"use client";

export default function MovieCard({ movie, onSelect }){
    return (
<div
    className="border rounded-2xl p-5 bg-orange-600 text-shadow-black cursor-pointer
    hover:bg-orange-800 transition"
    onClick={() => onSelect(movie)}
>

</div>
    );
}