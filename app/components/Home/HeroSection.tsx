'use client'

import Image from "next/image";
import Button from "../Button";
import { RefObject, useRef } from "react";
import { useCounter } from "@/app/hooks/useCounter";
import { useInView } from "@/app/hooks/useInView";

export default function HeroSection() {
    const counterRef = useRef<HTMLSpanElement>(null);
    const isCounterInView = useInView({ ref: counterRef as RefObject<Element> });

    const count = useCounter({
        end: 18,
        start: 0,
        duration: 2000,
        shouldStart: isCounterInView
    });

    return (
        <section className="bg-brown mt-24 py-24">
            <div className="mx-6 lg:ml-28">
                <div className="md:flex md:flex-row">
                    <div className="flex flex-col">
                        <h2 className="text-white text-4xl lg:text-6xl font-lora font-semibold">Ensemble, </h2>
                        <h2 className="text-green text-4xl lg:text-6xl font-lora font-semibold">sauvons des vies</h2>
                    </div>
                    <Image
                        src="/Elvis_FondTransparent.webp"
                        width={200}
                        height={200}
                        alt='Logo SFPA'
                        className="mt-5 md:ml-28 xl:hidden"
                    />
                </div>
                <div className="flex flex-col xl:flex-row">
                    <p className="text-white text-lg lg:text-2xl mt-5 xl:w-1/2">
                        <span className="italic">Bêêêh bonjour, amis des animaux !</span> {`Je suis Elvis, le bouc mascotte de Secours Français pour Animaux.
                    Ici, on veille sur mes copains à quatre pattes (et même ceux à plumes ou à écailles !).
                    Chiens, chats, NACs, animaux de ferme… Personne n'est laissé de côté !
                    Grâce à cette belle association, nous trouvons des familles aimantes, recevons les soins dont nous avons besoin et surtout… nous avons une seconde chance.
                    Rejoignez-nous pour protéger et sauver encore plus d'animaux !`}</p>
                    <div className="flex flex-col items-center ml-24">
                        <Image
                            src="/Elvis_FondTransparent.webp"
                            width={400}
                            height={400}
                            alt='Logo SFPA'
                            className="mt-5 hidden xl:flex xl:mt-0"
                        />
                        <div className="flex flex-col justify-center items-center mt-8 xl:hidden">
                            <p className="text-white text-2xl">Depuis le 1er janvier 2025</p>
                            <span ref={counterRef} className="text-green text-5xl font-bold">
                                {isCounterInView ? count : 0}
                            </span>
                            <p className="text-white text-2xl font-bold">animaux secourus</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center sm:flex-row gap-5 xl:gap-7 mt-10">
                    <Button href="/adopt" variant="primary" className="mt-5">Donnez une seconde chance</Button>
                    <Button href="/adopt" variant="secondary" className="mt-5">Je deviens adhérent</Button>
                    <div className="xl:flex xl:flex-col xl:justify-center xl:items-center xl:ml-28">
                        <p className="text-white text-2xl">Depuis le 1er janvier 2025</p>
                        <span ref={counterRef} className="text-green text-5xl font-bold">
                            {isCounterInView ? count : 0}
                        </span>
                        <p className="text-white text-2xl font-bold">animaux secourus</p>
                    </div>
                </div>
            </div>
        </section>
    )
}