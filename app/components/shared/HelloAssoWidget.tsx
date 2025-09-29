'use client';

import { useEffect, useRef } from 'react';

/**
 * Composant pour l'iframe HelloAsso avec gestion des événements
 * Permet d'afficher un bouton de don/inscription HelloAsso et ajuste automatiquement sa hauteur
 */
export default function HelloAssoWidget({ eventId }: { eventId: number }) {
    // Pour la marche de l'espoir (collecte)
    return (
        <div className="space-y-8">
            <HelloAssoIframe 
                src="https://www.helloasso.com/associations/secours-francais-pour-animaux/collectes/marche-de-l-espoir/widget-bouton"
                uniqueId={`collecte-${eventId}`}
            />
        </div>
    );
}

/**
 * Composant pour l'iframe de don HelloAsso
 */
export function HelloAssoDonation() {
    return (
        <HelloAssoIframe 
            src="https://www.helloasso.com/associations/secours-francais-pour-animaux/formulaires/1/widget-bouton"
            uniqueId="donation"
        />
    );
}

/**
 * Composant de base pour les iframes HelloAsso
 */
export function HelloAssoIframe({ src, uniqueId }: { src: string, uniqueId: string }) {
    // Chaque iframe doit avoir l'ID "haWidget" pour que HelloAsso puisse ajuster sa hauteur
    const iframeId = "haWidget";
    const containerRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        // Gestionnaire pour ajuster la hauteur de l'iframe
        const messageHandler = (e: MessageEvent) => {
            const data = e.data as { height?: number };
            if (data.height) {
                const iframe = containerRef.current?.querySelector('iframe') as HTMLIFrameElement | null;
                if (iframe) {
                    iframe.style.height = `${data.height}px`;
                }
            }
        };

        // Ajouter l'écouteur d'événement
        window.addEventListener('message', messageHandler);

        // Nettoyer l'écouteur d'événement lors du démontage du composant
        return () => {
            window.removeEventListener('message', messageHandler);
        };
    }, []);

    return (
        <div ref={containerRef} className="hello-asso-container" data-id={uniqueId}>
            <iframe
                id={iframeId}
                src={src}
                style={{ width: '100%', height: '70px', border: 'none' }}
            />
        </div>
    );
}
