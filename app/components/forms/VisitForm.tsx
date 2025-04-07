'use client'

import React, { useState } from 'react';
import { BaseFormFields } from './BaseFormFields';

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
    dateVisite: '',
    enfants: [] as ChildInfo[],
    nombreAdultes: 1
  });

  const handleFieldChange = (fieldName: string, value: string | ChildInfo[]) => {
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
          <label className="block text-sm font-medium text-gray-700">Date de visite</label>
          <input
            type="date"
            value={formData.dateVisite}
            onChange={(e) => handleFieldChange('dateVisite', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
            required
          />
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
          className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition-colors"
        >
          Réserver
        </button>
      </div>
    </form>
  );
};
