import { CardAnimalsAdoptProps } from "../utils/typeCardAnimals";
import Image from "next/image";

export default function MiniCardAnimals({ name, age, genre, image }: CardAnimalsAdoptProps) {
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
            <div className="bg-brown text-white flex flex-col items-center py-3">
                <h3 className="font-lora text-xl font-bold tracking-widest">{name}</h3>
                <div className="bg-green h-1 w-1/4 my-2"></div>
                <p>{age}</p>
                <p>{genre}</p>
            </div>
        </article>
    )
}