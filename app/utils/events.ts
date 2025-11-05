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
    // {
    //     id: 1,
    //     title: "Concours d'Halloween : Les animaux à l'honneur !",
    //     date: "2025-10-31",
    //     hours: "14h00 à 17h00",
    //     link: "https://forms.gle/cZcRrgCCRNEn6s5P9",
    //     description: "Préparez vos plus beaux déguisements et vos créations les plus effrayantes : l'association organise un double concours spécial Halloween le vendredi 31 octobre !\n\nVenez passer une après-midi de frissons et de créativité à nos côtés. Les meilleurs costumes et les plus belles œuvres seront récompensés.\n\nLa participation est de 5€ par personne. Cela comprend la visite libre auprès des animaux, le goûter et l'animation.\n\nPour les Enfants : le Concours de Pâte à Modeler. Amis des animaux en herbe, c'est à vous de jouer !\n\nVenez sur place, le vendredi 31 octobre, pour participer à notre atelier de pâte à modeler. Votre mission, si vous l'acceptez : créer la créature d'Halloween la plus originale et effrayante, avec une petite touche animale !\n\nPour les Adultes : le Concours de Citrouilles Hantées. Maîtres sculpteurs, ce défi est pour vous !\n\n1. Créez à la maison : Décorez ou sculptez votre citrouille chez vous, en la transformant en l'œuvre la plus créative, la plus drôle ou la plus effrayante. L'inspiration est libre !\n\n2. Apportez-la : Venez déposer votre chef-d'œuvre le vendredi 31 octobre à l'association pour qu'il soit présenté au jury.\n\nUne Règle d'Or pour Tous !\n\nPetits et grands, il faudra obligatoirement venir déguisé ! Si vous choisissez de rendre hommage à nos animaux, ce sera encore mieux : fantôme de chat, vampire-chien ou chauve-souris, laissez libre cours à votre imagination !\n\nRendez-vous à Maizilly le vendredi 31 octobre de 14h à 17h pour un moment de partage inoubliable !",
    //     image: "events/Halloween.jpg",
    // },
    {
        id: 2,
        title: "Noêl : Le Voyage des Sens",
        date: "2025-12-01",
        hours: "17h30 à 19h00",
        description: "Du 1er décembre au 6 janvier, laissez-vous emporter dans une expérience unique où Noël se vit autrement…\n\nPrix d'entrée : 5 € / personne\n\n🍷☕ Vin chaud et chocolat chaud offerts à la fin du voyage.\n\nNombre maximum de personnes par créneau : 4 personnes.\n\nUn parcours magique, hors du temps, où les cinq sens s’éveillent à chaque pas. Entre lumières, parfums, voix et émotions, petits et grands traverseront un monde enchanté qui réserve bien des surprises.\n\n 4 séances chaque soir : 17h00, 17h30, 18h00 et 18h30.\n\nUniquement sur réservation au 📞 06.69.97.76.41\n\n🎭 Consignes pour une immersion totale. Le spectacle reposant sur des effets sonores et lumineux précis, nous vous remercions de préserver le silence durant la visite, afin de profiter pleinement de la magie de chaque Acte.⏳ Durée : environ 20 minutes. Cette expérience sensorielle, courte et rythmée, est adaptée aux enfants, qui pourront eux aussi s’émerveiller tout au long du parcours.🐾 Les animaux de compagnie ne sont pas admis dans le parcours afin de garantir la sécurité et le confort de tous.\n\n⚠️ Important : Respect des horaires. Afin de garantir une expérience parfaite et la fluidité de la programmation, il est impératif de respecter l'heure de votre rendez-vous. Nous devons avoir le temps de remettre la scène en place pour le groupe suivant. Nous vous invitons à arriver en avance. Tout retard de plus de 5 minutes après l'heure convenue entraînera un refus d'accès pour ne pas perturber la routine du groupe suivant. Votre ponctualité est essentielle au succès du spectacle !\n\n Prêt à vous joindre au voyage ? Partagez l'événement et invitez vos amis !",
        image: "events/santons.jpg",
    },
    // {
    //     id: 3,
    //     title: "Marche de l'espoir",
    //     date: "2025-09-20",
    //     hours: "",
    //     description: "Evenement caritatif du 20 septembre au 20 octobre 2025. La Marche de l'Espoir est lancée !\n\nMarchez contre la maltraitance animale. 1 pas = 1 espoir.\nInscrivez-vous et devenez leur voix.\n\nAujourd'hui, nous vous invitons à nous rejoindre dans une nouvelle bataille : 'La Marche de l'Espoir', une marche solidaire pour un avenir sans souffrance.\n\n",
    //     image: "events/helloasso.webp",
    //     hasIframe: true
    // },
    // {
    //     id: 4,
    //     title: "Veillée villageoise - Les Santons d’autrefois",
    //     date: "2025-12-01",
    //     hours: "17h à 19h",
    //     description: "Du 01 décembre 2025 au 06 janvier 2026.\n\nVisite dans la structure d’accueil à Maizilly 34 rue de l’auberge :\n\n5 € la 1ère personne ensuite 2 € par personne\n\nCette exposition unique vous offrira une immersion totale : les santons prendront vie dans une mise en scène lumineuse et animée pour recréer la magie de Noël d'antan.",
    //     image: "events/santons.jpg",
    //     hasIframe: true
    // },
]