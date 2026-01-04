
import Gallary from "./components/gallary";
import ScrollFlipCard from "./components/ScrollFlipCard";
import Tracks from "./components/Tracks";
import Mentors from "./components/Mentors";
import Timeline from "./components/Timeline";
import AboutSection from "./components/AboutSection";

import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <h1 className="text-white">Binary 2k26</h1>

      <ScrollFlipCard />

      <section className="h-screen bg-black flex items-center justify-center z-100">
        <AboutSection />
      </section>
      <Tracks />
      <Mentors />

      <Timeline />

      <Gallary />
    </>
  );
}
