import { catsAdopt, dogsAdopt } from "@/app/utils/animalsAdopt";
import MiniCardAnimals from "../AdoptPage/MiniCardAnimals";
import Button from "../Button";
import Image from "next/image";
import Link from 'next/link';
import { usePlausible } from "next-plausible";

export default function AdoptSection() {
    const plausible = usePlausible();
    return (
        <section className="px-6 pt-16 lg:px-28 mb-12">
            <h2 className="text-brown text-4xl font-lora font-semibold">Ils cherchent une famille</h2>
            <div className="flex flex-col lg:flex-row gap-14">
                <div className="lg:w-1/2">
                    <p className="text-xl my-5">{`Chaque animal a une histoire, un passé parfois difficile, mais surtout un immense amour à donner.
                        Chez Secours Français pour Animaux, nous aidons des compagnons en quête d’un foyer chaleureux et
                        d’une famille bienveillante.`}</p>
                    <p className="text-xl my-5">{`Chiens, chats… Tous attendent avec impatience leur nouvelle maison,
                        celle où ils pourront enfin poser leurs pattes en toute confiance. En adoptant, vous sauvez
                        une vie et offrez une nouvelle page à écrire, pleine de bonheur et de tendresse.
                        Peut-être que votre futur compagnon vous attend déjà… Découvrez nos animaux à l’adoption et laissez votre cœur parler !`}</p>
                </div>
                <div className="lg:w-1/2">
                    <Image
                        src="/icons/triangle.svg"
                        width={50}
                        height={50}
                        alt="Warning"
                        className="object-contain mx-auto"
                    />
                    <p className="text-xl my-5">{`Le SFPA refuse que les animaux deviennent un "produit commercial".
                        Nous vous prions simplement de faire un don libre dans les limites du raisonnable.`}</p>
                    <p className="text-xl my-5">{`Pour un chat, un minimum de 30 € vous sera demandé + l'identification facturée à 50 €(prix association) à la place de 100€.`}</p>
                    <p className="text-xl my-5">{`Pour un chien, un minimum de 50 € vous sera demandé + l'identification facturée à 50 €(prix association) à la place de 100€.`}</p>
                    <p className="text-xl my-5">{`Chaque personne aura la possibilité de faire stériliser ou castrer son animal, ce processus n'étant pas obligatoire , il est interdit de vous l'imposer.
                        Malheureusement, beaucoup d'associations ne s'y conforment pas.
                        Si vous désirez le faire, la vaccination, qui n'est pas non plus obligatoire, sera à votre charge.`}</p>
                </div>
            </div>
            <Button href="/adopt" variant="secondary" onClick={() => plausible('adopt-button')}>{`Je veux adopter !`}</Button>
            <div className="flex flex-wrap gap-10 mt-4">
                {catsAdopt.map((cat) => (
                    !cat.adopt &&
                    <Link href={`/adopt?animal=${cat.id}`} key={cat.id} onClick={() => plausible('adopt-card-chat')}>
                        <MiniCardAnimals
                            name={cat.name}
                            age={cat.age}
                            genre={cat.genre}
                            image={cat.image}
                        />
                    </Link>
                ))}
                {dogsAdopt.map((dog) => (
                    !dog.adopt &&
                    <Link href={`/adopt?animal=${dog.id}`} key={dog.id} onClick={() => plausible('adopt-card-chien')}>
                        <MiniCardAnimals
                            name={dog.name}
                            age={dog.age}
                            genre={dog.genre}
                            image={dog.image}
                        />
                    </Link>
                ))}
            </div>
        </section>
    )
}