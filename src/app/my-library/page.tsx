// app/page.tsx

import React from "react";

interface LibraryItem {
  id: number;
  title: string;
  type: "Anime" | "Manga";
  episodesOrChapters: number;
  status: "Watching" | "Completed" | "Plan to Watch" | "Reading";
  coverUrl: string;
}

const sampleLibrary: LibraryItem[] = [
  {
    id: 1,
    title: "Attack on Titan",
    type: "Anime",
    episodesOrChapters: 75,
    status: "Completed",
    coverUrl: "https://cdn.myanimelist.net/images/anime/10/47347.jpg",
  },
  {
    id: 2,
    title: "One Piece",
    type: "Manga",
    episodesOrChapters: 1050,
    status: "Reading",
    coverUrl: "https://cdn.myanimelist.net/images/manga/3/55379.jpg",
  },
  {
    id: 3,
    title: "Demon Slayer",
    type: "Anime",
    episodesOrChapters: 26,
    status: "Watching",
    coverUrl: "https://cdn.myanimelist.net/images/anime/1286/99889.jpg",
  },
];

export default function MyLibraryPage() {
  return (
    <main className="min-h-screen bg-base-200 p-6">
      <h1 className="text-4xl font-bold mb-8 text-center">My Library</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {sampleLibrary.map((item) => (
          <div
            key={item.id}
            className="card card-compact bg-base-100 shadow-lg hover:shadow-xl transition-shadow"
          >
            <figure>
              <img
                src={item.coverUrl}
                alt={`${item.title} cover`}
                className="w-full h-60 object-cover rounded-t-lg"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.title}</h2>
              <p>
                <strong>Type:</strong> {item.type}
              </p>
              <p>
                <strong>{item.type === "Anime" ? "Episodes" : "Chapters"}:</strong>{" "}
                {item.episodesOrChapters}
              </p>
              <p>
                <strong>Status:</strong>{" "}
                <span
                  className={`badge ${
                    item.status === "Completed"
                      ? "badge-success"
                      : item.status === "Watching" || item.status === "Reading"
                      ? "badge-info"
                      : "badge-warning"
                  }`}
                >
                  {item.status}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
