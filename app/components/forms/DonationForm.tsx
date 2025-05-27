'use client'

import React, { useState } from 'react';
import { BaseFormFields } from './BaseFormFields';
import Link from 'next/link';
import Image from 'next/image';

const DONATION_TYPES = [
  {
    price: '10 €',
    title: 'Membre adhérent'
  },
  {
    price: '25 €',
    title: 'Membre bienfaiteur'
  },
  {
    price: '75 €',
    title: "Membre d'honneur"
  },
  {
    price: '',
    title: 'Don libre'
  },
];

interface Address {
  rue: string;
  codePostal: string;
  ville: string;
}

interface FormData {
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  message: string;
  typeDon: string;
  montant?: string;
  adresse: Address;
}

export const DonationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    message: '',
    typeDon: '',
    montant: '',
    adresse: {
      rue: '',
      codePostal: '',
      ville: '',
    }
  });

  const handleFieldChange = (fieldName: string, value: string) => {
    if (fieldName.includes('.')) {
      const [parent, child] = fieldName.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...(prev[parent as keyof FormData] as Address),
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [fieldName]: value
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Ici, ajoutez la logique pour envoyer les données du formulaire
    console.log('Données du formulaire de don:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 my-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl text-brown font-bold mb-6">Remplissez ce formulaire pour devenir membre ou faire un don libre</h2>
      <Link href="/contact" className="flex gap-2 text-[#0866FF] text-lg mt-3 mb-5 underline underline-offset-4 hover:text-brown">
        En espèce sur place, prendre rendez-vous par téléphone ou envoyer un message
      </Link>
      <p>
        <Image
          src="/icons/triangle.svg"
          width={50}
          height={50}
          quality={100}
          priority={true}
          alt="Warning"
          className="object-contain"
        />
        {`Pour le paiement par virement, `}<span className='text-brown font-semibold'>{`vous recevrez la confirmation de votre don une fois le paiement effectué. `}</span> {`Veuillez suivre ces instructions :`}
      </p>
      <ul className='list-disc list-inside'>
        <li>Compte domicilié en Irlande, information importante à renseigner quand vous enregistrez le RIB</li>
        <li>Mettre en libellé votre nom et prénom</li>
        <li>IBAN : IE70 SUMU 9903 6511 5769 95</li>
        <li>BIC : SUMUIE22XXX</li>
      </ul>
      <BaseFormFields
        onFieldChange={handleFieldChange}
        values={formData}
      />

      <div className="mt-6 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Type de don</label>
          <select
            value={formData.typeDon}
            onChange={(e) => handleFieldChange('typeDon', e.target.value)}
            className="mt-1 block w-full rounded-md border py-1 border-brown shadow-sm focus:outline-none focus:ring-2 focus:ring-green focus:border-green transition-colors sm:text-sm"
            required
          >
            <option value="">Sélectionnez un type de don</option>
            {DONATION_TYPES.map((type) => (
              <option key={type.title} value={type.title}>{type.title} {type.price}</option>
            ))}
          </select>
        </div>

        {formData.typeDon === 'Don libre' && (
          <div>
            <label className="block text-sm font-medium text-gray-700">Montant du don (€)</label>
            <input
              type="number"
              min="0"
              step="0.01"
              value={formData.montant}
              onChange={(e) => handleFieldChange('montant', e.target.value)}
              className="mt-1 block w-full rounded-md pl-2 py-1 border border-brown shadow-sm focus:outline-none focus:ring-2 focus:ring-green focus:border-green transition-colors sm:text-sm"
              required
            />
          </div>
        )}

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Adresse</h3>

          <div>
            <label className="block text-sm font-medium text-gray-700">Rue</label>
            <input
              type="text"
              value={formData.adresse.rue}
              onChange={(e) => handleFieldChange('adresse.rue', e.target.value)}
              className="mt-1 block w-full rounded-md pl-2 py-1 border border-brown shadow-sm focus:outline-none focus:ring-2 focus:ring-green focus:border-green transition-colors sm:text-sm"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Code postal</label>
              <input
                type="text"
                value={formData.adresse.codePostal}
                onChange={(e) => handleFieldChange('adresse.codePostal', e.target.value)}
                className="mt-1 block w-full rounded-md pl-2 py-1 border border-brown shadow-sm focus:outline-none focus:ring-2 focus:ring-green focus:border-green transition-colors sm:text-sm"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Ville</label>
              <input
                type="text"
                value={formData.adresse.ville}
                onChange={(e) => handleFieldChange('adresse.ville', e.target.value)}
                className="mt-1 block w-full rounded-md pl-2 py-1 border border-brown shadow-sm focus:outline-none focus:ring-2 focus:ring-green focus:border-green transition-colors sm:text-sm"
                required
              />
            </div>
          </div>

        </div>
      </div>

      <div className="mt-6">
        <button
          type="submit"
          className="w-1/2 bg-brown text-green py-2 px-4 rounded-md font-semibold hover:bg-green hover:text-brown transition-colors"
        >
          Envoyer
        </button>
      </div>
    </form>
  );
};
