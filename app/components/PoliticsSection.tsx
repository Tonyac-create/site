export default function Confidentialite() {
    return (
      <section className="px-6 md:px-28 flex flex-col justify-center gap-9 my-40 tracking-wide">
        <h1 className="text-5xl font-bold mb-10">Politique de confidentialité</h1>
  
        <article>
          <h2 className="text-2xl font-bold text-brown mb-4">1. Introduction</h2>
          <p>
            La présente politique de confidentialité a pour but d’informer les utilisateurs du site www.sfpa-71.fr sur la manière dont le Secours Français pour animaux collecte, utilise, protège et partage les données personnelles.
          </p>
        </article>
  
        <article>
          <h2 className="text-2xl font-bold text-brown mb-4">2. Responsable du traitement</h2>
          <p>
            Le responsable du traitement des données personnelles est :  
            <br />
            <strong>Association Secours Français pour animaux</strong>  
            <br />
            {`Adresse : 7 Place de l'hôtel de ville 71170 Chauffailles `} 
            <br />
            Email : secoursfrancaispouranimaux@sfpa71.fr
          </p>
        </article>
  
        <article>
          <h2 className="text-2xl font-bold text-brown mb-4">3. Données collectées</h2>
          <p>Nous collectons uniquement les données nécessaires via nos formulaires, notamment :</p>
          <ul className="list-disc list-inside">
            <li>Nom et prénom</li>
            <li>Adresse e-mail</li>
            <li>Numéro de téléphone</li>
            <li>Adresse postale (si nécessaire pour certaines démarches)</li>
            <li>Autres informations fournies volontairement dans les formulaires</li>
          </ul>
        </article>
  
        <article>
          <h2 className="text-2xl font-bold text-brown mb-4">4. Finalité de la collecte</h2>
          <p>Les données sont collectées dans les buts suivants :</p>
          <ul className="list-disc list-inside">
            <li>Répondre à vos demandes (contact, adoption, bénévolat...)</li>
            <li>Envoyer des informations sur nos actions</li>
            <li>Gérer les relations avec nos donateurs ou partenaires</li>
          </ul>
        </article>
  
        <article>
          <h2 className="text-2xl font-bold text-brown mb-4">5. Conservation des données</h2>
          <p>
            Les données personnelles sont conservées pour une durée maximale de 3 ans après le dernier contact avec vous, sauf obligation légale contraire.
          </p>
        </article>
  
        <article>
          <h2 className="text-2xl font-bold text-brown mb-4">6. Partage des données</h2>
          <p>
            Les données personnelles ne sont en aucun cas vendues ou transmises à des tiers à des fins commerciales. Elles peuvent être partagées avec des prestataires techniques (hébergeur, outils d’emailing...) uniquement dans le cadre des finalités indiquées.
          </p>
        </article>
  
        <article>
          <h2 className="text-2xl font-bold text-brown mb-4">7. Vos droits</h2>
          <p>Conformément à la législation, vous disposez des droits suivants :</p>
          <ul className="list-disc list-inside">
            <li>Droit d’accès</li>
            <li>Droit de rectification</li>
            <li>Droit d’effacement</li>
            <li>Droit d’opposition</li>
            <li>Droit à la limitation du traitement</li>
            <li>Droit à la portabilité</li>
          </ul>
          <p className="mt-4">
            Pour exercer vos droits, vous pouvez nous contacter à l’adresse suivante :
            <br />
            <strong>secoursfrancaispouranimaux@sfpa71.fr</strong>
          </p>
        </article>
  
        <article>
          <h2 className="text-2xl font-bold text-brown mb-4">8. Sécurité des données</h2>
          <p>
            Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre toute perte, destruction, altération, accès ou divulgation non autorisée.
          </p>
        </article>
  
        <article>
          <h2 className="text-2xl font-bold text-brown mb-4">9. Cookies</h2>
          <p>
            Le site peut utiliser des cookies pour améliorer la navigation et réaliser des statistiques anonymes. Vous pouvez refuser l’installation des cookies en configurant votre navigateur.
          </p>
        </article>
  
        <article>
          <h2 className="text-2xl font-bold text-brown mb-4">10. Réclamation</h2>
          <p>
            Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la CNIL : <a href="https://www.cnil.fr" className="underline text-blue-600">www.cnil.fr</a>.
          </p>
        </article>
      </section>
    );
  }
  