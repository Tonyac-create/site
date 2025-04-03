import { catsAdopt, dogsAdopt } from "@/app/utils/animalsAdopt";
import MiniCardAnimals from "../MiniCardAnimals";

export default function Adopted() {
    return (
        <section className="flex flex-col mx-6 pt-16 lg:mx-28">
            <h3 className="text-brown text-3xl font-semibold mb-3">Nous avons trouvé une maison</h3>
            <div className="flex flex-wrap gap-10">
                {catsAdopt.map((cat) => (
                    cat.adopt &&
                    <MiniCardAnimals
                        key={cat.id}
                        name={cat.name}
                        age={cat.age}
                        genre={cat.genre}
                        image={cat.image}
                    />
                ))}
                {dogsAdopt.map((dog) => (
                    dog.adopt &&
                    <MiniCardAnimals
                        key={dog.id}
                        name={dog.name}
                        age={dog.age}
                        genre={dog.genre}
                        image={dog.image}
                    />
                ))}
            </div>
        </section>
    )
}