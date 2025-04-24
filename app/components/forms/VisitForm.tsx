'use client'

import React, { useState } from 'react';
import { BaseFormFields } from './BaseFormFields';
import Link from 'next/link';
import Image from 'next/image';

const VISITE_TYPES = [
  'Visite guidée',
  'Visite libre',
  'Visite thématique'
];

interface ChildInfo {
  age: string;
}

export const VisitForm: React.FC = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    message: '',
    typeVisite: '',
    dateVisite: [] as string[],
    enfants: [] as ChildInfo[],
    nombreAdultes: 1
  });

  const handleFieldChange = (fieldName: string, value: string | ChildInfo[] | string[]) => {
    setFormData(prev => ({
      ...prev,
      [fieldName]: value
    }));
  };

  const handleChildrenChange = (index: number, age: string) => {
    const newEnfants = [...formData.enfants];
    newEnfants[index] = { age };
    handleFieldChange('enfants', newEnfants);
  };

  const addChild = () => {
    setFormData(prev => ({
      ...prev,
      enfants: [...prev.enfants, { age: '' }]
    }));
  };

  const removeChild = (index: number) => {
    setFormData(prev => ({
      ...prev,
      enfants: prev.enfants.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Ici, ajoutez la logique pour envoyer les données du formulaire
    console.log('Données du formulaire de visite:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Réserver une visite</h2>
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
        {`Pour le paiement par virement, `}<span className='text-brown font-semibold'>{`vous recevrez la confirmation de l'événement une fois le paiement effectué. `}</span> {`Veuillez suivre ces instructions :`}
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
          <label className="block text-sm font-medium text-gray-700">Type de visite</label>
          <select
            value={formData.typeVisite}
            onChange={(e) => handleFieldChange('typeVisite', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
            required
          >
            <option value="">Sélectionnez un type de visite</option>
            {VISITE_TYPES.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Dates de visite</label>
          <div className="space-y-2">
            {formData.dateVisite.map((date, index) => (
              <div key={index} className="flex items-center space-x-2">
                <input
                  type="date"
                  value={date}
                  onChange={(e) => {
                    const newDates = [...formData.dateVisite];
                    newDates[index] = e.target.value;
                    handleFieldChange('dateVisite', newDates);
                  }}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                  required
                />
                <button
                  type="button"
                  onClick={() => {
                    const newDates = formData.dateVisite.filter((_, i) => i !== index);
                    handleFieldChange('dateVisite', newDates);
                  }}
                  className="text-red-600 hover:text-red-800"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => handleFieldChange('dateVisite', [...formData.dateVisite, ''])}
              className="mt-2 inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Ajouter une date
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">{`Nombre d'adultes`}</label>
          <input
            type="number"
            min="1"
            value={formData.nombreAdultes}
            onChange={(e) => handleFieldChange('nombreAdultes', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
            required
          />
        </div>

        <div>
          <div className="flex justify-between items-center">
            <label className="block text-sm font-medium text-gray-700">Enfants</label>
            <button
              type="button"
              onClick={addChild}
              className="text-primary hover:text-primary-dark text-sm"
            >
              + Ajouter un enfant
            </button>
          </div>

          {formData.enfants.map((enfant, index) => (
            <div key={index} className="mt-2 flex items-center gap-2">
              <input
                type="number"
                placeholder="Âge"
                min="0"
                max="17"
                value={enfant.age}
                onChange={(e) => handleChildrenChange(index, e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
              />
              <button
                type="button"
                onClick={() => removeChild(index)}
                className="text-red-500 hover:text-red-700"
              >
                Supprimer
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <button
          type="submit"
          className="w-full bg-brown text-green py-2 px-4 rounded-md hover:bg-primary-dark transition-colors"
        >
          Réserver
        </button>
      </div>
    </form>
  );
};
