export interface Help {
    id: number;
    title: string;
    description: string;
    image: string
    link?: string; // Optionnel
    hasIframe?: boolean; // Indique si l'événement a un iframe HelloAsso
}

export const help: Help[] = [
    {
        id: 1,
        title: "Commerçants solidaires",
        description: "Vous êtes commerçant, artisan, entrepreneur ?\n\n 👉 Vous pouvez nous aider via :\n • 1€ solidaire sur un produit\n• Une tirelire en caisse\n• Un don en nature (nourriture, matériel…)\n• De la visibilité\n\nEn retour : mise en avant sur notre site et nos réseaux ",
        image: "events/Commercants_solidaire.jpg",
        link: "https://www.helloasso.com/associations/secours-francais-pour-animaux"
    },
    {
        id: 2,
        title: "Et si votre anniversaire aidait les animaux !",
        description: "Transformer votre anniversaire en geste solidaire !\n\nAu lieu d’un cadeau, proposez à vos proches de faire un don pour les animaux.\nUn moment de joie qui devient un acte d’amour.\nLes fonds récoltés participent à la création de notre future Maison des Animaux.",
        image: "events/Anniversaire_animaux.jpg",
        link: "https://www.helloasso.com/associations/secours-francais-pour-animaux"
    },
    {
        id: 3,
        title: "Recherche 4 soigneurs animaliers",
        description: "Devenir soigneur\n\nNous recherchons des personnes sérieuses, fiables et motivées sur le long terme, prêtes à s’impliquer dans le bien-être des animaux.\nProfil recherché :\n• Être en bonne condition physique\n• Ne pas craindre de se salir\n• Être à l’aise avec les animaux de ferme et de cage\n• Avoir un réel engagement et de la régularité\n\nS’occuper des animaux demande du temps, mais c’est aussi une expérience humaine et enrichissante, au contact direct d’animaux qui comptent sur nous chaque jour.",
        image: "events/Soigneurs_animaliers.jpg",
        link: "https://www.helloasso.com/associations/secours-francais-pour-animaux"
    },
    {
        id: 4,
        title: "1 € pour l'espoir",
        description: "Moins qu’un café… moins qu’un croissant… Mais pour eux, c’est énorme.\nVous pouvez donner 1€, une fois… ou régulièrement, toute l’année.\n\nChez nous, 1€ peut sauver une vie.",
        image: "events/1euro.jpg",
        link: "https://www.helloasso.com/associations/secours-francais-pour-animaux"
    },
    {
        id: 5,
        title: "Appel aux dons de matériel",
        description: "Afin d’améliorer le cadre de vie de nos animaux, nous entreprenons actuellement le réaménagement de notre terrain. Pour cela, nous recherchons du matériel de récupération ou dont vous n’avez plus l’usage.\nTout équipement pouvant servir à l’entretien, l’aménagement ou l’organisation du terrain peut nous être très utile. Nous recherchons notamment :\n• Brouettes\n• Balais et outils de jardinage (pelles, râteaux, etc.)\n• Gros bidons\n• Cabinons ou abris de jardin à récupérer\n\nNos ressources financières sont utilisées en priorité pour l’alimentation et les soins des animaux. Le matériel récupéré représente donc une aide précieuse et durable pour améliorer leurs conditions de vie. Si vous avez ce type de matériel à donner, ou si vous connaissez quelqu’un qui pourrait en avoir, n’hésitez pas à nous contacter et à partager cet appel.\n💚 Merci pour eux !",
        image: "events/Dons_materiel.jpg",
        link: "https://www.helloasso.com/associations/secours-francais-pour-animaux"
    },
]