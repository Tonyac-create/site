'use client'

import React, { useState } from 'react';
import { BaseFormFields } from './BaseFormFields';
import Image from 'next/image';

type FormationType = 'langage_canin' | 'certificat_aptitude';

interface FormData {
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  message?: string;
  raceChien: string;
  ageChien: string;
  raisonFormation: string;
  typeFormation: FormationType;
}

interface FormationFormProps {
  initialFormationType: FormationType;
}

export const FormationForm: React.FC<FormationFormProps> = ({ initialFormationType }) => {
  const [formData, setFormData] = useState<FormData>({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    message: '',
    raceChien: '',
    ageChien: '',
    raisonFormation: '',
    typeFormation: initialFormationType
  });

  const handleFieldChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <form action="https://formsubmit.co/secoursfrancaispouranimaux@gmail.com" method="POST" className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl text-brown font-bold mb-6">Demande de Formation</h2>

      <BaseFormFields
        onFieldChange={handleFieldChange}
        values={formData}
        requiredFields={{
          nom: true,
          prenom: true,
          email: true,
          telephone: true,
          message: false
        }}
      />

      <div className="mt-6 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Type de formation *</label>
          <select
            name="typeFormation"
            value={formData.typeFormation}
            onChange={(e) => handleFieldChange('typeFormation', e.target.value)}
            className="mt-1 block w-full rounded-md py-1 border border-brown shadow-sm focus:outline-none focus:ring-2 focus:ring-green focus:border-green transition-colors sm:text-sm"
            required
          >
            <option value="langage_canin">Formation au langage canin</option>
            <option value="certificat_aptitude">{`Formation pour le certificat d'aptitude`}</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Race du chien *</label>
          <input
            type="text"
            name="raceChien"
            value={formData.raceChien}
            onChange={(e) => handleFieldChange('raceChien', e.target.value)}
            className="mt-1 block w-full rounded-md pl-2 py-1 border border-brown shadow-sm focus:outline-none focus:ring-2 focus:ring-green focus:border-green transition-colors sm:text-sm"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Âge du chien *</label>
          <input
            type="text"
            name="ageChien"
            value={formData.ageChien}
            onChange={(e) => handleFieldChange('ageChien', e.target.value)}
            className="mt-1 block w-full rounded-md pl-2 py-1 border border-brown shadow-sm focus:outline-none focus:ring-2 focus:ring-green focus:border-green transition-colors sm:text-sm"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Raison de la demande de formation *</label>
          <textarea
            name="raisonFormation"
            value={formData.raisonFormation}
            onChange={(e) => handleFieldChange('raisonFormation', e.target.value)}
            rows={4}
            className="mt-1 block w-full rounded-md pl-2 py-1 border border-brown shadow-sm focus:outline-none focus:ring-2 focus:ring-green focus:border-green transition-colors sm:text-sm"
            required
          />
        </div>

        {formData.typeFormation === 'certificat_aptitude' && (
          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-md">
            <div className="flex items-start gap-2">
              <Image
                src="/icons/triangle.svg"
                width={20}
                height={20}
                alt="Warning"
                className="mt-1"
              />
              <div>
                <p className="text-yellow-800 font-medium mb-2">
                  {`Documents à fournir obligatoirement pour le certificat d'aptitude :`}
                </p>
                <ul className="list-disc list-inside text-yellow-800">
                  <li>{`Copie de votre pièce d'identité`}</li>
                  <li>Justificatif de domicile de moins de 3 mois</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="mt-6">
        <button
          type="submit"
          className="w-full bg-brown text-green py-2 px-4 rounded-md hover:bg-primary-dark transition-colors"
        >
          Envoyer la demande
        </button>
      </div>
    </form>
  );
};
