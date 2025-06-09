export interface Visits {
    id: number;
    title: string;
    description: string;
    list?: string[];
    price: string;
    video?: string[];
    imageURL?: string;
    galleryImages?: string[];
}

export const visits: Visits[] = [
    {
        id: 1,
        title: "La visite simple",
        description: "La mini-ferme est un véritable lieu de découverte et de sensibilisation aux valeurs du bien-être animal dès le plus jeune âge.\n\n Ce lieu ouvert à tous offre aux enfants accompagnés de leurs parents ou de leurs enseignants la possibilité de découvrir, de se rapprocher et d'interagir avec nos charmants résidents qui apprécient les câlins et les caresses.\n\n Outre la rencontre de cochons d'Inde, d'oiseaux, de boucs, de cochons, de canards, de poules, de lapins... devenez incollable grâce aux récits pédagogiques de votre guide qui vous enseigneront ce que les animaux mangent, leur environnement, leur cri... Il est interdit de nourrir les animaux sans notre consentement, de crier, de leur faire peur ou de courir dans l'enclos pour protéger leur bien-être. \n\nMerci pour eux.",
        price: "La visite sans animation s'élève à 10€ / personne.",
        video: ["/videos/visits/Oiseaux_mange_main.mp4", "/videos/visits/Lapin.mp4", "/videos/visits/Cochons_Elvis_Poules.mp4"],
        galleryImages: [
            "/gallery/visitOne/visit_1.jpg",
            "/gallery/visitOne/visit_2.jpg",
            "/gallery/visitOne/visit_3.jpg",
            "/gallery/visitOne/visit_4.jpg",
            "/gallery/visitOne/visit_5.jpg",
            "/gallery/visitOne/visit_6.jpg",
            "/gallery/visitOne/visit_7.jpg",
            "/gallery/visitOne/visit_8.jpg",
            "/gallery/visitOne/visit_9.jpg",
            "/gallery/visitOne/visit_10.jpg"
        ]
    },
    {
        id: 2,
        title: "La visite avec activités",
        description: "En règle générale, les enfants ont un intérêt et une curiosité naturels pour la nature et les animaux. En ce qui concerne leur plaisir, quoi de plus agréable qu'une balade au refuge suivie d'un atelier créatif ou culinaire, ainsi que des jeux pédagogiques ?",
        price: "La visite avec animation s'élève à 15€ / personne, incluant le gouter.",
        video: ["/videos/visits/Video_activitees.mp4"],
        galleryImages: [
            "/gallery/visitTwo/visit_two_1.jpg",
            "/gallery/visitTwo/visit_two_2.jpg",
            "/gallery/visitTwo/visit_two_3.jpg",
            "/gallery/visitTwo/visit_two_4.jpg",
            "/gallery/visitTwo/visit_two_5.jpg",
            "/gallery/visitTwo/visit_two_6.jpg",
            "/gallery/visitTwo/visit_two_7.jpg",
        ]
    },
    {
        id: 3,
        title: "Journée anniversaire",
        description: "Êtes-vous à la recherche d'une fête d'anniversaire unique et spéciale pour votre enfant et ses amis ? Nous ferons tout notre possible pour rendre cette journée mémorable, divertissante et éducative à la fois ! La formule que nous proposons inclut une invitation électronique (à envoyer ou à imprimer), une visite du refuge pour chaque participant, une assistance du groupe par un animateur, une visite guidée à la rencontre de nos pensionnaires, un moment divertissant lors de la mini-ferme, un goûter d'anniversaire (une part de gâteau, une boisson et des bonbons), ainsi qu'un cadeau pour le roi ou la reine de la fête. Informations utiles au 06 69 97 76 41.",
        list : [
            "Une réservation d'un mois à l'avance est requise.",
            "Enfant âgé de 4 à 12 ans.",
            "Il est nécessaire d'avoir au moins 5 enfants / au maximum 10 enfants et d'avoir un accompagnant adulte.",
            "Périodicité : les mercredis et les samedis, dans la mesure du possible.",
            "Les horaires sont fixés à 14h.",
            "Encadrement de 14h à 17h."
        ],
        price: "Le coût est de 20 euros par enfant.",
        imageURL: "/anniversaire.webp",
    },
    
];