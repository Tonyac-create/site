'use client';

import Image from 'next/image';
import { events } from '../../utils/events';
import HelloAssoWidget from '../shared/HelloAssoWidget';

export default function Event() {
    // Fonction pour convertir les \n en balises <p>
    const formatDescription = (description: string) => {
        if (!description) return null;
        
        return description.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-2">
                {paragraph}
            </p>
        ));
    };

    // Trier les événements du plus proche au plus éloigné dans le temps
    // const sortedEvents = [...events].sort((a, b) => {
    //     return new Date(a.date).getTime() - new Date(b.date).getTime();
    // });

    return (
        <section id="events" className="pt-8 scroll-mt-16">
            <h3 className="text-brown text-2xl font-lora font-semibold mb-6">Prochains événements</h3>
            <div className="flex flex-col gap-10 mb-12">
                {events.map((event) => (
                    <div id={`event-${event.id}`} key={event.id} className="flex flex-col lg:flex-row gap-6 border-b border-gray-200 pb-8 pt-16 scroll-mt-16">
                        <div className="lg:w-1/3 my-auto">
                            <Image 
                                src={`/${event.image}`} 
                                width={400} 
                                height={300}
                                alt={event.title}
                                className="rounded-lg object-cover w-full h-auto"
                            />
                        </div>
                        <div className="lg:w-2/3">
                            <h4 className="text-xl font-bold mb-2">{event.title}</h4>
                            <p className="text-gray-600 mb-4 font-semibold">Date: {event.date}</p>
                            {event.hours && <p className="text-gray-600 mb-4 font-semibold">Heures: {event.hours}</p>}
                            {event.link && <p className="text-gray-600 mb-4 font-semibold">Inscription ici: <a href={event.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{event.link}</a></p>}
                            <div className="text-gray-700">
                                {formatDescription(event.description)}
                            </div>
                            
                            {event.hasIframe && (
                                <div className="mt-6">
                                    <HelloAssoWidget eventId={event.id} />
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
