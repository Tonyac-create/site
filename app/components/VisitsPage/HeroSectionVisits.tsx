import Image from "next/image";

export default function HeroSectionVisits() {

    return (
        <section>
            <div className="relative w-full mt-24">
                            <div className="hidden sm:block w-full h-[500px] bg-[url(/Kim_poules.jpg)] bg-fixed bg-center bg-cover bg-no-repeat"></div>
                            <Image
                                src="/Kim_poules.jpg"
                                width={1024}
                                height={500}
                                quality={100}
                                priority={true}
                                alt="cochon poules"
                                className="block sm:hidden w-full h-auto object-cover"
                            />
                        </div>
            {/* <div className="bg-[url(/cochon_poules.webp)] w-full h-[600px] bg-fixed bg-center bg-cover"></div> */}
            <div className="mx-6 pt-16 lg:mx-28">
                <h2 className="text-brown text-4xl font-lora font-semibold mb-6">Les visites pédagogiques</h2>
                <p className="text-xl mt-3 mb-5 w-[80%]">🐾 Organisez votre visite en quelques clics !</p>
                <p className="text-xl mt-3 mb-5 w-[80%]">Pour venir à la rencontre de nos protégés, tout se gère désormais en ligne pour simplifier la gestion de nos bénévoles.</p>
                <p className="text-xl mt-3 w-[80%]">{`Ici, chacun vit une véritable rencontre avec le monde animal.`}</p>
                <p className="text-xl w-[80%]">{`Notre association est un lieu de découverte et de sensibilisation au respect et au bien-être animal dès le plus jeune âge.`}</p>
                <p className="text-xl mb-2 w-[80%]">{`Un espace ouvert à tous, où l'on apprend à observer, écouter, comprendre... et surtout à développer l'empathie et le respect du vivant.`}</p>
                <p className="text-xl w-[80%]">{`Au fil de la visite, vous rencontrerez nos pensionnaires: cochons d'Inde, oiseaux, boucs, cochons, canards, poules, lapins... Nos animaux apprécient les câlins et les caresses, dans le respect de leur rythme. Grâce au récit pédagogiques de votre guide, les enfants deviennent incollables sur :`}</p>
                <ul className="text-xl list-disc ml-8">
                    <li>ce que mangent les animaux</li>
                    <li>leur environnement</li>
                    <li>leurs habitudes</li>
                    <li>leurs cris</li>
                    <li>{`leurs besoins et leurs manières de prendre soin d'eux`}</li>
                </ul>
                <p className="text-xl mt-3 mb-5 w-[80%]">1. <strong>Choisissez votre créneau</strong> sur Calendly, vous accéderez directement à notre calendrier pour choisir votre jour et heure. Vous serez redirigé sur HelloAsso pour valider définitivement votre réservation.</p>
                <p className="text-xl mt-3 mb-5 w-[80%]">2. <strong>Choisissez et réglez votre visite</strong> sur HelloAsso</p>
                <h2 className="text-brown text-2xl font-lora font-semibold mb-6">Visites de groupe</h2>
                <p className="text-xl mt-3 mb-1 w-[80%]">Ecole, centres aérés, structures spécalisées, associations...</p>
                <p className="text-xl w-[80%]">Tarif sur demande (selon effectif, ala durée et les activités souhaitées)</p>
                <p className="text-xl mt-3 w-[80%]">Tél: 06 69 97 76 41. Email : secoursfrancaispouranimaux@sfpa71.fr</p>
            </div>
        </section>
    );
}