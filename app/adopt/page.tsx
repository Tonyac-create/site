import Adopt from "../components/AdoptPage/AdoptAnimalSection";
import Adopted from "../components/AdoptPage/AdoptedAnimalSection";
import HeroSectionAdopt from "../components/AdoptPage/HeroSectionAdopt";

export default function AdoptPage() {
    return (
        <main>
            <HeroSectionAdopt />
            <Adopt />
            <Adopted />
        </main>
    )
}