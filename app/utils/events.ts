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
        title: "Noêl : Le Voyage des Sens",
        date: "01 décembre 2025 au 06 janvier 2026",
        hours: "17h30 à 19h00",
        description: "Laissez-vous emporter dans une expérience unique où Noël se vit autrement…\n\nPrix d'entrée : 5 € / personne\n\n🍷☕ Vin chaud et chocolat chaud offerts à la fin du voyage.\n\nNombre maximum de personnes par créneau : 4 personnes.\n\nUn parcours magique, hors du temps, où les cinq sens s’éveillent à chaque pas. Entre lumières, parfums, voix et émotions, petits et grands traverseront un monde enchanté qui réserve bien des surprises.\n\n 4 séances chaque soir : 17h00, 17h30, 18h00 et 18h30.\n\nUniquement sur réservation au 📞 06.69.97.76.41\n\n🎭 Consignes pour une immersion totale. Le spectacle reposant sur des effets sonores et lumineux précis, nous vous remercions de préserver le silence durant la visite, afin de profiter pleinement de la magie de chaque Acte.⏳ Durée : environ 20 minutes. Cette expérience sensorielle, courte et rythmée, est adaptée aux enfants, qui pourront eux aussi s’émerveiller tout au long du parcours.🐾 Les animaux de compagnie ne sont pas admis dans le parcours afin de garantir la sécurité et le confort de tous.\n\n⚠️ Important : Respect des horaires. Afin de garantir une expérience parfaite et la fluidité de la programmation, il est impératif de respecter l'heure de votre rendez-vous. Nous devons avoir le temps de remettre la scène en place pour le groupe suivant. Nous vous invitons à arriver en avance. Tout retard de plus de 5 minutes après l'heure convenue entraînera un refus d'accès pour ne pas perturber la routine du groupe suivant. Votre ponctualité est essentielle au succès du spectacle !\n\n Prêt à vous joindre au voyage ? Partagez l'événement et invitez vos amis !",
        image: "events/santons.jpg",
    },
]