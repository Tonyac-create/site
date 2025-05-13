export default function InformationsSection() {
    return (
        <section className="mx-6 pt-16 lg:mx-28">
            <div className="flex flex-col md:flex-row gap-7">
                <div className="space-y-10">
                    <h2 className="text-brown text-2xl font-lora font-semibold mb-6">Informations utiles</h2>
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Adresse siège social</h3>
                        <p className="text-gray-700">
                            {`7, place de l'Hôtel de Ville`}<br />
                            71170 Chauffailles
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-2">Horaires</h3>
                        <p className="font-semibold">
                            {`Association "Aide aux animaux"`}
                        </p>
                        <p className="text-gray-700">
                            Lundi au Dimanche <br />
                            9h00 - 19h00
                        </p>
                        <p className="text-gray-700">
                            Standard téléphonique <br />
                            9h00 - 12h00 / 14h00 - 19h00
                        </p>
                        <p className="font-semibold mt-6">
                            Structure pédagogique
                        </p>
                        <p className="text-gray-700">
                            Mercredi ou Dimanche<br />
                            Jours fériés <br />
                            Uniquement sur RDV
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-2">Nous contacter</h3>
                        <p className="text-gray-700">
                            📧 secoursfrancaispouranimaux@gmail.com<br />
                            📞 06 69 97 76 41
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-2">Suivez-nous</h3>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com/lesphenatres" className="text-blue-600 hover:underline">Facebook</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}