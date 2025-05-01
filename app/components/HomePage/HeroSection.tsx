'use client'

import Image from "next/image";
import Button from "../Button";
import FootprintPath from './FootprintPath';
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
        <section className="bg-brown mt-24 py-16 xl:pb-0">
            <div className="mx-6 lg:mx-28 xl:flex">
                <div className="flex flex-col xl:w-3/4">
                    <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-lora font-semibold">Ensemble, </h2>
                    <h2 className="text-green text-4xl md:text-5xl lg:text-6xl font-lora font-semibold mb-10">sauvons des vies</h2>
                    <div className="relative h-[550px]">
                        <FootprintPath />
                        <Image
                            src="/Elvis.jpg"
                            width={500}
                            height={500}
                            priority={true}
                            quality={100}
                            alt='Elvis'
                            className="w-[300px] h-[300px] object-cover animate-fadeIn-elvis rounded-full"
                        />
                    </div>
                    {/* <div className="relative">
                        <div >
                            <div className="w-full h-full">
                                <Image
                                    src="/Bulle_Elvis.png"
                                    width={550}
                                    height={550}
                                    priority={true}
                                    quality={100}
                                    alt="Bulle texte : Bêêêh, bonjour ami des animaux ! Je m'appelle Elvis, je suis la mascotte de l'association. Ici, on veille sur mes copains à 4 pattes (même ceux à plumes ou écailles)"
                                    className="object-contain absolute z-20 right-[-60px] w-[550px] md:w-[650px] lg:w-[550px] animate-fadeIn-bubble"
                                />
                            </div>
                        </div>
                    </div> */}
                    {/* <div className="relative w-full h-full mx-auto">
                        <Image
                            src="/elvis_parle.png"
                            width={250}
                            height={250}
                            priority={true}
                            quality={100}
                            alt="Elvis"
                            className="object-contain animate-fadeIn-elvis"
                        />

                        <div className="absolute top-4 right-2 sm:right-6 bg-white text-black p-3 rounded-xl shadow-md text-sm sm:text-base w-44 sm:w-60 z-10">
                            <p>
                                Bêêêh bonjour amis des animaux ! Je m’appelle Elvis, je suis la mascotte de
                                l’association... Ici, on veille sur mes copains à 4 pattes (même ceux à plumes ou à écailles)
                            </p>
                            <div className="absolute -bottom-2 right-8 w-0 h-0 border-t-8 border-t-white border-x-8 border-x-transparent"></div>
                        </div>
                    </div> */}


                    <p className="text-white text-lg lg:text-2xl">
                        {`Chiens, chats, NACs, animaux de ferme… Personne n'est laissé de côté !
                    Grâce à cette belle association, nous trouvons des familles aimantes, recevons les soins dont nous avons besoin et surtout… nous avons une seconde chance.
                    Rejoignez-nous pour protéger et sauver encore plus d'animaux !`}</p>
                    <div className="flex flex-col md:flex-row md:gap-14 sm:mx-auto">
                        <Button href="/adopt" variant="primary" className="mt-10">Donnez une seconde chance</Button>
                        <Button href="/help" variant="secondary" className="mt-5 md:mt-10">Je deviens adhérent</Button>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center mt-8 xl:w-1/4">
                    <p className="text-white text-center text-2xl">Depuis le 1er janvier 2025</p>
                    <span ref={counterRef} className="text-green my-2 text-6xl font-bold">
                        {isCounterInView ? count : 0}
                    </span>
                    <p className="text-white text-2xl font-bold">animaux secourus</p>
                    {/* <Image
                        src="/Elvis_Hero_SFPA.webp"
                        width={300}
                        height={300}
                        alt='Logo SFPA'
                        className="hidden md:flex md:mt-5"
                    /> */}
                </div>
            </div>
        </section>
    )
}