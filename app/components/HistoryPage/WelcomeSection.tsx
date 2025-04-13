'use client'

import { useInView } from "@/app/hooks/useInView";
import Image from "next/image";
import { RefObject, useRef } from "react";
import Button from "../Button";

export default function WelcomeSection() {
    const firstImageRef = useRef<HTMLDivElement>(null);
    const secondImageRef = useRef<HTMLDivElement>(null);
    const isFirstImageInView = useInView({ ref: firstImageRef as RefObject<Element> });
    const isSecondImageInView = useInView({ ref: secondImageRef as RefObject<Element> });

    return (
        <section className="mx-6 pt-16 lg:mx-28">
            <h2 className="text-green text-4xl font-lora font-semibold mb-6 drop-shadow-xl">Bienvenue</h2>
            <h3 className="text-3xl mb-3.5">Nous sommes leur voix. Vous êtes leur espoir.</h3>
            <p className="text-xl mt-3 mb-5 w-[80%]">{`L'association Secours Français Pour Animaux est une association loi 1901 qui a été déclaré en préfecture en décembre 2024.
                Sous le n° W713007887
                Siret : 938 534 476 00016
                Entièrement autonome par rapport à tout autre organisme.`}</p>
            <div className="flex flex-col items-center md:flex-row">
                <div className="flex flex-col md:w-1/2">
                    <p className="text-lg">{`L'association ne compte pas d'employés, mais seulement des personnes solidaires qui œuvrent en faveur des animaux.
                    En devenant bénévoles pour notre association, nous sommes responsables de représenter tous les animaux qui en ont besoin.
                    Devenir adhérent de notre association signifie non seulement nous soutenir dans nos missions, mais aussi apporter
                    son soutien aux animaux en situation de besoin.
                    Nous sommes nouvellement créés et nous ne bénéficions actuellement d'aucune aide publique ni de subvention.
                    Notre objectif est de devenir une association reconnue d'utilité publique, ce qui nécessite votre participation,
                    car il est nécessaire d'avoir 200 membres.`}</p>
                    <Button href="/adopt" variant="secondary" className="w-1/2 mt-5">{`J'adopte`}</Button>
                </div>
                <div
                    ref={firstImageRef}
                    className={`transition-opacity duration-2000 ease-in-out ${isFirstImageInView ? 'opacity-100' : 'opacity-0'}`}
                >
                    <Image
                        src="/Lapin_SFPA.webp"
                        width={500}
                        height={500}
                        priority={true}
                        quality={100}
                        alt='Logo SFPA'
                        className="object-contain rounded-sm mt-5 md:ml-28"
                    />
                </div>
            </div>
            <div className="flex flex-col-reverse items-center md:flex-row mt-7">
                <div
                    ref={secondImageRef}
                    className={`transition-opacity duration-2000 ease-in-out ${isSecondImageInView ? 'opacity-100' : 'opacity-0'}`}
                >
                    <Image
                        src="/Cochondinde_SFPA.webp"
                        width={500}
                        height={500}
                        priority={true}
                        quality={100}
                        alt='Logo SFPA'
                        className="object-contain rounded-sm mt-5 md:mr-28"
                    />
                </div>
                <ul className="text-lg md:w-1/2">
                    <li>{`- Assister les animaux qui sont en détresse, maltraités et/ou abandonnés.`}</li>
                    <li>{`- De l'assistance, de l'aide et du secours aux animaux sous toutes ses formes.`}</li>
                    <li>{`- Mettre en place des conventions avec les communes pour s'occuper des chats errants.`}</li>
                    <li>{`- Des visites pédagogiques sont mises en place pour sensibiliser le public à l'abandon et à la maltraitance animale.`}</li>
                    <li>{`- De mettre à disposition des formations sur le langage canin pour améliorer l'éducation des chiens par leur propriétaire.`}</li>
                    <li>{`- Offrir des assistances occasionnelles aux personnes en situation de difficulté en fonction des ressources financières de l'association.`}</li>
                    <li>{`- Proposer des aides "coup dur" aux personnes hospitalisées ou en cas de décès.`}</li>
                    <li className="mt-5">
                        <Button href="/help" variant="secondary" className="w-1/2">{`Je fais un don`}</Button>
                    </li>
                </ul>
            </div>
        </section>
    )
}













