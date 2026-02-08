'use client';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { useInView } from '@/app/hooks/useInView';
import { Visits, visits } from '@/app/utils/visits';
import GalleryModal from './GalleryModal';

/**
 * Mission Item component
 * 
 * @param {Mission} mission - Mission object
 * @param {number} index - Index of the mission
 * @returns {JSX.Element} Mission item component
 */
const MissionItem = ({ visits, index }: { visits: Visits, index: number }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView({ ref });
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);

    return (
        <>
            <section
                ref={ref}
                className={`
                    flex flex-col md:flex-row items-center gap-8 mb-7 
                    ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}
                    transition-all duration-1000 ease-out
                    ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
                `}
            >
                <div className="w-full md:w-1/2 mb-12">
                    <div className="relative aspect-video w-full">
                        {visits.video ? (
                            <div className="flex flex-col gap-7 items-center">
                                {visits.video.map((video, index) => (
                                    <video
                                        key={index}
                                        src={video}
                                        controls
                                        className="w-[350px] h-[200px] md:w-[500px] md:h-[300px] object-cover"
                                    />
                                ))}
                            </div>
                        ) : visits.imageURL ? (
                            <Image
                                src={visits.imageURL}
                                alt={visits.title}
                                width={500}
                                height={400}
                                quality={100}
                                priority={true}
                                className="object-contain"
                            />
                        ) : null}
                    </div>
                </div>
                <div className="w-full md:w-1/2 space-y-4 mb-12">
                    <h2 className="text-3xl font-bold text-brown">{visits.title}</h2>

                    <button
                        onClick={() => window.open('https://calendly.com/secoursfrancaispouranimaux-visites-pedagogiques/30min', '_blank')}
                        className="w-full md:w-auto inline-flex items-center justify-center px-6 py-3 bg-brown text-white rounded-lg hover:bg-brown/90 active:bg-brown/80 transition-colors text-sm md:text-base"
                    >
                        Réserver cette visite
                    </button>

                    <p className="text-xl text-gray-600 whitespace-pre-line">{visits.description}</p>
                    <p className="text-xl font-semibold">{visits.price}</p>
                    {visits.galleryImages && visits.galleryImages.length > 0 && (
                        <button
                            onClick={() => setIsGalleryOpen(true)}
                            className="w-full md:w-auto inline-flex items-center justify-center px-6 py-3 bg-brown text-white rounded-lg hover:bg-brown/90 active:bg-brown/80 transition-colors text-sm md:text-base"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                            </svg>
                            Voir la galerie de photos
                        </button>
                    )}
                </div>


            </section>
            <GalleryModal
                isOpen={isGalleryOpen}
                onClose={() => setIsGalleryOpen(false)}
                images={visits.galleryImages!}
                title={visits.title}
            />
        </>
    );
};

export default function GridMission() {
    return (
        <article className="max-w-7xl mx-auto px-4 py-16">
            {visits.map((visit, index) => (
                <MissionItem key={visit.id} visits={visit} index={index} />
            ))}
        </article>
    );
}