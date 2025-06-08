
import Image from "next/image";

export default function HeroSectionTeam() {
    return (
        <section>
            <div className="relative w-full mt-24">
                            <div className="hidden sm:block w-full h-[500px] bg-[url(/Elvis_Team.webp)] bg-fixed bg-center bg-cover bg-no-repeat"></div>
                            <Image
                                src="/Elvis_Team.webp"
                                width={1024}
                                height={500}
                                quality={100}
                                priority={true}
                                alt="Elvis Team"
                                className="block sm:hidden w-full h-auto object-cover"
                            />
                        </div>
            <div className="mx-6 pt-16 lg:mx-28">
                <h2 className="text-brown text-4xl font-lora font-semibold mb-6">{`Les membres de l'association`}</h2>
                
            </div>
        </section>
    );
}