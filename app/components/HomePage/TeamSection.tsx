'use client';

import Button from "../Button";
import { usePlausible } from "next-plausible";

export default function TeamSection() {
    const plausible = usePlausible();
    return (
        <section className="my-14 px-6 pt-16 lg:px-28 flex flex-col md:flex-row md:gap-4 md:relative">
            <div className="bg-[url(/Animaux_homme.webp)] w-1/2 min-h-[600px] bg-fixed bg-top bg-cover rounded-sm"></div>
            <div className="flex flex-col bg-brown rounded-sm p-9 md:absolute top-1/2 left-[40%]">
                <h2 className="text-green text-4xl font-lora font-semibold">{`Faites connaissance avec l'équipe`}</h2>
                <p className="text-xl mt-3 mb-5 text-white md:w-[70%]">Rencontrez les personnes passionnées qui travaillent au quotidien pour sauver et protéger les animaux.
                    Découvrez qui nous sommes et pourquoi nous sommes dévoués à cette cause.</p>
                <Button href="/team" variant="secondary" className="w-1/2" onClick={() => plausible('team-button')}>{`L'équipe`}</Button>
            </div>
        </section>
    )
}