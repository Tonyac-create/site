import Image from "next/image";
import Button from "../Button";

export default function HelpSection() {
    return (
        <section className="relative h-[1500px] md:h-[1400px] lg:h-[900px] xl:h-[750px] mt-14 px-6 pt-16 bg-gradient-to-br from-[#55AA66] to-[#9DE566] pattern lg:px-28">
            <h2 className="text-brown text-4xl font-lora font-semibold">Comment vous pouvez nous aider ?</h2>
            <div className="flex flex-col items-center lg:flex-row md:gap-4">
                <Image
                    src="/Chat_Help_SFPA.webp"
                    width={200}
                    height={300}
                    quality={100}
                    priority={true}
                    alt='Chat'
                    className="mt-5 rounded-sm object-contain drop-shadow-help"
                />
                <div className="flex flex-col my-8">
                    <p className="text-xl mt-3 mb-5 text-black md:w-[70%] mx-auto">
                        {`Rejoignez-nous dès aujourd’hui pour offrir un avenir meilleur aux animaux en détresse.
                        Chaque jour, des milliers d’animaux souffrent de l’abandon, de la maltraitance et du manque de soins.
                        `}
                    </p>
                    <p className="text-xl mt-3 mb-5 text-black md:w-[70%] mx-auto">
                        {` Mais ensemble, nous pouvons changer leur destin.
                        En apportant votre soutien, vous offrez à ces êtres vulnérables une seconde chance : un refuge sûr, des soins adaptés et surtout, l’amour qu’ils méritent.  
                        Ne restons pas spectateurs. Agissez dès maintenant et faites la différence !`}
                    </p>
                    <Button href="/help" variant="primary" className="w-1/2 mx-auto">{`Je fais un don`}</Button>
                </div>
                <Image
                    src="/Chien_Help_3_SFPA.jpg"
                    width={200}
                    height={300}
                    quality={100}
                    priority={true}
                    alt='Chien'
                    className="mt-5 rounded-sm object-contain drop-shadow-help"
                />
            </div>
        </section>
    )
}