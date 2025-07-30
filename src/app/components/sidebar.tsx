"use client";

import { useState } from "react";

type MediaItem = {
  id: number;
  title: string;
  imageUrl: string;
};

type Props = {
  readingList: MediaItem[];
  watchingList: MediaItem[];
};

export default function Sidebar({ readingList, watchingList }: Props) {
  const [view, setView] = useState<"reading" | "watching">("reading");

  const list = view === "reading" ? readingList : watchingList;

  return (
    <aside className="w-full md:w-84 h-screen bg-base-100 border-r p-4">
        {/* Toggle */}
        <div className="flex items-center gap-3 mb-4">
            <span className="text-xl font-semibold">
                {view === "reading" ? "Currently Reading" : "Currently Watching"}
            </span>
            <label className="toggle text-base-content">
              <input type="checkbox" value="reading" checked={view === "watching"} onChange={(e) => setView(e.target.checked ? "watching" : "reading")}/>

              <svg aria-label="book" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"></path></g></svg>

              <svg aria-label="television" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z"></path></g></svg>
            </label>
        </div>
        
      {/* <div className="flex justify-between mb-4">
        <button
          className={`btn btn-sm flex-1 mr-1 ${view === "reading" ? "btn-primary" : "btn-outline"}`}
          onClick={() => setView("reading")}
        >
          Manga
        </button>
        <button
          className={`btn btn-sm flex-1 ml-1 ${view === "watching" ? "btn-primary" : "btn-outline"}`}
          onClick={() => setView("watching")}
        >
          Anime
        </button>
      </div> */}

      {/* List */}
      <div className="space-y-2 overflow-y-auto max-h-[calc(100vh-5rem)] pr-1">
        {list.length === 0 ? (
          <p className="text-sm text-gray-500">No titles found.</p>
        ) : (
          list.map((item) => (
            <div key={item.id} className="card card-compact bg-base-200 shadow-sm">
              <figure>
                <img src={item.imageUrl} alt={item.title} className="h-32 w-full object-cover" />
              </figure>
              <div className="card-body p-2">
                <h3 className="text-sm font-semibold truncate">{item.title}</h3>
              </div>
            </div>
          ))
        )}
      </div>
    </aside>
  );
}