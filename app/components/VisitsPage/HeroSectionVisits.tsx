import Image from "next/image";

export default function HeroSectionVisits() {

    return (
        <section>
            <div className="relative w-full mt-24">
                            <div className="hidden sm:block w-full h-[500px] bg-[url(/cochon_poules.webp)] bg-fixed bg-center bg-cover bg-no-repeat"></div>
                            <Image
                                src="/cochon_poules.webp"
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
                <p className="text-xl mt-3 mb-5 w-[80%]">Seul, à deux, en famille ou entre amis,
                Partez pour une aventure riche en émotions et en découvertes inoubliables !</p>
            </div>
        </section>
    );
}