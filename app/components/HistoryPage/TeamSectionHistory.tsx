import Image from "next/image";
import Button from "../Button";

export default function TeamSectionHistory() {
    return (
        <section className="mx-6 pb-[200px] md:pb-[870px] lg:pb-[750px] xl:pb-[450px] pt-16 lg:mx-28 relative">
            <h2 className="text-green text-4xl font-lora font-semibold mb-6 drop-shadow-xl">{`Un mot sur l'équipe`}</h2>
            <div className="bg-[url(/Animaux_homme.webp)] w-3/4 min-h-[600px] bg-fixed bg-top bg-cover rounded-sm"></div>
            <div className="flex flex-col bg-brown rounded-sm p-9 md:absolute top-1/2 left-[40%]">
                <h2 className="text-green text-4xl font-lora font-semibold">{`Les bénevoles`}</h2>
                <p className="text-xl mt-3 mb-5 text-white md:w-[70%]">Notre équipe est composée de bénévoles dévoués, de vétérinaires partenaires, de familles d’accueil et d’adhérents engagés.</p>
                <ul className="text-white flex flex-col">
                    <li>{`Notre structure :`}</li>
                    <li className="inline-flex gap-2">
                        <Image
                            src="/icons/check-solid.svg"
                            width={20}
                            height={20}
                            priority={true}
                            quality={100}
                            alt=""
                        />
                        {`Fondatrice de l’association : Nanou`}</li>
                    <li className="inline-flex gap-2">
                        <Image
                            src="/icons/check-solid.svg"
                            width={20}
                            height={20}
                            priority={true}
                            quality={100}
                            alt=""
                        />
                        {`Présidente de l’association : Kim`}</li>
                    <li className="inline-flex gap-2">
                        <Image
                            src="/icons/check-solid.svg"
                            width={20}
                            height={20}
                            priority={true}
                            quality={100}
                            alt=""
                        />
                        {`Responsable des sauvetages & interventions : Nanou et Kim`}</li>
                    <li className="inline-flex gap-2">
                        <Image
                            src="/icons/check-solid.svg"
                            width={20}
                            height={20}
                            priority={true}
                            quality={100}
                            alt=""
                        />
                        {`Chargée de l’adoption et des familles d’accueil : Nanou et Kim`}</li>
                    <li className="inline-flex gap-2">
                        <Image
                            src="/icons/check-solid.svg"
                            width={20}
                            height={20}
                            priority={true}
                            quality={100}
                            alt=""
                        />
                        {`Équipe vétérinaire partenaire : Nicolas Clinique vétérinaire de Pouilly-sous-Charlieu, Clinique vétérinaire de Chauffailles.`}</li>
                    <li className="inline-flex gap-2">
                        <Image
                            src="/icons/check-solid.svg"
                            width={20}
                            height={20}
                            priority={true}
                            quality={100}
                            alt=""
                        />
                        {`Réseau de plus de 20 bénévoles partout en France`}</li>
                </ul>
                <p className="text-white mt-6 mb-3">Nous travaillons également avec des associations partenaires et des municipalités pour renforcer notre impact.
                    Chaque personne impliquée dans Secours Français pour Animaux partage la même mission : protéger ceux qui ne peuvent pas se défendre.</p>
                <Button href="/team" variant="secondary" className="w-1/2">{`L'équipe`}</Button>
            </div>
        </section>
    )
}
