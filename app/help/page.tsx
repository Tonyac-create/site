import HeroSectionHelp from "../components/HelpPage/HeroSectionHelp";
import WhyHelpSection from "../components/HelpPage/WhyHelpSection";
import FoodSection from "../components/HelpPage/FoodSection";
import HelloAssoSection from "../components/HelpPage/HelloAssoSection";

export default function HelpPage() {
    return (
        <main>
            <HeroSectionHelp />
            <WhyHelpSection />
            <FoodSection />
            <HelloAssoSection />
        </main>
    )
}