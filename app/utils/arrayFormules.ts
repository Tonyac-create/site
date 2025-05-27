export interface Formule {
    id: string,
    title: string,
    price: string,
    line1: string,
    line2: string,
    line3: string,
    line4: string,
    line5: string
}

export const arrayFormules = [
    {
        id: 1,
        title: "Formule 1",
        price: "15 € / mois",
        line1: "Garde temporaire de votre animal",
        line2: "pendant votre hospitalisation",
        line3: "lors de votre convalescence",
        line4: "après votre sortie de l'hôpital si nécessaire",
        line5: "Durée limitée - retour chez vous prévu"
    },
    {
        id: 2,
        title: "Formule 2",
        price: "30 € / mois",
        line1: "Placement définitf de votre animal / Tous les services de la formule 1 PLUS",
        line2: "",
        line3: "accueil en cas d'entrée en maison de retraite / EPHAD",
        line4: "prise encharge définitive en cas de décès",
        line5: "Aucune limite de durée - nous trouvons une solution permanente"
    }
]
