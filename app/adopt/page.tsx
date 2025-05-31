import Adopt from "../components/AdoptPage/AdoptAnimalSection";
import Adopted from "../components/AdoptPage/AdoptedAnimalSection";
import HeroSectionAdopt from "../components/AdoptPage/HeroSectionAdopt";
import { Suspense } from 'react';

export default function AdoptPage() {
    return (
        <main>
            <HeroSectionAdopt />
            <Suspense fallback={<div>Chargement...</div>}>
                <Adopt />
            </Suspense>
            <Adopted />
        </main>
    )
}