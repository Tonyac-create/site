import HeroSectionContact from "../components/ContactPage/HeroSectionContact";
import InformationsSection from "../components/ContactPage/InformationsSection";
import { ContactForm } from "../components/forms/ContactForm";

export default function ContactPage() {
    return (
        <main>
            <HeroSectionContact />
            <div className="flex flex-col xl:flex-row gap-8">
                <InformationsSection />
                <ContactForm />
            </div>
        </main>
    )
}