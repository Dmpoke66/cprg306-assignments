import Link from "next/link";

export default function Home() {
  const weeks = [2, 3, 4, 5, 6, 7, 8, 9, 10]; // Add more week numbers as needed

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">CPRG 306: Web Development 2 - Assignments</h1>
      <ul className="list-disc pl-6 space-y-2">
        {weeks.map((week) => (
          <li key={week}>
            <Link href={`/week-${week}`} className="text-blue-600 hover:underline">
              Week {week} Assignment
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
