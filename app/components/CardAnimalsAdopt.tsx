import Image from "next/image";
import { CardAnimalsAdoptProps } from "../utils/typeCardAnimals";

export default function CardAnimalsAdopt({ name, type, age, genre, race, image, introduction, description, adopt }: CardAnimalsAdoptProps) {
    return (
        <article>
            <Image
                src={image}
                width={300}
                height={400}
                quality={100}
                priority={true}
                alt={name}
                className="mt-5 rounded-sm object-contain"
            />
            <h3>{name}</h3>
            <p>{type}</p>
            <p>{age}</p>
            <p>{genre}</p>
            <p>{race}</p>
            <p>{introduction}</p>
            {
                adopt ?
                    <span>Adopté(e)</span> :
                    <span>{description}</span>
            }
        </article>
    )
}