'use client'

import React, { useState } from 'react';
import { BaseFormFields } from './BaseFormFields';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    message: ''
  });

  const handleFieldChange = (fieldName: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [fieldName]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Ici, ajoutez la logique pour envoyer les données du formulaire
    console.log('Données du formulaire de contact:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Contactez-nous</h2>
      <BaseFormFields 
        onFieldChange={handleFieldChange}
        values={formData}
      />
      <div className="mt-6">
        <button
          type="submit"
          className="w-full bg-brown text-green py-2 px-4 rounded-md hover:bg-primary-dark transition-colors"
        >
          Envoyer
        </button>
      </div>
    </form>
  );
};
