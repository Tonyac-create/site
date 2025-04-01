import { catsAdopt, dogsAdopt } from "@/app/utils/animalsAdopt";
import CardAnimalsAdopt from "../CardAnimalsAdopt";

export default function AdoptSection() {
    return (
        <section className="px-6 pt-16 lg:px-28">
            <h2 className="text-brown text-4xl font-lora font-semibold">Ils cherchent une famille</h2>
            <div className="flex flex-wrap">
                {catsAdopt.map((cat) => (
                    !cat.adopt &&
                    <CardAnimalsAdopt
                        key={cat.id}
                        name={cat.name}
                        age={cat.age}
                        description={cat.description}
                        genre={cat.genre}
                        race={cat.race}
                        type={cat.type}
                        image={cat.image}
                        introduction={cat.introduction}
                        adopt={cat.adopt}
                    />
                ))}
                {dogsAdopt.map((dog) => (
                    !dog.adopt &&
                    <CardAnimalsAdopt
                        key={dog.id}
                        name={dog.name}
                        age={dog.age}
                        description={dog.description}
                        genre={dog.genre}
                        race={dog.race}
                        type={dog.type}
                        image={dog.image}
                        introduction={dog.introduction}
                        adopt={dog.adopt}
                    />
                ))}
            </div>
        </section>
    )
}