import { catsAdopt, dogsAdopt } from "@/app/utils/animalsAdopt";
import MiniCardAnimals from "../MiniCardAnimals";

export default function Adopt() {
    return (
        <section className="flex flex-wrap gap-10 mx-6 pt-3 lg:mx-28">
            {catsAdopt.map((cat) => (
                !cat.adopt &&
                <MiniCardAnimals
                    key={cat.id}
                    name={cat.name}
                    age={cat.age}
                    genre={cat.genre}
                    image={cat.image}
                    introduction={cat.introduction}
                />
            ))}
            {dogsAdopt.map((dog) => (
                !dog.adopt &&
                <MiniCardAnimals
                    key={dog.id}
                    name={dog.name}
                    age={dog.age}
                    genre={dog.genre}
                    image={dog.image}
                    introduction={dog.introduction}
                />
            ))}
        </section>
    )
}