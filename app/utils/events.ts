export interface Event {
    id: number;
    title: string;
    date: string;
    description: string;
    image: string;
    hours?: string; // Optionnel
    link?: string; // Optionnel
    hasIframe?: boolean; // Indique si l'événement a un iframe HelloAsso
}

export const events: Event[] = [
    {
        id: 1,
        title: " WEEK-END 100 % MUSIQUE – INSCRIPTIONS OUVERTES ! 🔥",
        date: "06 & 07 juin 2026",
        hours: "18h00",
        description: "C’est officiel ! Les inscriptions sont ouvertes dès maintenant pour notre week-end 100 % musique 🎤💃🕺\n\n 👉 Samedi : repas musical & bal  40€\n\n 👉 Samedi : bal seul 20€\n\n 👉 Dimanche : bal & karaoké 10€.\n\n MENU DU SAMEDI SOIR \n\n 🍽️ Saveurs d’antan & notes gourmandes \n\n 🎵🥖 L’Assiette du Souvenir(assortiment de charcuteries)\n\n 🍗 Le Plat du Chef en cadence \n\n Poulet basquaise & riz\n\n🧀🍰 Le Plateau des GourmandsFromages & douceurs\n\n 🥕 Option végétarienne possible \n\n ➡️ à demander obligatoirement à l’avance lors de l’inscription\n\n📌 Les places sont limitées, pensez à vous inscrire rapidement.",
        image: "events/WE_musique.jpg",
    },
]