'use client';

import Image from "next/image"
import { CardPartnersProps } from "../types/typeCardPartners"
import Link from "next/link"
import { usePlausible } from "next-plausible";

export default function CardPartners({ id, name, url, image }: CardPartnersProps) {
    const plausible = usePlausible();
    return (
        <article key={id} className="flex flex-col justify-center items-center gap-4 text-center">
            <Link href={url} target="_blank" title="Voir le site" onClick={() => plausible('partner-click', { props: { name } })}>
                <Image
                    src={image}
                    width={100}
                    height={100}
                    quality={100}
                    priority={true}
                    alt={name}
                    className="mt-5 object-contain w-[150px] h-[100px]"
                />
            </Link>
            <h3>{name}</h3>
        </article>
    )
}