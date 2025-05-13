export interface Mission {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    btn: string[];
    pathBtn?: string;
    pdf?: string[];
}

export const missions: Mission[] = [
    {
        id: 1,
        title: "Prendre soin des chats errants",
        description: "En partenariat avec les communes, nous prendrons en charge les chats errants en les stérilisant, les identifiant. Remis ensuite sur leur territoire, ils deviendront ainsi des chats libres. Des bénévoles seront indispensables pour nourrir et prendre soin de ces chats. N’hésitez pas à proposer votre aide.",
        imageUrl: "/Chat_cage.webp",
        btn: ["Document pour la gestion des chats errants", "Convention des communes sur la prise en charge"],
        pdf: ["/pdf/Gestion_chats_errants.pdf", "/pdf/Convention_chats_errants.pdf"]
    },
    {
        id: 2,
        title: "Animaux à l'abandon",
        description: "Les chats et les chiens restent en famille d'accueil jusqu'à l'adoption. Les petits animaux de la ferme ainsi que les NAC seront regroupés au sein d'une structure d'accueil unique. Ils resteront là jusqu'à la fin de leur vie. Dans cette structure, il sera envisageable de mettre en place des visites au sein des familles d'accueil. Les autres animaux seront maintenus chez leurs propriétaires ou en famille d'accueil, afin de trouver d'autres maîtres lors des abandons. ",
        imageUrl: "/animalsAdopt/Jazz.webp",
        btn: ["Chat - Formulaire d'adoption", "Chien - Formulaire d'adoption"],
        pdf: ["/pdf/Fiche_adoption_chat.pdf", "/pdf/Fiche_adoption_chien.pdf"]
    },
    {
        id: 3,
        title: "Aide et soutien temporaire",
        description: "Après avoir soumis un dossier de demande d'aide, nous tenterons de soutenir temporairement les propriétaires d'animaux en situation de besoin, dans la mesure du possible. Quelles que soient vos interrogations, vous trouverez toujours une réponse auprès du SFPA pour vos questions. Si vous avez un problème avec vos voisins ou un propriétaire, le SFPA vous trouvera une solution.",
        imageUrl: "/aide_soutien.webp",
        btn: ["Télécharger le dossier de demande d'aide"],
        pdf: ["/pdf/Demande_aide_pour_soin.pdf"]
    },
    {
        id: 4,
        title: "Visites pédagogiques",
        description: "Pour sensibiliser les enfants et les adultes à la question de l'abandon et de la maltraitance, nous prévoyons de faire des visites pédagogiques dans la structure qui accueille les animaux de la ferme et les NAC. Ils pourront prendre soin et nourrir les animaux.",
        imageUrl: "/visites_educatives.webp",
        btn: ["Je veux visiter"],
        pathBtn: "/visits"
    },
    {
        id: 5,
        title: "Formations canine(en attente d'agrément)",
        description: "A partir de 50 €, pour bien communiquer avec nos chiens, il est nécessaire de comprendre leur langage qui est très différent du nôtre. Grâce à cette formation, vous aurez une meilleure compréhension de votre chien au quotidien! En améliorant la communication, l'éducation devient plus aisée.",
        imageUrl: "/formation_langage_canin.webp",
        btn: [""],
        pathBtn: ""
    },
    {
        id: 6,
        title: `Assurance "Coup dur"`,
        description: `Des garanties "coup dur" seront proposées par l'association pour prendre soin de leur animal en cas d'hospistalisation ou de décès. Retrouvez ci dessous les tarifs.`,
        imageUrl: "/personne_agee.webp",
        btn: ["Demander une aide"],
        pathBtn: "/contact"
    }
];