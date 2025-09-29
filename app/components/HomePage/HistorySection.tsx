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
            <div>
                <h2 className="text-brown text-4xl font-lora font-semibold">{`Marche de l'espoir`}</h2>
                <div className="flex flex-col md:flex-row gap-5 mt-3">
                    <div className="flex flex-col md:w-1/2">
                        <p className="text-xl font-semibold my-4">
                            {`Evenement caritatif du 20 septembre au 20 octobre 2025.`}
                        </p>
                        <p className="text-xl mb-1">
                            {`La Marche de l'Espoir est lancée !`}
                        </p>
                        <p className="text-xl mb-1">
                            {`Marchez contre la maltraitance animale. 1 pas = 1 espoir.`}
                        </p>
                        <p className="text-xl mb-4">
                            {`Inscrivez-vous et devenez leur voix.`}
                        </p>
                        <p className="text-xl mb-9">
                            {`Aujourd'hui, nous vous invitons à nous rejoindre dans une nouvelle bataille : "La Marche de l'Espoir", une marche solidaire pour un avenir sans souffrance.`}
                        </p>
                        <iframe
                            id="haWidget"
                            src="https://www.helloasso.com/associations/secours-francais-pour-animaux/collectes/marche-de-l-espoir/widget-bouton"
                            style={{ width: '100%', height: '70px', border: 'none' }}
                            onLoad={() => {
                                window.addEventListener('message', (e: MessageEvent) => {
                                    // Type assertion for the data structure
                                    const data = e.data as { height?: number };
                                    if (data.height) {
                                        const haWidgetElement = document.getElementById('haWidget') as HTMLIFrameElement;
                                        if (haWidgetElement) {
                                            haWidgetElement.style.height = `${data.height}px`;
                                        }
                                    }
                                });
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="my-12">
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
            <div className="flex flex-col">
                <h2 className="text-brown text-4xl font-lora font-semibold mb-12">Abandon et maltraitance</h2>
                <div className="flex flex-col lg:flex-row gap-20">
                    <div className="flex flex-col items-center">
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
                        <Button href="/pdf/Fiche_signalement_maltraitance.pdf" variant="pdf">Signaler un cas de maltraitance (pdf)</Button>
                    </div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/a71SxWjZPGo?si=k-6a8Y_bEvYAAyp4" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </div>
        </section>
    )
}