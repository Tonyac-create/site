import Image from "next/image";

interface MiniCardAnimalsProps {
    image: string;
    name: string;
    age: string;
    genre: string;
    introduction?: string; // Optional property
}

export default function MiniCardAnimals({ image, name, age, genre, introduction }: MiniCardAnimalsProps) {
    return (
        <article className="w-[300px] bg-white shadow-[6px_6px_16px_rgba(121,85,72,0.2)] group hover:cursor-pointer" title="Voir plus...">
            <div className="h-[400px] relative overflow-hidden">
                <Image
                    src={image}
                    fill
                    quality={100}
                    priority={true}
                    alt={name}
                    className="mt-5 object-cover transition-transform duration-300 group-hover:scale-120"
                />
            </div>
            <div className="flex flex-col items-center py-3 rounded-sm">
                <h3 className="font-lora text-xl font-bold tracking-widest pt-3">{name}</h3>
                <div className="bg-green h-1 w-1/4 my-2"></div>
                <p>{age}</p>
                <p>{genre}</p>
                {introduction && (
                    <p className="text-sm px-8 py-4 mt-4 whitespace-pre-line">
                        {introduction}
                    </p>
                )}
            </div>
        </article>
    );
}