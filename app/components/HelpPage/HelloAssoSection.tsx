'use client';

import { HelloAssoDonation } from '../shared/HelloAssoWidget';
import { HelloAssoIframe } from '../shared/HelloAssoWidget';
import Link from 'next/link';

export default function HelloAssoSection() {
    return (
        <section className="py-10 mx-6 pt-8 lg:mx-28">
            <h2 className="text-brown text-3xl font-lora font-semibold mb-6">🐾 Soutenez-nous en un clic via HelloAsso !</h2>
            <p className="text-xl mt-3 mb-5 w-[80%]">Pour vous simplifier la vie (et la nôtre !), la SFPA 71 centralise désormais
                toutes ses démarches sur la plateforme sécurisée HelloAsso.</p>
            <p className="text-xl mt-3 mb-2">C’est l’endroit unique pour :</p>
            <ul className="list-none pl-6 mb-2">
                <li>{`🎫 Réserver vos places pour nos événements (dont notre week-end 100% Musique !).`}</li>
                <li>{`🦥 S'inscrire à nos visites pédagogiques pour découvrir nos protégés.`}</li>
                <li>{`🤝 Devenir adhérent et rejoindre la famille des protecteurs.`}</li>
                <li>{`❤️ Faire un don pour nous aider à financer les soins vétérinaires.`}</li>
            </ul>
            <p className="text-xl mb-2 mt-5">💡 Le petit conseil Zéro Frais : </p>
            <p className="text-xl mb-5">{`HelloAsso est une plateforme gratuite pour les associations.
                Au moment de valider votre paiement, un petit montant (pourboire) est suggéré pour la plateforme.
                Vous n'avez aucune obligation de le payer ! Il vous suffit de cliquer sur "Modifier" et
                de placer le curseur sur 0 € (ou cocher "Je ne souhaite pas laisser de pourboire").
                Ainsi, 100% de votre argent va directement au secours de nos animaux.`}</p>
            <p className="text-xl mt-3 mb-8">{`Prêt à nous donner un coup de patte ? C'est par ici : 👇`} </p>
            <div className="flex flex-wrap space-y-8">
                {/* Adhésion */}
                <div>
                    <h3 className="text-xl font-semibold mb-3 text-center">{`Adhérer à l'association`}</h3>
                    <div className="flex justify-center">
                        <HelloAssoIframe
                            src="https://www.helloasso.com/associations/secours-francais-pour-animaux/adhesions/adhesion/widget-bouton"
                            uniqueId="adhesion"
                        />
                    </div>
                </div>

                {/* Don */}
                <div>
                    <h3 className="text-xl font-semibold mb-3 text-center">Faire un don</h3>
                    <div className="flex justify-center">
                        <HelloAssoDonation />
                    </div>
                </div>

                {/* Tous les evenements */}
                <div>
                    <h3 className="text-xl font-semibold mb-3 text-center">Tous les événements</h3>
                    <Link href="https://www.helloasso.com/associations/secours-francais-pour-animaux/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-3xl font-bold">HelloAsso</Link>
                </div>
            </div>
        </section>
    );
}