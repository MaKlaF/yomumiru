import Sidebar from "./components/sidebar";

const dummyReading = [
  { id: 1, title: "One Piece", imageUrl: "https://picsum.photos/200/300?random=1" },
  { id: 2, title: "Chainsaw Man", imageUrl: "https://picsum.photos/200/300?random=2" },
];

const dummyWatching = [
  { id: 3, title: "Attack on Titan", imageUrl: "https://picsum.photos/200/300?random=3" },
  { id: 4, title: "Jujutsu Kaisen", imageUrl: "https://picsum.photos/200/300?random=4" },
];

export default function HomePage() {
  return (
    <main className="flex flex-col md:flex-row">
      <Sidebar readingList={dummyReading} watchingList={dummyWatching} />

      <section className="flex-1 p-4">
        <h1 className="text-2xl font-bold">Welcome to your library</h1>
        {/* Main content here */}
      </section>
    </main>
  );
}
