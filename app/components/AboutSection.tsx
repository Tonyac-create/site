export default function AboutSection() {
    return (
        <section className="px-6 md:px-28 flex flex-col justify-center gap-9 my-40 tracking-wide">
            <p className="text-6xl font-bold">A propos</p>
            <div className='lg:flex'>
                <div>
                    <article>
                        <p className="text-2xl font-bold text-brown mb-4">Editeur du site</p>
                        <p>Secours Français pour animaux</p>
                        <p>Numéro de SIREN : 938 534 476 00016</p>
                        <p>Numéro de SIRET : 938 534 476</p>
                        <p>Numéro RNA : W713007887 </p>
                        <p>Responsable editorial : Nanou Dupuis</p>
                        <p>{`7 Place de l'hôtel de ville 71170 Chauffailles`}</p>
                        <p>Téléphone : 06 69 97 76 41</p>
                        <p>Email : secoursfrancaispouranimaux@gmail.com</p>
                        <p>Association loi 1901 enregistrée sous le numéro W713007887</p>
                        <p>Directeur de publication : Angélique Copéré</p>
                    </article>
                    <article>
                        <p className="text-2xl font-bold text-brown my-4">Hébergement</p>
                        <p>Vercel Inc.</p>
                        <p>340 S Lemon Ave #4133</p>
                        <p>Walnut, CA 91789</p>
                        <p>États-Unis</p>
                        <p>Email : support@vercel.com</p>
                        <p>Site Web : https://vercel.com</p>
                    </article>
                </div>
            </div>
            <article>
                <p className="text-2xl font-bold text-brown mb-4">{`Conditions d'utilisation`}</p>
                <p className="mb-6">{`Ce site (www.sfpa-71.fr) est proposé en différents langages web (HTML, HTML5, Javascript, CSS, etc…)
                    pour un meilleur confort d'utilisation et un graphisme plus agréable,
                    nous vous recommandons de recourir à des navigateurs modernes comme Microsoft Edge, Safari, Firefox, Google Chrome, etc…
                    Angélique Copéré met en œuvre tous les moyens dont elle dispose, pour assurer une information fiable et une mise à jour fiable de ses sites internet.
                    Toutefois, des erreurs ou omissions peuvent survenir. L'internaute devra donc s'assurer de l'exactitude des informations auprès de ,
                    et signaler toutes modifications du site qu'il jugerait utile. n'est en aucun cas responsable de l'utilisation faite de ces informations,
                    et de tout préjudice direct ou indirect pouvant en découler.`}</p>
                <p className="mb-6">{`Liens hypertextes : Les sites internet peuvent offrir des liens vers d’autres sites internet ou d’autres ressources
                    disponibles sur Internet. Nanou Dupuis ne dispose d'aucun moyen pour contrôler les sites en connexion avec ses sites
                    internet. ne répond pas de la disponibilité de tels sites et sources externes, ni ne la garantit. Elle ne peut être tenue
                    pour responsable de tout dommage, de quelque nature que ce soit, résultant du contenu de ces sites ou sources externes,
                    et notamment des informations, produits ou services qu’ils proposent, ou de tout usage qui peut être fait de ces éléments.
                    Les risques liés à cette utilisation incombent pleinement à l'internaute, qui doit se conformer à leurs conditions d'utilisation.`}</p>
                <p className="mb-6">{`Les utilisateurs, les abonnés et les visiteurs des sites internet de ne peuvent mettre en place un hyperlien en direction de ce site
                    sans l'autorisation expresse et préalable de Nanou Dupuis.`}</p>
                <p>{`Dans l'hypothèse où un utilisateur ou visiteur souhaiterait mettre en place un hyperlien en direction d’un des sites internet
                    de Nanou Dupuis, il lui appartiendra d'adresser un email accessible sur le site afin de formuler sa demande de mise en place
                    d'un hyperlien. Nanou Dupuis se réserve le droit d’accepter ou de refuser un hyperlien sans avoir à en justifier sa décision.`}</p>
            </article>
            <article>
                <p className="text-2xl font-bold text-brown mb-4">Propriété intellectuelle</p>
                <p className="mb-6">{`Tout le contenu du présent sur le site www.sfpa-71.fr, incluant, de façon non limitative,
                    les graphismes, images, textes, vidéos, animations, sons, logos, gifs et icônes ainsi que leur mise en forme sont
                    la propriété exclusive de la société à l'exception des marques, logos ou contenus appartenant à d'autres sociétés partenaires ou auteurs.`}</p>
                <p>{`Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle,
                    de ces différents éléments est strictement interdite sans l'accord exprès par écrit de Nanou Dupuis. Cette représentation ou reproduction,
                    par quelque procédé que ce soit, constitue une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété
                    intellectuelle. Le non-respect de cette interdiction constitue une contrefaçon pouvant engager la responsabilité civile et pénale du
                    contrefacteur. En outre, les propriétaires des Contenus copiés pourraient intenter une action en justice à votre encontre.`}</p>
            </article>
            <article>
                <p className="text-2xl font-bold text-brown mb-4">Données personnelles</p>
                <p className="mb-6">
                    Les informations recueillies à travers les formulaires présents sur ce site font l’objet d’un traitement informatisé destiné à [indiquer la finalité, ex. : la gestion des demandes d’information, des adoptions, ou la gestion des bénévoles]. Le destinataire des données est : Secours Français pour animaux.
                </p>
                <p className="mb-6">
                    Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi « Informatique et Libertés », vous disposez d’un droit d’accès, de rectification, de suppression, d’opposition, de limitation du traitement et de portabilité de vos données.
                </p>
                <p className="mb-6">
                   {` Vous pouvez exercer ces droits en nous contactant à l'adresse suivante : secoursfrancaispouranimaux@gmail.com.`}
                </p>
                <p>
                    {`Vos données ne sont en aucun cas cédées à des tiers et sont conservées pour une durée n'excédant pas [indiquer la durée : ex. 3 ans après la dernière interaction].`}
                </p>
            </article>
        </section>
    )
}