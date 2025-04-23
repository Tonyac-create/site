import { DonationForm } from "../components/forms/DonationForm";
import HeroSectionHelp from "../components/HelpPage/HeroSectionHelp";
import InvestigationSection from "../components/HelpPage/InvestigationSection";
import WhyHelpSection from "../components/HelpPage/WhyHelpSection";

export default function HelpPage() {
    return (
        <main>
            <HeroSectionHelp />
            <InvestigationSection />
            <WhyHelpSection />
            <DonationForm />
        </main>
    )
}