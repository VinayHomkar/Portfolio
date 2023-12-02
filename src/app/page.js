import Image from "next/image";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import AboutSection from "./Components/AboutSection";
import ProjectsSection from "./Components/ProjectsSection";
import EmailSection from "./Components/EmailSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <Navbar />
      <div className="container px-12 py-4 mx-auto mt-24 ">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
    </main>
  );
}
