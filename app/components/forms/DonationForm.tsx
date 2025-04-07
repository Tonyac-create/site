'use client'

import React, { useState } from 'react';
import { BaseFormFields } from './BaseFormFields';

const DONATION_TYPES = [
  'Membre bienfaiteur',
  'Don ponctuel',
  'Don mensuel',
  'Don matériel'
];

export const DonationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    message: '',
    typeDon: '',
    adresse: {
      rue: '',
      codePostal: '',
      ville: '',
      pays: 'France'
    }
  });

  const handleFieldChange = (fieldName: string, value: string) => {
    if (fieldName.includes('.')) {
      const [parent, child] = fieldName.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent as keyof typeof prev],
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
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Faire un don</h2>
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
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
            required
          >
            <option value="">Sélectionnez un type de don</option>
            {DONATION_TYPES.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Adresse</h3>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Rue</label>
            <input
              type="text"
              value={formData.adresse.rue}
              onChange={(e) => handleFieldChange('adresse.rue', e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
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
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Ville</label>
              <input
                type="text"
                value={formData.adresse.ville}
                onChange={(e) => handleFieldChange('adresse.ville', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Pays</label>
            <input
              type="text"
              value={formData.adresse.pays}
              onChange={(e) => handleFieldChange('adresse.pays', e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
              required
            />
          </div>
        </div>
      </div>

      <div className="mt-6">
        <button
          type="submit"
          className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition-colors"
        >
          Envoyer
        </button>
      </div>
    </form>
  );
};
