import Image from "next/image";
import Link from "next/link";

export default function InvestigationSection() {

    return (
        <section>
            <div className="mx-6 pt-16 lg:mx-28">
                <h2 className="text-brown text-4xl font-lora font-semibold mb-6">{`Notre rôle d'enquêteur`}</h2>
                <p className="text-xl mt-3 mb-5 w-[80%]">Nos membres interviennent sur le terrain en tant qu’enquêtrices bénévoles, en lien avec la CNPA.
                    Elles enquêtent sur des situations de maltraitance ou de négligence animale, afin de défendre les droits des animaux et faire appliquer la loi.</p>
                <h3 className="text-brown text-xl font-lora font-semibold mb-4">Dans ce contexte, une enquêtrice pour une association ou en lien avec la CNPA, c’est une personne habilitée à :</h3>
                <ul className="list-disc list-inside text-lg">
                    <li>se rendre sur place quand il y a un signalement de mauvais traitements (chiens mal nourris, animaux enfermés, maltraités, etc.),</li>
                    <li>constater les faits, souvent avec photos, vidéos, témoignages,</li>
                    <li>rédiger un rapport transmis aux autorités compétentes (DDPP, gendarmerie, procureur…),</li>
                    <li>dans certains cas, accompagner une saisie d’animaux avec la police ou d’autres associations.</li>
                </ul>
                <Link href="https://www.cnpa-asso.fr/" target="_blank" className="flex gap-2 text-[#0866FF] text-lg mt-3 mb-8 underline underline-offset-4 hover:text-brown">
                    <Image
                        src="/partners/CNPA.png"
                        width={500}
                        height={500}
                        alt="CNPA"
                        className="object-contain mx-auto"
                    />
                </Link>
            </div>

        </section>
    );
}