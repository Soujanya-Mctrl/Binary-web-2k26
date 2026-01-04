import ScrollFlipCard from "./components/ScrollFlipCard";
import Tracks from "./components/Tracks";
import Mentors from "./components/Mentors";
import Timeline from "./components/Timeline";
import AboutSection from "./components/AboutSection";

export default function Home() {
  return (
    <>
      <h1 className="text-white">Binary 2k26</h1>

      <ScrollFlipCard />
      <Timeline />

      <section className="h-screen bg-black flex items-center justify-center z-100">
        <AboutSection />
      </section>
      <Tracks />
      <Mentors />
    </>
  );
}
