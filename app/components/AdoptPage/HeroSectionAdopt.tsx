import Button from "../Button";
import Image from "next/image";

export default function HeroSectionAdopt() {
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
                <Button href="/pdf/Fiche_adoption_chat.pdf" variant="pdf" className="inline-flex gap-2">
                    <Image
                        src="/icons/file_pdf.svg"
                        width={20}
                        height={20}
                        quality={100}
                        priority={true}
                        alt=""
                    />
                    {`Remplir la fiche d'adoption pour un chat`}
                </Button>
                <Button href="/pdf/Fiche_adoption_chien.pdf" variant="pdf" className="inline-flex gap-2">
                    <Image
                        src="/icons/file_pdf.svg"
                        width={20}
                        height={20}
                        quality={100}
                        priority={true}
                        alt=""
                    />
                    {`Remplir la fiche d'adoption pour un chien`}
                </Button>
            </div>
            <p className="text-xl mx-6 pt-6 lg:mx-28"><span className="font-semibold">{`Frais d'adoption : `}</span>Chat : min. 30 € | Chien : min. 50 €</p>
            <p className="text-xl mx-6 pt-6 lg:mx-28"><span className="font-semibold">{`Identification : `}</span>Participation de 50 €(tarif association) à la place de 100€</p>
            <p className="text-xl mx-6 pt-6 lg:mx-28">{`Peu importe si vous êtes en ville, à la campagne, en maison ou en appartement, cela n'aura aucun effet sur votre demande,
                 mais nous sommes là pour vous aider.Notre engagement est simplement de vous trouver l'animal qui vous convient le mieux
                afin de garantir son bien-être et que vous puissiez passer de belles années.`}</p>
        </section>
    );
}