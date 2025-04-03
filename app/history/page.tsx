import HeroSectionHistory from "../components/HistoryPage/HeroSectionHistory";
import TeamSectionHistory from "../components/HistoryPage/TeamSectionHistory";
import WelcomeSection from "../components/HistoryPage/WelcomeSection";

export default function HistoryPage() {
    return (
        <main>
            <HeroSectionHistory />
            <WelcomeSection />
            <TeamSectionHistory />
        </main>
    );
}