import Image from "next/image";
import { CardAnimalsAdoptProps } from "../../utils/typeCardAnimals";
import Button from "../Button";

export default function CardAnimalsAdopt({ name, type, age, genre, race, image, introduction, description, adopt }: CardAnimalsAdoptProps) {
    return (
        <article className="flex flex-col lg:flex-row justify-center gap-4">
            <div className="w-1/2">
                <Image
                    src={image}
                    width={400}
                    height={300}
                    quality={100}
                    priority={true}
                    alt={name}
                    className="mt-5 rounded-sm object-contain"
                />
            </div>
            <div className="w-1/2 text-lg">
                <h3 className="font-lora text-xl font-bold tracking-widest pt-3">{name}</h3>
                <div className="bg-green h-1 w-1/4 my-2"></div>
                {/* <p>{type}</p> */}
                <p>{age}</p>
                <p>{genre}</p>
                <p className="mb-5">{race}</p>
                <p className="mb-4">{introduction}</p>
                {
                    adopt ?
                        <span className="bg-brown text-green rounded-xl px-4 py-2 font-medium">Adopté(e)</span> :
                        <span>{description}</span>
                }
                {!adopt && <p className="my-4 font-semibold">Venez me rencontrer, rdv au 06 69 97 76 41</p>}
                {
                    !adopt && (
                        type === "Chat" ? (
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
                        ) : (
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
                        )
                    )
                }
            </div>
        </article>
    )
}