'use client';

import Button from "../Button";
import Image from "next/image";
import { usePlausible } from "next-plausible";
import PriceTable from "../PriceTable";

export default function HeroSectionAdopt() {
    const plausible = usePlausible();
    return (
        <section>
            <div className="relative w-full mt-24">
                            <div className="hidden sm:block w-full h-[500px] bg-[url(/Lapin_Adopt.jpg)] bg-fixed bg-center bg-cover bg-no-repeat"></div>
                            <Image
                                src="/Lapin_Adopt.jpg"
                                width={1024}
                                height={500}
                                quality={100}
                                priority={true}
                                alt="Lapin Adopt"
                                className="block sm:hidden w-full h-auto object-cover"
                            />
                        </div>
            <div className="mx-6 pt-16 lg:mx-28">
                <h2 className="text-brown text-4xl font-lora font-semibold">{`Nous attendons notre famille pour la vie !`}</h2>
            </div>
            <p className="text-xl mx-6 pt-8 lg:mx-28">{`L'adoption d'un animal doit être une décision réfléchie, c'est pourquoi, avant toute adoption,
                nous vous prions de compléter un questionnaire. Peu importe si vous êtes en ville, à la campagne,
                en maison ou en appartement, cela n'aura aucun effet sur votre demande, mais nous sommes là pour
                vous aider.Notre engagement est simplement de vous trouver l'animal qui vous convient le mieux
                afin de garantir son bien-être et que vous puissiez passer de belles années.`}</p>
            <div  className="text-xl mx-6 pt-8 lg:mx-28">
                <Button href="/pdf/Dossier_candidature_adoption_chat.pdf" variant="pdf" className="inline-flex gap-2" onClick={() => plausible('download-cat-form')}>
                    <Image
                        src="/icons/file_pdf.svg"
                        width={20}
                        height={20}
                        quality={100}
                        priority={true}
                        alt=""
                    />
                    {`Dossier de candidature d'adoption pour un chat`}
                </Button>
                <Button href="/pdf/Dossier_candidature_adoption_chien.pdf" variant="pdf" className="inline-flex gap-2" onClick={() => plausible('download-dog-form')}>
                    <Image
                        src="/icons/file_pdf.svg"
                        width={20}
                        height={20}
                        quality={100}
                        priority={true}
                        alt=""
                    />
                    {`Dossier de candidature d'adoption pour un chien`}
                </Button>
            </div>
            <p className="mx-6 pt-8 lg:mx-28 text-xl font-bold">! Pour bénéficier de ces tarifs, une adhésion est obligatoire. À partir de 10 € / an.</p>
            <PriceTable className="mx-6 pt-8 lg:mx-28" />
            <p className="text-xl mx-6 pt-6 lg:mx-28">{`Peu importe si vous êtes en ville, à la campagne, en maison ou en appartement, cela n'aura aucun effet sur votre demande,
                 mais nous sommes là pour vous aider.Notre engagement est simplement de vous trouver l'animal qui vous convient le mieux
                afin de garantir son bien-être et que vous puissiez passer de belles années.`}</p>
        </section>
    );
}