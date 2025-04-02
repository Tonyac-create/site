import AdoptSection from "./components/Home/AdoptSection";
import BlogSection from "./components/Home/BlogSection";
import HelpSection from "./components/Home/HelpSection";
import HeroSection from "./components/Home/HeroSection";
import HistorySection from "./components/Home/HistorySection";
import LPOSection from "./components/Home/LPOSection";
import TeamSection from "./components/Home/TeamSection";


export default function Home() {
  return (
    <main>
      <HeroSection />
      <HistorySection />
      <LPOSection />
      <HelpSection />
      <AdoptSection />
      <TeamSection />
      <BlogSection />
    </main>
  );
}
