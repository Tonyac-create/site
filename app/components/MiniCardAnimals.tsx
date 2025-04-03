'use client';

import Image from "next/image";

interface MiniCardAnimalsProps {
    image: string;
    name: string;
    age: string;
    genre: string;
    introduction?: string; // Optional property
}

export default function MiniCardAnimals({ image, name, age, genre, introduction }: MiniCardAnimalsProps) {
    return (
        <article className="w-[300px]">
            <div className="h-[400px] relative">
                <Image
                    src={image}
                    fill
                    quality={100}
                    priority={true}
                    alt={name}
                    className="mt-5 rounded-t-2xl object-cover"
                />
            </div>
            <div className="bg-brown text-white flex flex-col items-center py-3 rounded-b-2xl">
                <h3 className="font-lora text-xl font-bold tracking-widest pt-3">{name}</h3>
                <div className="bg-green h-1 w-1/4 my-2"></div>
                <p>{age}</p>
                <p>{genre}</p>
                {introduction && (
                    <p className="text-sm px-4 mt-4 whitespace-pre-line">
                        {introduction}
                    </p>
                )}
            </div>
        </article>
    );
}