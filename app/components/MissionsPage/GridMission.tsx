'use client';
import { RefObject, useRef } from 'react';
import Image from 'next/image';
import { useInView } from '@/app/hooks/useInView';
import { Mission, missions } from '@/app/utils/missions';
import Button from '../Button';

/**
 * Mission Item component
 * 
 * @param {Mission} mission - Mission object
 * @param {number} index - Index of the mission
 * @returns {JSX.Element} Mission item component
 */
const MissionItem = ({ mission, index }: { mission: Mission, index: number }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView({ ref: ref as RefObject<Element> });

    return (
        <div
            ref={ref}
            className={`
                flex flex-col md:flex-row items-center gap-8 mb-8 
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
                {mission.pathBtn ? (
                    <Button href={mission.pathBtn} variant="secondary">{mission.btn[0]}</Button>
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
                                <Button href={mission.pdf[0]} variant="secondary">{mission.btn[0]}</Button>
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
    );
};

export default function GridMission() {
    return (
        <article className="max-w-7xl mx-auto px-4 py-16">
            {missions.map((mission, index) => (
                <MissionItem key={mission.id} mission={mission} index={index} />
            ))}
        </article>
    );
}