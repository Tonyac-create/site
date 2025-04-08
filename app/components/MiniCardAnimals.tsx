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
        <article className="w-[300px]">
            <div className="h-[400px] relative">
                <Image
                    src={image}
                    fill
                    sizes="(max-width: 300px)"
                    quality={100}
                    priority={true}
                    alt={name}
                    className="mt-5 object-cover"
                />
            </div>
            <div className="flex flex-col items-center py-3 border-l-2 border-r-2 border-b-2 border-gray-300 rounded-sm">
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