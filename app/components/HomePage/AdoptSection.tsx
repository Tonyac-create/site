import { catsAdopt, dogsAdopt } from "@/app/utils/animalsAdopt";
import MiniCardAnimals from "../MiniCardAnimals";
import Button from "../Button";

export default function AdoptSection() {
    return (
        <section className="px-6 pt-16 lg:px-28 mb-12">
            <h2 className="text-brown text-4xl font-lora font-semibold">Ils cherchent une famille</h2>
            <p className="text-xl my-5 md:w-[70%]">{`Chaque animal a une histoire, un passé parfois difficile, mais surtout un immense amour à donner.
                Chez Secours Français pour Animaux, nous aidons des compagnons en quête d’un foyer chaleureux et
                d’une famille bienveillante.`}</p>
            <p className="text-xl my-5 md:w-[70%]">{`Chiens, chats… Tous attendent avec impatience leur nouvelle maison,
                celle où ils pourront enfin poser leurs pattes en toute confiance. En adoptant, vous sauvez
                une vie et offrez une nouvelle page à écrire, pleine de bonheur et de tendresse.
                Peut-être que votre futur compagnon vous attend déjà… Découvrez nos animaux à l’adoption et laissez votre cœur parler !`}</p>
            <Button href="/adopt" variant="secondary">{`Je veux adopter !`}</Button>
            <div className="flex flex-wrap gap-10 mt-4">
                {catsAdopt.map((cat) => (
                    !cat.adopt &&
                    <MiniCardAnimals
                        key={cat.id}
                        name={cat.name}
                        age={cat.age}
                        genre={cat.genre}
                        image={cat.image}
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
                    />
                ))}
            </div>
        </section>
    )
}