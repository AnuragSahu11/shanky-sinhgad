import Image from "next/image";
import "./page.css";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between main-container">
      <img
        src="/background.svg"
        alt="Vercel Logo"
        className="background-image"
        priority
      />
    </main>
  );
}
