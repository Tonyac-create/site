import Image from "next/image";

type CardWhyHelpProps = {
    src: string;
    title: string;
    description: string;
}

export default function CardWhyHelp({ src, title, description }: CardWhyHelpProps) {
    return (
        <article className="flex flex-col justify-center items-center gap-4 text-center max-w-72 bg-brown rounded-sm p-5">
            <Image
                src={src}
                width={50}
                height={50}
                quality={100}
                priority={true}
                alt="help"
                className="mt-5 rounded-sm object-contain"
            />
            <h3 className="text-green text-2xl font-semibold">{title}</h3>
            <p className="text-white text-xl">{description}</p>
        </article>
    )
}