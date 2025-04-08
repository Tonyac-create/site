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
        imageUrl: "/Chat_cage.jpg",
        btn: ["Rejoignez nous"],
        pathBtn: "/help"
    },
    {
        id: 2,
        title: "Animaux à l'abandon",
        description: "Les chats des rues de moins de 8 mois seront accueillis dans une famille d'accueil afin d'être adoptés. Les petits animaux de la ferme ainsi que les NAC seront regroupés au sein d'une famille d'accueil unique. Ils resteront là jusqu'à la fin de leur vie. Dans cette structure, il sera envisageable de mettre en place des visites pédagogiques. Les autres animaux seront maintenus chez leurs propriétaires ou en famille d'accueil, afin de trouver d'autres maîtres lors des abandons. ",
        imageUrl: "/animalsAdopt/Jazz.jpg",
        btn: ["Chat - Télécharger la fiche d'inscription", "Chien - Télécharger la fiche d'inscription"],
        pdf: ["/pdf/Fiche_adoption_chat.pdf", "/pdf/Fiche_adoption_chien.pdf"]
    },
    {
        id: 3,
        title: "Aide et soutien temporaire",
        description: "Après avoir soumis un dossier de demande d'aide, nous tenterons de soutenir temporairement les propriétaires d'animaux en situation de besoin, dans la mesure du possible. Quelles que soient vos interrogations, vous trouverez toujours une réponse auprès du SFPA pour vos questions. Si vous avez un problème avec vos voisins ou un propriétaire, le SFPA vous trouvera une solution.",
        imageUrl: "/soutien.jpg",
        btn: ["J'ai une question"],
        pathBtn: "/contact"
    },
    {
        id: 4,
        title: "Visites éducatives",
        description: "Pour sensibiliser les enfants et les adultes à la question de l'abandon et de la maltraitance, nous prévoyons de faire des visites pédagogiques dans la structure qui accueille les animaux de la ferme et les NAC. Ils pourront prendre soin et nourrir les animaux.",
        imageUrl: "/visites_missions.jpg",
        btn: ["Je veux visiter"],
        pathBtn: "/visits"
    },
    {
        id: 5,
        title: "Formation au langage canin",
        description: "A partir de 50 €, pour bien communiquer avec nos chiens, il est nécessaire de comprendre leur langage qui est très différent du nôtre. Grâce à cette formation, vous aurez une meilleure compréhension de votre chien au quotidien! En améliorant la communication, l'éducation devient plus aisée.",
        imageUrl: "/formation_canin.jpg",
        btn: ["Réserver une formation"],
        pathBtn: "/contact"
    },
    {
        id: 6,
        title: `Assurance "Coup dur"`,
        description: `Des garanties "coup dur" seront proposées par l'association pour prendre soin de leur animal en cas d'hospistalisation ou de décès. Retrouvez ci dessous les tarifs.`,
        imageUrl: "/nounouche.jpg",
        btn: ["Demander un devis"],
        pathBtn: "/contact"
    }
];