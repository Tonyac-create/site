export interface Formule {
    id: string,
    title: string,
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
        line1: "Prise en charge de l'animal en cas d'hospitalisation",
        line2: "XXXX",
        line3: "XXXX",
        line4: "XXXX",
        line5: "25 €/ mois"
    },
    {
        id: 2,
        title: "Formule 2",
        line1: "Prise en charge de l'animal en cas d'hospitalisation",
        line2: "Prise en charge lors de la convalescence",
        line3: "XXXX",
        line4: "XXXX",
        line5: "35 €/ mois"
    },
    {
        id: 3,
        title: "Formule 3",
        line1: "Prise en charge de l'animal en cas d'hospitalisation",
        line2: "Prise en charge lors de la convalescence",
        line3: "Prise en charge lors de décès",
        line4: "XXXX",
        line5: "60 €/ mois"
    },
    {
        id: 4,
        title: "Formule 4",
        line1: "Prise en charge de l'animal en cas d'hospitalisation",
        line2: "Prise en charge lors de la convalescence",
        line3: "Prise en charge lors de décès",
        line4: "Aide à la recherche d'un animal perdu",
        line5: "70 €/ mois"
    }
]
