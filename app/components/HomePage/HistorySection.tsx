'use client';

import Image from "next/image";
import { useRef } from "react";
import { useInView } from "@/app/hooks/useInView";
import Button from "../Button";
import { usePlausible } from "next-plausible";

export default function HistorySection() {
    const firstImageRef = useRef<HTMLDivElement>(null);
    const secondImageRef = useRef<HTMLDivElement>(null);
    const isFirstImageInView = useInView({ ref: firstImageRef });
    const isSecondImageInView = useInView({ ref: secondImageRef });
    const plausible = usePlausible();
    return (
        <section className="mx-6 pt-16 lg:mx-28">
            <div className="mb-12">
                <h2 className="text-brown text-4xl font-lora font-semibold">Notre histoire </h2>
                <div
                    ref={firstImageRef}
                    className={`sm:flex sm:flex-row sm:gap-4 sm:mb-8 transition-opacity duration-2000 ease-in-out ${isFirstImageInView ? 'opacity-100' : 'opacity-0'}`}
                >
                    <Image
                        src="/Oiseaux_SFPA.webp"
                        width={400}
                        height={300}
                        quality={100}
                        priority={true}
                        alt='Logo SFPA'
                        className="mt-5 rounded-sm object-contain lg:w-1/2"
                    />
                    <div className="flex flex-col justify-center lg:w-1/2">
                        <p className="text-xl mt-3 mb-8">Secours Francais pour Animaux est dédié au sauvetage des animaux en détresse.
                            Nous agissons pour offrir une seconde chance à ces animaux et les aider à trouver un foyer aimant.</p>
                        <Button href="/history" variant="secondary" className="sm:w-[60%]" onClick={() => plausible('history-button')}>{`Découvrir toute l'histoire`}</Button>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="text-brown text-4xl font-lora font-semibold">Nos missions</h2>
                <div
                    ref={secondImageRef}
                    className={`sm:flex sm:flex-row-reverse sm:gap-4 sm:mb-8 transition-opacity duration-2000 ease-in-out ${isSecondImageInView ? 'opacity-100' : 'opacity-0'}`}
                >
                    <Image
                        src="/Elvis_Homme_SFPA.webp"
                        width={500}
                        height={400}
                        quality={100}
                        priority={true}
                        alt='Logo SFPA'
                        className="mt-5 rounded-sm object-contain lg:w-1/2"
                    />
                    <div className="flex flex-col justify-center lg:w-1/2">
                        <p className="text-xl mt-3 mb-8">Nous nous engageons à protéger et accompagner les animaux en détresse à
                            travers des actions concrètes : sauvetage, soins, sensibilisation et éducation.
                            Découvrez comment nous œuvrons chaque jour pour le bien-être des animaux et la transmission de connaissances essentielles.</p>
                        <Button href="/missions" variant="secondary" className="sm:w-[60%]" onClick={() => plausible('missions-button')}>{`Toutes nos actions`}</Button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="flex flex-row justify-center items-center gap-2">
                    <Image
                        src="/icons/SOS.webp"
                        width={100}
                        height={100}
                        priority={true}
                        quality={100}
                        alt='SOS'
                        className="animate-pulse"
                    />
                    <p className="text-2xl">Vous êtes témoin de maltraitance ?</p>
                </div>
                <Button href="/pdf/Signalement_maltraitance.pdf" variant="pdf">Signaler un cas de maltraitance (pdf)</Button>
            </div>
        </section>
    )
}