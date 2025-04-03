type Team = {
    id: number
    name: string
    role: string
    otheRoles: string[]
}

export const allTeam: Team[] = [
    {
        id: 1,
        name: "Nanou",
        role: "Fondatrice",
        otheRoles: ["Educatrice comportementaliste", "Sapiteur Canin", "Formatrice", "Diplômée de l'état"]
    },
    {
        id: 2,
        name: "Kim",
        role: "Présidente",
        otheRoles: ["Spécialisée pour les soins aux animaux", "Éducatrice félin"]
    },
    {
        id: 3,
        name: "Gwenn et Nadine",
        role: "Secrétaires",
        otheRoles: ["Assistantes pour les visites pédagogiques"]
    },
    {
        id: 4,
        name: "Angélique",
        role: "Trésorière",
        otheRoles: [""]
    },
    {
        id: 5,
        name: "Angélique C.",
        role: "Développeuse web",
        otheRoles: [""]
    },
    {
        id: 6,
        name: "Morgann",
        role: "Soigneuse animalière",
        otheRoles: ["Bac pro agricole Spécialisés pour le parc des animaux de la ferme", "Assistante pour les visites pédagogiques"]
    },
    {
        id: 7,
        name: "Manu",
        role: "Soigneur animalier",
        otheRoles: ["Dans la structure pédagogique, il nourrit les animaux, nettoit les enclos et controle les équipements et clôtures"]
    },
    {
        id: 8,
        name: "Karine et Nina",
        role: "Bénévoles",
        otheRoles: ["Responsables des collectes"]
    },
    {
        id: 9,
        name: "Lyza et Rinala",
        role: "Chargées de communication",
        otheRoles: [""]
    },
    {
        id: 10,
        name: "Nemo et Brandon",
        role: "Chefs des travaux et structures",
        otheRoles: ["Spécialisés dans les constructions des divers enclos et les travaux"]
    }
]
