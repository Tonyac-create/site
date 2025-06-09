'use client'

import Image from "next/image";
import Button from "../Button";
import FootprintPath from './FootprintPath';
import { useRef } from "react";
import { useCounter } from "@/app/hooks/useCounter";
import { useInView } from "@/app/hooks/useInView";
import { usePlausible } from "next-plausible";

export default function HeroSection() {
    const counterRef = useRef<HTMLSpanElement>(null);
    const isCounterInView = useInView({ ref: counterRef });
    const plausible = usePlausible();

    const immediateCount = useCounter({
        end: 42,
        start: 0,
        duration: 2000,
        shouldStart: true
    });

    const scrollCount = useCounter({
        end: 18,
        start: 0,
        duration: 2000,
        shouldStart: isCounterInView
    });

    return (
        <section className="bg-brown mt-24 py-16 xl:pb-0">
            <div className="mx-6 lg:mx-28 xl:flex">
                <div className="flex flex-col xl:mx-auto">
                    <div className="flex flex-col lg:flex-row lg:gap-14">
                        <div>
                            <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-lora font-semibold">Ensemble, </h2>
                            <h2 className="text-green text-4xl md:text-5xl lg:text-6xl font-lora font-semibold mb-10">sauvons des vies</h2>
                        </div>
                        <div className="hidden lg:flex lg:flex-col lg:justify-center lg:items-center lg:mx-auto">
                            <p className="text-white text-center text-2xl">Depuis le 1er janvier 2025</p>
                            <span className="text-green my-2 text-6xl font-bold">
                                {immediateCount}
                            </span>
                            <p className="text-white text-2xl font-bold">animaux secourus</p>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row-reverse lg:gap-14">
                        <div className="relative h-[500px] max-w-[550px] mx-auto">
                            <FootprintPath />

                            <Image
                                src="/Elvis.jpg"
                                width={500}
                                height={500}
                                priority={true}
                                quality={100}
                                alt='Elvis'
                                className="relative -bottom-12 w-[300px] h-[300px] sm:w-[300px] sm:h-[300px] object-cover rounded-full mx-auto"
                            />

                            <div className="absolute top-3 right-2 sm:-right-1/3 bg-white text-black p-3 font-bold rounded-4xl shadow-md text-sm sm:text-base w-44 sm:w-60 z-10 opacity-0 animate-pop">
                                <p>
                                    Bêêêh bonjour amis des animaux ! Je m’appelle Elvis, je suis la mascotte de l’association...
                                </p>
                                <div className="absolute -bottom-2 left-8 w-0 h-0 border-t-8 border-t-white border-x-8 border-x-transparent"></div>
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <p className="text-white text-lg lg:text-2xl">
                                {`Chiens, chats, NACs, animaux de ferme… Personne n'est laissé de côté !
                            Grâce à cette belle association, nous trouvons des familles aimantes, recevons les soins dont nous avons besoin et surtout… nous avons une seconde chance.
                            Rejoignez-nous pour protéger et sauver encore plus d'animaux !`}</p>
                            <div className="flex flex-col gap-5 mx-6 sm:flex-row sm:gap-10 sm:justify-center lg:flex-col lg:gap-5">
                                <Button href="/adopt" variant="primary" className="w-full sm:w-1/2 lg:w-full xl:w-[60%] mt-10" onClick={() => plausible('adopt')}>Donnez une seconde chance</Button>
                                <Button href="/help" variant="secondary" className="w-full sm:w-1/2 lg:w-full xl:w-[60%] sm:mt-10 lg:mt-0" onClick={() => plausible('help')}>Je deviens adhérent</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center mt-8 xl:w-1/4 lg:hidden">
                    <p className="text-white text-center text-2xl">Depuis le 1er janvier 2025</p>
                    <span ref={counterRef} className="text-green my-2 text-6xl font-bold">
                        {isCounterInView ? scrollCount : 0}
                    </span>
                    <p className="text-white text-2xl font-bold">animaux secourus</p>

                </div>
            </div>
        </section>
    )
}