'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Button from "../Button";
import { FormationModal } from '../modals/FormationModal';

type CardFormationProps = {
    id: number,
    icon: string,
    title: string,
    description1: string,
    description2: string,
    titlelist: string,
    itemsList: string[],
    hours: string,
    price: string,
    meal: string
}

export const CardFormation = ({ id, icon, title, description1, description2, titlelist, itemsList, hours, price, meal }: CardFormationProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const formationType = id === 1 ? 'langage_canin' : 'certificat_aptitude';
    return (
        <article key={id} className="border-2 border-brown rounded-sm p-5 lg:w-1/2">
            <header className="flex items-center gap-3 mb-4">
                <Image
                    src={icon}
                    width={50}
                    height={50}
                    quality={100}
                    priority={true}
                    alt={title}
                    className="object-contain animate-pulse"
                />
                <h3 className="text-brown text-2xl font-semibold">{title}</h3>
            </header>
            <p className="text-lg mb-2">{description1}</p>
            <p className="text-lg mb-4">{description2}</p>
            <h4 className="text-lg font-semibold">{titlelist}</h4>
            <ul className="list-disc list-inside text-lg">
                {itemsList.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <div className="border-2 border-brown my-4 w-1/2 mx-auto"></div>
            <div className="flex justify-between">
                <div className="flex flex-col gap-3">
                    <p><span className="font-semibold">Horaire : </span> {hours}</p>
                    <p><span className="font-semibold">Repas : </span>{meal} € / pers. (non obligatoire)</p>
                </div>
                <p className="text-xl font-semibold">{price} € / pers.</p>
            </div>
            <div className="flex justify-center mt-10">
                <Button href="#" onClick={() => setIsModalOpen(true)} variant="secondary">Réserver cette formation</Button>
                <FormationModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    formationType={formationType}
                />
            </div>
        </article>
    )
}