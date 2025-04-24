// import Image from 'next/image';
import CardAnimalsAdopt from './CardAnimalsAdopt';
import { Animal } from '@/app/types/animal';

interface DetailsAnimalSectionProps {
    animal: Animal;
    onBack: () => void;
}

export default function DetailsAnimalSection({ animal, onBack }: DetailsAnimalSectionProps) {
    return (
        <section className="mx-6 pt-16 lg:mx-28">
            <button 
                onClick={onBack}
                className="flex items-center gap-2 text-brown hover:text-brown/80 mb-8"
            >
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M10 19l-7-7m0 0l7-7m-7 7h18" 
                    />
                </svg>
                Retour
            </button>
            
            <div className="flex justify-center">
                <CardAnimalsAdopt
                    name={animal.name}
                    type={animal.type}
                    age={animal.age}
                    genre={animal.genre}
                    race={animal.race}
                    image={animal.image}
                    introduction={animal.introduction}
                    description={animal.description}
                    adopt={animal.adopt}
                />
            </div>
        </section>
    );
}