'use client'
import { useState } from 'react';

export default function HeroSectionHistory() {
    const [isExpanded, setIsExpanded] = useState(false);
    const fullText = `Très jeune impliqué dans les animaux, j'ai commencé à l'âge de 19 ans en gardant des chiens pour éviter les abandons pendant les vacances. 
                Ensuite, dix ans plus tard, c'est lorsque j'ai découvert un chien blessé sur la route, qu'aucun vétérinaire ne voulait prendre en charge, que j'ai décidé de créer ma propre association. Aucun des propos que j'avais entendus ne m'a incité à abandonner cet animal, mais étant au RSA, je n'avais pas les ressources nécessaires pour faire opérer ce chien.
                Alors que c'était un week-end, j'ai ramené ce chien chez moi. Dès le lundi, j'ai contacté des associations près de chez moi, mais j'ai toujours entendu le même refrain : « Vous n'avez pas les moyens, remettez-le dans la rue".  J'étais outré de constater de telles actions d'associations prétendant apporter leur soutien aux animaux.
                Après cela, j'ai découvert une petite association fondée par une femme âgée qui s'occupait des chiens qu'elle gardait chez elle, sans aucun refuge, mais simplement sa petite maison pour apporter l'amour à tous ces abandonnés.
                Lorsque je lui ai raconté mon histoire, elle n'a pas hésité à me demander "trouver un vétérinaire qui souhaite bien le soigner, envoyez-moi le devis et je vous enverrai l'argent pour la totalité de la facture". J'étais tellement heureuse de constater que ce pauvre chien que j'avais recueilli allait pouvoir être soigné. Bien sûr, je n'ai pas recontacté les vétérinaires que j'avais rencontrés le samedi, mais j'ai trouvé une jeune vétérinaire qui venait de s'installer et qui a non seulement pris en charge les soins, mais ne nous a facturé que l'essentiel sans se faire payer elle-même!
                Après l'opération, nous avons découvert que ce chien avait été victime de maltraitance et que son handicap découle d'une fracture qui n'avait jamais été traitée. Il ne lui fallait que quelques jours pour le voir marcher correctement et surtout ne plus l'entendre pleurer à chaque pas qu'il faisait.
                Nous prenons donc la décision de rendre visite à cette femme qui nous avait apporté son aide afin de la remercier et de lui présenter ce chien qu'elle avait pu soigner.
                De là, nous avons développé une complicité profonde car nous avions le même but, à savoir le bien-être des animaux sans prendre en compte l'argent. 
                J'ai reçu un soutien considérable de sa part pour la création de mon association de défense des animaux. Nous collaborions étroitement, elle en Normandie et moi dans la Somme.
                La personne en question est Jeannette Henri, qui est décédée le 4 octobre (Journée mondiale des animaux) suite à une morsure de chien.
                J'ai partagé ces derniers instants avec elle sur son lit d'hôpital.
                Son association est toujours présente. Les personnes proches qui étaient ses bénévoles à son époque ont repris cette affaire.
                Et pour honorer cette femme extraordinaire que je garderai toujours en mémoire, j'ai souhaité donner à notre association un nom qui me rappelle le sien, sans pour autant le reproduire.`;

    return (
        <section>
            <div className="bg-[url(/Elvis_mange.webp)] w-full h-[600px] bg-fixed bg-center bg-cover"></div>
            <div className="mx-6 pt-16 lg:mx-28">
                <h2 className="text-brown text-4xl font-lora font-semibold mb-6">Découvrez qui nous sommes</h2>
                <h3 className="text-green text-3xl font-semibold mb-3.5 drop-shadow-xl">Notre histoire</h3>
                <div className="max-w-4xl">
                    <p className="text-lg leading-relaxed">
                        {isExpanded ? fullText : fullText.slice(0, 1000) + "..."}
                    </p>
                    <button 
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="cursor-pointer mt-4 px-6 py-2 text-brown rounded-md hover:text-green transition-colors"
                    >
                        {isExpanded ? "Voir moins" : "Lire la suite..."}
                    </button>
                </div>
            </div>
        </section>
    );
}