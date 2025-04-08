import { DonationForm } from "../components/forms/DonationForm";
import HeroSectionHelp from "../components/HelpPage/HeroSectionHelp";
import WhyHelpSection from "../components/HelpPage/WhyHelpSection";

export default function HelpPage() {
    return (
        <main>
            <HeroSectionHelp />
            <WhyHelpSection />
            <DonationForm />
        </main>
    )
}