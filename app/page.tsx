import AdoptSection from "./components/HomePage/AdoptSection";
import BlogSection from "./components/HomePage/BlogSection";
import HelpSection from "./components/HomePage/HelpSection";
import HeroSection from "./components/HomePage/HeroSection";
import HistorySection from "./components/HomePage/HistorySection";
import LPOSection from "./components/HomePage/LPOSection";
import TeamSection from "./components/HomePage/TeamSection";
import PartnersSection from "./components/PartnersSection";
import PlausibleProvider from "next-plausible";

export default function Home() {
  return (
    <PlausibleProvider domain="sfpa71.fr">
      <main>
        <HeroSection />
        <HistorySection />
        <LPOSection />
        <HelpSection />
        <AdoptSection />
        <TeamSection />
        <BlogSection />
        <PartnersSection />
      </main>
    </PlausibleProvider>
  );
}
