import AdoptSection from "./components/Home/AdoptSection";
import HelpSection from "./components/Home/HelpSection";
import HeroSection from "./components/Home/HeroSection";
import HistorySection from "./components/Home/HistorySection";
import LPOSection from "./components/Home/LPOSection";


export default function Home() {
  return (
    <main>
      <HeroSection />
      <HistorySection />
      <LPOSection />
      <HelpSection />
      <AdoptSection />
    </main>
  );
}
