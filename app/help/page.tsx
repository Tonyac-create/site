import { DonationForm } from "../components/forms/DonationForm";
import HeroSectionHelp from "../components/HelpPage/HeroSectionHelp";
import WhyHelpSection from "../components/HelpPage/WhyHelpSection";
import FoodSection from "../components/HelpPage/FoodSection";

export default function HelpPage() {
    return (
        <main>
            <HeroSectionHelp />
            <WhyHelpSection />
            <FoodSection />
            <DonationForm />
        </main>
    )
}