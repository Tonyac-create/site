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
        title: "Concours d'Halloween : Les animaux à l'honneur !",
        date: "2025-10-31",
        hours: "14h00 à 17h00",
        link: "https://forms.gle/cZcRrgCCRNEn6s5P9",
        description: "Préparez vos plus beaux déguisements et vos créations les plus effrayantes : l'association organise un double concours spécial Halloween le vendredi 31 octobre !\n\nVenez passer une après-midi de frissons et de créativité à nos côtés. Les meilleurs costumes et les plus belles œuvres seront récompensés.\n\nLa participation est de 5€ par personne. Cela comprend la visite libre auprès des animaux, le goûter et l'animation.\n\nPour les Enfants : le Concours de Pâte à Modeler. Amis des animaux en herbe, c'est à vous de jouer !\n\nVenez sur place, le vendredi 31 octobre, pour participer à notre atelier de pâte à modeler. Votre mission, si vous l'acceptez : créer la créature d'Halloween la plus originale et effrayante, avec une petite touche animale !\n\nPour les Adultes : le Concours de Citrouilles Hantées. Maîtres sculpteurs, ce défi est pour vous !\n\n1. Créez à la maison : Décorez ou sculptez votre citrouille chez vous, en la transformant en l'œuvre la plus créative, la plus drôle ou la plus effrayante. L'inspiration est libre !\n\n2. Apportez-la : Venez déposer votre chef-d'œuvre le vendredi 31 octobre à l'association pour qu'il soit présenté au jury.\n\nUne Règle d'Or pour Tous !\n\nPetits et grands, il faudra obligatoirement venir déguisé ! Si vous choisissez de rendre hommage à nos animaux, ce sera encore mieux : fantôme de chat, vampire-chien ou chauve-souris, laissez libre cours à votre imagination !\n\nRendez-vous à Maizilly le vendredi 31 octobre de 14h à 17h pour un moment de partage inoubliable !",
        image: "events/Halloween.jpg",
    },
    {
        id: 2,
        title: "Journées portes ouvertes, spécial adoption chatons",
        date: "2025-10-05",
        hours: "14h00 à 16h00",
        description: "Venez ouvrir votre cœur !\n\nLe 5 octobre, c'est la Journée mondiale des animaux, l'occasion parfaite pour célébrer nos petits compagnons à quatre pattes. Pour l'honorer comme il se doit, nous vous invitons à notre grande journée portes ouvertes spéciale adoption de chatons !\n\nEn ce moment, 12 chatons âgés de 2 à 6 mois attendent avec impatience de trouver une famille aimante. Ils sont tous pleins de vie, de douceur, et rêvent de câlins. Nous avons également 4 petits chatons de quelques semaines qui ne sont pas encore prêts pour l'adoption. Vous pourrez venir les voir et vous informer, mais ils resteront sous notre protection jusqu'à ce qu'ils soient assez grands et forts.\n\nVenez les rencontrer et craquez pour l'un de nos petits protégés. Si le coup de foudre opère, l'adoption définitive se fera dans la semaine qui suit, une fois que nous aurons pu fixer un rendez-vous chez le vétérinaire pour une dernière vérification de sa santé.\n\nNous serons là pour répondre à toutes vos questions et vous accompagner dans ce beau projet d'adoption.\n\nAttention la porte ouverte n'est pas au siège social de l'association mais dans la Famille d'Accueil au 34 rue de l'auberge à Maizilly 42750.\n\nP.-S. : N'hésitez pas à partager cet événement avec vos proches. Plus on est de fous, plus on a de chances de trouver un foyer pour tous nos petits protégés.",
        image: "events/Portes_ouvertes.jpg",
    },
    {
        id: 3,
        title: "Marche de l'espoir",
        date: "2025-09-20",
        hours: "",
        description: "Evenement caritatif du 20 septembre au 20 octobre 2025. La Marche de l'Espoir est lancée !\n\nMarchez contre la maltraitance animale. 1 pas = 1 espoir.\nInscrivez-vous et devenez leur voix.\n\nAujourd'hui, nous vous invitons à nous rejoindre dans une nouvelle bataille : 'La Marche de l'Espoir', une marche solidaire pour un avenir sans souffrance.\n\n",
        image: "events/helloasso.webp",
        hasIframe: true
    },
    {
        id: 4,
        title: "Veillée villageoise - Les Santons d’autrefois",
        date: "2025-12-01",
        hours: "17h à 19h",
        description: "Du 01 décembre 2025 au 06 janvier 2026.\n\nVisite dans la structure d’accueil à Maizilly 34 rue de l’auberge :\n\n5 € la 1ère personne ensuite 2 € par personne\n\nCette exposition unique vous offrira une immersion totale : les santons prendront vie dans une mise en scène lumineuse et animée pour recréer la magie de Noël d'antan.",
        image: "events/santons.jpg",
        hasIframe: true
    },
]