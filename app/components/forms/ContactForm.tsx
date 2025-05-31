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

  return (
    <form action="https://formsubmit.co/erepocangele@gmail.com" method="POST" className="max-w-2xl mx-auto mt-16 px-6 bg-white">
      <h2 className="text-2xl text-brown font-bold mb-6">Une question ? Une envie d’aider ? Nous sommes là pour vous !</h2>
      <BaseFormFields 
        onFieldChange={handleFieldChange}
        values={formData}
      />
      <input type="hidden" name="_captcha" value="false" />
      <div className="mt-6">
        <button
          type="submit"
          className="w-1/2 font-semibold bg-brown text-green py-2 px-4 rounded-md hover:bg-green hover:text-brown transition-colors"
        >
          Envoyer
        </button>
      </div>
    </form>
  );
};
