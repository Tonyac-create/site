'use client';

import { HelloAssoDonation } from '../shared/HelloAssoWidget';
import { HelloAssoIframe } from '../shared/HelloAssoWidget';

export default function HelloAssoSection() {
    return (
        <section className="py-10 mx-6 pt-8 lg:mx-28">
            <h2 className="text-brown text-3xl font-lora font-semibold mb-6">Devenez acteur de leur bien-être</h2>
            <p className="text-xl mt-3 mb-5 w-[80%]">Chaque jour, nous recueillons et soignons des animaux blessés, abandonnés ou maltraités.
                Votre soutien nous permet de financer les soins vétérinaires, la nourriture et l’hébergement nécessaires pour leur offrir une seconde chance.
            </p>
            <p className="text-xl mt-3 mb-2">👉 En adhérant à notre association, vous rejoignez une communauté engagée pour la protection animale.</p>
            <p className="text-xl mb-5">👉 En faisant un don, vous contribuez directement à sauver des vies.</p>
            <p className="text-xl mt-3 mb-8">Merci de votre générosité 💚</p>
            <div className="flex flex-wrap max-w-3xl space-y-8">
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
            </div>
        </section>
    );
}