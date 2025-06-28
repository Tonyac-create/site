export type Quantity = {
    number: string;
    unit?: string;
    text: string;
}

export const foods = [
    {
        src: "/icons/food/cat-food.svg",
        quantity: {
            number: "50",
            unit: "kg",
            text: "croquettes"
        }
    },
    {
        src: "/icons/food/bird-food.svg",
        quantity: [
            { number: "3", unit: "kg", text: "graines oiseaux" },
            { number: "8", unit: "kg", text: "granulés poussins" },
            { number: "8", unit: "kg", text: "graines cailles" },
            { number: "8", unit: "kg", text: "pigeons" },
        ]
    },
    {
        src: "/icons/food/hamster-food.svg",
        quantity: [
            { number: "30", text: "salades" },
            { number: "95", text: "tomates" },
            { number: "120", text: "fruits" },
            { number: "60", text: "oeufs" },
            { number: "10", unit: "kg", text: "carottes" }
        ]
    },
    {
        src: "/icons/food/home-food.svg",
        quantity: [
            { number: "120", unit: "kg", text: "pailles" },
            { number: "30", unit: "kg", text: "foin" }
        ]
    },
    {
        src: "/icons/food/trash-food.svg",
        quantity: {
            number: "90",
            unit: "kg",
            text: "déchets alimentaires"
        }
    },
    {
        src: "/icons/food/water-food.svg",
        quantity: {
            number: "300",
            unit: "L",
            text: "eau"
        }
    },
    {
        src: ["/icons/food/pig.svg", "/icons/food/goat.svg", "/icons/food/chicken.svg"],
        quantity: [
            { number: "90", unit: "kg", text: "de pain" },
            { number: "200", unit: "kg", text: "de blé" }
        ]
    },
    {
        src: "/icons/food/turtle.svg",
        quantity: [
            {
                number: "2",
                unit: "kg",
                text: "viandes blanches ou poissons"
            },
            {
                number: "3",
                unit: "kg",
                text: "verdures"
            }
        ]
    }
]