'use client'

import { useState } from 'react';
import { Animal } from '@/app/types/animal';
import MiniCardAnimals from './MiniCardAnimals';
import DetailsAnimalSection from './DetailsAnimalSection';
import { catsAdopt, dogsAdopt } from "@/app/utils/animalsAdopt";

export default function AdoptAnimalSection() {
    const [selectedAnimal, setSelectedAnimal] = useState<Animal | null>(null);
    const animals = [...catsAdopt, ...dogsAdopt].filter(animal => !animal.adopt);

    if (selectedAnimal) {
        return (
            <DetailsAnimalSection 
                animal={selectedAnimal} 
                onBack={() => setSelectedAnimal(null)} 
            />
        );
    }

    return (
        <section className="mx-6 pt-16 lg:mx-28">
            <h2 className="text-brown text-4xl font-lora font-semibold mb-12">Nos animaux à adopter</h2>
            <div className="flex flex-wrap gap-8">
                {animals.map((animal) => (
                    <div key={animal.id} onClick={() => setSelectedAnimal(animal)}>
                        <MiniCardAnimals
                            image={animal.image}
                            name={animal.name}
                            age={animal.age}
                            genre={animal.genre}
                            introduction={animal.introduction}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}