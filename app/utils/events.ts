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
        title: "Noêl : La Magie des Sens",
        date: "2025-12-01",
        hours: "17h30 à 19h00",
        description: "L'esprit des fêtes approche à grands pas, et comme chaque année, notre association est ravie de vous convier à un événement féerique à Maizilly : la grande Pastorale Exposition de Santons. Cet événement sera à voir dans la structure d'accueil de la Ferme d'Antan du SFPA.\n\nPrix d'entrée : 5 € pour la première personne, puis 3 € par personne supplémentaire.\n\nDu 1er décembre au 6 janvier, venez vous immerger dans la poésie de cette tradition. Notre Pastorale Exposition est une scénographie immersive et sensorielle conçue pour éveiller vos sens :\n\n- Les Sons : Laissez-vous envelopper par un mélange harmonieux de bruitages, chants et musiques de fond qui vous transporteront.\n\n- Les Odeurs : Découvrez des parfums subtils et naturels qui évoqueront le cœur des traditions de Noël.\n\n- Les Sensations : Ressentez l'atmosphère unique de cette installation, jouant sur le contraste entre le froid de l'hiver et les zones de chaleur réconfortantes.\n\nVotre Générosité pour Enrichir la Pastorale !\n\nPour que notre Pastorale Exposition de Santons puisse prendre toute son ampleur et émerveiller nos visiteurs, nous lançons un appel exceptionnel aux dons ou aux prêts d'objets. Nous avons besoin de vous pour créer un décor authentique et grandiose !\n\nNous recherchons spécifiquement :\n\n- Anges : Nous acceptons volontiers les anges, toutes formes, toutes tailles, et tous matériaux (pour l'installation au plafond).\n\n- Santons : De grande taille (entre 25 cm et 30 cm) pour donner du relief à notre exposition.\n\n- Grands Sujets : Animaux (bœufs, ânes, moutons, etc.) pour la crèche, qui donneront de l'échelle à notre décor.\n\n- Lumières : Guirlandes lumineuses (en bon état), et éclairages d'ambiance.\n\n- Végétation : Sapins artificiels (même abîmés, car nous les découperons pour les décors) et branches décoratives.\n\nChaque objet, prêté ou donné, enrichira la magie de cet événement.\n\nVenez mettre la main à la patte !\n\nSi vous souhaitez participer à la construction de cette magie et à l'installation des décors, vous êtes les bienvenus à partir du 17 novembre ! Venez nous aider tous les après-midi, de 14h à 16h.",
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