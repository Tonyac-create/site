'use client';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { useInView } from '@/app/hooks/useInView';
import { Mission, missions } from '@/app/utils/missions';
import Button from '../Button';
import { formations } from '@/app/utils/formations';
import AssuranceForm from '../forms/AssuranceForm';
import { CardFormation } from './CardFormation';
import ArrayFormules from './ArrayFormules';

/**
 * Mission Item component
 * 
 * @param {Mission} mission - Mission object
 * @param {number} index - Index of the mission
 * @returns {JSX.Element} Mission item component
 */
const MissionItem = ({ mission, index, onOpenForm }: { mission: Mission, index: number, onOpenForm: () => void }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView({ ref: ref });

    return (
        <>
            <div
                ref={ref}
                className={`
                flex flex-col md:flex-row items-center md:mb-16 mb-8 gap-8 
                ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}
                transition-all duration-1000 ease-out
                ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
                `}
            >
                <div className="w-full md:w-1/2">
                    <div className="relative aspect-video w-full overflow-hidden">
                        <Image
                            src={mission.imageUrl}
                            alt={mission.title}
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                </div>
                <div className="w-full md:w-1/2 space-y-6">
                    <h2 className="text-3xl font-bold text-brown">{mission.title}</h2>
                    <p className="text-xl text-gray-600">{mission.description}</p>
                    {mission.id === 6 && <ArrayFormules />}
                    {mission.pathBtn ? (
                        <Button
                            onClick={mission.id === 6 ? onOpenForm : undefined}
                            href={mission.id === 6 ? '#' : mission.pathBtn}
                            variant="secondary"
                        >
                            {mission.btn[0]}
                        </Button>
                    ) : mission.pdf ? (
                        <div className='flex flex-col gap-4'>
                            {mission.pdf[0] && (
                                mission.pdf[0].includes('.pdf') ? (
                                    <Button href={mission.pdf[0]} variant="pdf" className="inline-flex gap-2">
                                        <Image
                                            src="/icons/file_pdf.svg"
                                            width={20}
                                            height={20}
                                            quality={100}
                                            priority={true}
                                            alt=""
                                        />
                                        {mission.btn[0]}
                                    </Button>
                                ) : (
                                    <Button
                                        onClick={mission.id === 6 ? onOpenForm : undefined}
                                        href={mission.id !== 6 ? mission.pdf[0] : '#'}
                                        variant="secondary"
                                    >
                                        {mission.btn[0]}
                                    </Button>
                                )
                            )}
                            {mission.pdf[1] && (
                                mission.pdf[1].includes('.pdf') ? (
                                    <Button href={mission.pdf[1]} variant="pdf" className="inline-flex gap-2">
                                        <Image
                                            src="/icons/file_pdf.svg"
                                            width={20}
                                            height={20}
                                            quality={100}
                                            priority={true}
                                            alt=""
                                        />
                                        {mission.btn[1]}
                                    </Button>
                                ) : (
                                    <Button href={mission.pdf[1]} variant="secondary">{mission.btn[1]}</Button>
                                )
                            )}
                        </div>
                    ) : null}
                </div>
            </div>
            {mission.id === 5 && (
                <div className='flex flex-col lg:flex-row gap-9 mx-6 mt-8 mb-16'>
                    {formations.map((formation) => (
                        <CardFormation
                            key={formation.id}
                            id={formation.id}
                            icon={formation.icon}
                            title={formation.title}
                            description1={formation.description1}
                            description2={formation.description2}
                            titlelist={formation.titlelist}
                            itemsList={formation.itemsList}
                            hours={formation.hours}
                            price={formation.price}
                            meal={formation.meal}
                        />
                    ))}
                </div>
            )}

        </>
    );
};

export default function GridMission() {
    const [isFormOpen, setIsFormOpen] = useState(false);

    return (
        <>
            <article className="max-w-7xl mx-auto px-4 py-16">
                {missions.map((mission, index) => (
                    <MissionItem
                        key={mission.id}
                        mission={mission}
                        index={index}
                        onOpenForm={() => setIsFormOpen(true)}
                    />
                ))}
            </article>

            {/* Modal du formulaire d'assurance */}
            {isFormOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-y-auto">
                    <div className="min-h-screen px-4 text-center">
                        <div className="fixed inset-0" onClick={() => setIsFormOpen(false)} />
                        <span className="inline-block h-screen align-middle" aria-hidden="true">&#8203;</span>
                        <div className="inline-block w-full max-w-4xl my-8 text-left align-middle bg-white rounded-lg shadow-xl transform transition-all relative">
                            <button
                                onClick={() => setIsFormOpen(false)}
                                className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
                                aria-label="Fermer"
                            >
                                ×
                            </button>
                            <div className="p-6">
                                <AssuranceForm />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}