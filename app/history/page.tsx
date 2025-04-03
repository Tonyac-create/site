import HeroSectionHistory from "../components/History/HeroSectionHistory";
import TeamSectionHistory from "../components/History/TeamSectionHistory";
import WelcomeSection from "../components/History/WelcomeSection";

export default function HistoryPage() {
    return (
        <main>
            <HeroSectionHistory />
            <WelcomeSection />
            <TeamSectionHistory />
        </main>
    );
}