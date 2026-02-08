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
                <p className="text-xl mt-3 mb-5 w-[80%]">1. <strong>Choisissez votre créneau</strong> sur Calendly, vous accéderez directement à notre calendrier pour choisir votre jour et heure. Vous serez redirigé sur HelloAsso pour valider définitivement votre réservation.</p>
                <p className="text-xl mt-3 mb-5 w-[80%]">2. <strong>Choisissez et réglez votre visite</strong> sur HelloAsso</p>
            </div>
        </section>
    );
}