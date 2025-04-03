'use client'

import Image from "next/image";
import { useRef, RefObject } from "react";
import { useInView } from "@/app/hooks/useInView";
import Link from "next/link";

export default function LPOSection() {
    const firstImageRef = useRef<HTMLDivElement>(null);
    const secondImageRef = useRef<HTMLDivElement>(null);
    const isFirstImageInView = useInView({ ref: firstImageRef as RefObject<Element> });
    const isSecondImageInView = useInView({ ref: secondImageRef as RefObject<Element> });

    return (
        <section className="mx-6 pt-16 lg:mx-28 flex flex-col 2xl:flex-row 2xl:gap-5">
            <div className="2xl:w-1/2">
                <h2 className="text-brown text-4xl font-lora font-semibold">Nous sommes refuge LPO</h2>
                <p className="text-xl mt-3">{`Un Refuge LPO est un terrain privé (petit ou grand jardin, cour ou balcon…) ou public
                (parc, espace vert, sentier…) sur lequel le propriétaire ou gestionnaire s’engage à
                accueillir, protéger et favoriser la nature. Pour cela, il respecte la Charte des Refuges
                LPO et s’appuie sur les 15 gestes favorables à la biodiversité.`}</p>
                <Link
                    href="https://www.lpo.fr/la-lpo-en-actions/mobilisation-citoyenne/refuges-lpo/les-15-gestes-refuges/mosaique-15-gestes/les-15-gestes-refuges-pour-proteger-la-biodiversite"
                    target="_blank"
                    className="flex gap-2 text-lg mt-3 mb-8 underline underline-offset-4 hover:text-brown">
                    Site officiel du LPO
                    <Image
                        src="/arrow-up-right.svg"
                        width={20}
                        height={20}
                        quality={100}
                        priority={true}
                        alt=''
                        className="object-contain"
                    />
                </Link>
                <p className="text-xl mt-3">{`Cela nous permet, entre autres, de faire une animation de `}
                    <span className="bg-gradient-to-r from-brown to-amber-700 inline-block text-transparent bg-clip-text font-semibold drop-shadow-sm"> construction dun hôtel à insectes </span>
                    {` au mois d'avril 2025.`}</p>
                <Link
                    href="https://www.facebook.com/secours.francais.pour.animaux"
                    target="_blank"
                    className="flex gap-2 text-[#0866FF] text-lg mt-3 mb-8 underline underline-offset-4 hover:text-brown">
                    <Image
                        src="/facebook.svg"
                        width={15}
                        height={15}
                        quality={100}
                        priority={true}
                        alt=''
                        className="object-contain"
                    />
                    Connaitre les prochaines animations
                </Link>
            </div>
            <div className="md:flex md:gap-4 2xl:w-1/2">
                <div
                    ref={firstImageRef}
                    className={`sm:flex sm:flex-row sm:gap-4 sm:mb-8 transition-transform duration-2000 ease-in-out ${isFirstImageInView ? 'rotate-0' : 'rotate-45'}`}
                >
                    <Image
                        src="/Oiseaux_LPO_SFPA.webp"
                        width={400}
                        height={400}
                        quality={100}
                        priority={true}
                        alt='Oiseaux SFPA'
                        className="mt-5 rounded-sm object-contain"
                    />
                </div>
                <div
                    ref={secondImageRef}
                    className={`sm:flex sm:flex-row sm:gap-4 sm:mb-8 transition-transform duration-2000 ease-in-out ${isSecondImageInView ? 'rotate-0' : '-rotate-45'}`}
                >
                    <Image
                        src="/Affiche_LPO_SFPA.webp"
                        width={400}
                        height={400}
                        quality={100}
                        priority={true}
                        alt='Affiche LPO'
                        className="mt-5 rounded-sm object-contain"
                    />
                </div>
            </div>
        </section>
    )
}