'use client';

import { catsAdopt, dogsAdopt } from "@/app/utils/animalsAdopt";
import MiniCardAnimals from "./MiniCardAnimals";
import Carousel from "../Carousel/Carousel";
import { useEffect, useState } from "react";

export default function Adopted() {
    const [adoptedAnimals, setAdoptedAnimals] = useState(() => {
        return [...catsAdopt, ...dogsAdopt].filter(animal => animal.adopt);
    });

    useEffect(() => {
        // Mélange les animaux seulement côté client après le premier rendu
        setAdoptedAnimals(prevAnimals => {
            const shuffled = [...prevAnimals];
            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }
            return shuffled;
        });
    }, []);
    
    const carouselItems = adoptedAnimals.map((animal) => (
        <MiniCardAnimals
            key={animal.id}
            name={animal.name}
            age={animal.age}
            genre={animal.genre}
            image={animal.image}
        />
    ));

    return (
        <section className="flex flex-col mx-6 pt-16 lg:mx-28">
            <h3 className="text-brown text-3xl font-semibold mb-3">Nous avons trouvé une maison</h3>
            <Carousel 
                items={carouselItems}
                itemsToShowDesktop={3}
                itemsToShowTablet={2}
                itemsToShowMobile={1}
                gap={2.5}
            />
        </section>
    );
}