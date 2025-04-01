import Image from "next/image";
import Button from "../Button";

export default function HelpSection() {
    return (
        <section className="relative h-[650px] mt-14 px-6 pt-16 bg-gradient-to-br from-[#55AA66] to-[#9DE566] pattern lg:px-28">
            <h2 className="text-brown text-4xl font-lora font-semibold">Comment vous pouvez nous aider ?</h2>
            <div className="flex flex-col md:flex-row md:gap-4">
                <Image
                    src="/Chat_Help_Transparent.png"
                    width={200}
                    height={300}
                    quality={100}
                    priority={true}
                    alt='Chat'
                    className="mt-5 rounded-sm object-contain drop-shadow-cat"
                />
                <div className="flex flex-col my-8">
                    <p className="text-xl mt-3 mb-5 text-black">{`Rejoignez-nous dès aujourd'hui pour offrir un avenir meilleur aux animaux en détresse. Ensemble, nous pouvons leur apporter soins, protection et amour. Agissez maintenant et faites la différence !`}</p>
                    <Button href="/help" variant="primary" className="w-1/2">{`Je fais un don`}</Button>
                </div>
                <Image
                    src="/Chien_Help_Transparent_2.png"
                    width={200}
                    height={300}
                    quality={100}
                    priority={true}
                    alt='Chien'
                    className="mt-5 rounded-sm object-contain drop-shadow-dog"
                />
            </div>
        </section>
    )
}