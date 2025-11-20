import Image from 'next/image';
import { events } from '@/app/utils/events';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import Link from 'next/link';

export default function PostEvents() {
    // Trier les événements du plus proche au plus éloigné dans le temps
    const sortedEvents = [...events].sort((a, b) => {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
    });

    return (
        <div className="py-10">
            <div className="flex flex-col lg:flex-row lg:gap-4">
                <div className="w-1/2">
                    <h2 className="text-brown text-4xl font-lora font-semibold mb-8">{`Chanson officielle du SFPA 71`}</h2>
                    <p className="text-xl mt-3 mb-8">{`Écoutez notre chanson officielle ! Elle a été composée pour soutenir notre association et donner une voix à notre mission. Si cette mélodie vous plaît, vous pouvez nous demander le lien pour la télécharger : pour seulement 5 €, cette somme sera intégralement reversée au SFPA pour financer les soins de nos protégés. C'est une belle façon de nous aider en musique !  
                    Envoyez un mail à : secoursfrancaispouranimaux@sfpa71.fr `}</p>
                </div>
                <iframe className="h-full w-full max-w-xl aspect-video mb-8" src="https://www.youtube.com/embed/v08R5mz7Tdo" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
            <h2 className="text-brown text-4xl font-lora font-semibold mb-8">{`Prochains événements`}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedEvents.map((event) => (
                    <Link href={`/blog#event-${event.id}`} key={event.id} className="block">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                            <div className="relative h-48 w-full">
                                <Image
                                    src={`/${event.image}`}
                                    alt={event.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-brown mb-2">{event.title}</h3>
                                <div className="flex items-center text-gray-600 mb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <span>
                                        {format(new Date(event.date), 'dd MMMM yyyy', { locale: fr })}
                                    </span>
                                </div>
                                {event.hours ? (
                                    <div className="flex items-center text-gray-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span>{event.hours}</span>
                                    </div>
                                ) : (
                                    <div className="h-6"></div>
                                )}
                            </div>

                        </div>
                    </Link>
                ))}
                <div className="relative w-[500px] h-[600px]">
                    <Image
                        src="/events/voyage_sens_SFPA.jpg"
                        alt="voyages des sens"
                        fill
                        className="object-contain"
                    />
                </div>
            </div>
        </div>
    );
}