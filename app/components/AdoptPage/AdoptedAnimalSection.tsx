'use client'

import { useState } from 'react';
import { Animal } from '@/app/types/animal';
import MiniCardAnimals from './MiniCardAnimals';
import DetailsAnimalSection from './DetailsAnimalSection';
import { catsAdopt, dogsAdopt } from "@/app/utils/animalsAdopt";
import Carousel from "../Carousel/Carousel";

export default function AdoptedAnimalSection() {
    const [selectedAnimal, setSelectedAnimal] = useState<Animal | null>(null);
    const adoptedAnimals = [...catsAdopt, ...dogsAdopt].filter(animal => animal.adopt);

    if (selectedAnimal) {
        return (
            <DetailsAnimalSection 
                animal={selectedAnimal} 
                onBack={() => setSelectedAnimal(null)} 
            />
        );
    }

    const carouselItems = adoptedAnimals.map((animal) => (
        <div key={animal.id} onClick={() => setSelectedAnimal(animal)}>
            <MiniCardAnimals
                name={animal.name}
                age={animal.age}
                genre={animal.genre}
                image={animal.image}
            />
        </div>
    ));

    return (
        <section className="mx-6 pt-16 lg:mx-28">
            <h2 className="text-brown text-4xl font-lora font-semibold mb-12">Nos animaux adoptés</h2>
            <Carousel items={carouselItems} />
        </section>
    );
}