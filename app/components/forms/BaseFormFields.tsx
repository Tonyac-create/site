import React from 'react';

interface BaseFormFieldsProps {
  onFieldChange: (field: string, value: string) => void;
  values: {
    nom: string;
    prenom: string;
    email: string;
    telephone?: string;
    message?: string;
  };
  requiredFields?: {
    nom?: boolean;
    prenom?: boolean;
    email?: boolean;
    telephone?: boolean;
    message?: boolean;
  };
}

export const BaseFormFields: React.FC<BaseFormFieldsProps> = ({ onFieldChange, values, requiredFields = {
  nom: true,
  prenom: true,
  email: true,
  telephone: true,
  message: true
} }) => {
  return (
    <div className="space-y-4">
      <p className='text-brown font-semibold mt-3'>* Champs obligatoires</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="nom" className="block text-sm font-medium text-gray-700">
            Nom *
          </label>
          <input
            type="text"
            id="nom"
            name="nom"
            value={values.nom}
            onChange={(e) => onFieldChange('nom', e.target.value)}
            className="mt-1 block w-full rounded-md pl-2 py-1 border border-brown shadow-sm focus:outline-none focus:ring-2 focus:ring-green focus:border-green transition-colors sm:text-sm"
            required
          />
        </div>
        <div>
          <label htmlFor="prenom" className="block text-sm font-medium text-gray-700">
            Prénom *
          </label>
          <input
            type="text"
            id="prenom"
            name="prenom"
            value={values.prenom}
            onChange={(e) => onFieldChange('prenom', e.target.value)}
            className="mt-1 block w-full rounded-md pl-2 py-1 border border-brown shadow-sm focus:outline-none focus:ring-2 focus:ring-green focus:border-green transition-colors sm:text-sm"
            required
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={values.email}
          onChange={(e) => onFieldChange('email', e.target.value)}
          className="mt-1 block w-full rounded-md pl-2 py-1 border border-brown shadow-sm focus:outline-none focus:ring-2 focus:ring-green focus:border-green transition-colors sm:text-sm"
          required={requiredFields.email !== false}
        />
      </div>
      {values.telephone !== undefined && (
        <div>
          <label htmlFor="telephone" className="block text-sm font-medium text-gray-700">
            Téléphone *
          </label>
          <input
            type="tel"
            id="telephone"
            name="telephone"
            value={values.telephone}
            onChange={(e) => onFieldChange('telephone', e.target.value)}
            className="mt-1 block w-full rounded-md pl-2 py-1 border border-brown shadow-sm focus:outline-none focus:ring-2 focus:ring-green focus:border-green transition-colors sm:text-sm"
            minLength={10}
            required
          />
        </div>
      )}
      {values.message !== undefined && (
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message {requiredFields.message !== false && '*'}
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={values.message}
            onChange={(e) => onFieldChange('message', e.target.value)}
            className="mt-1 block w-full rounded-md pl-2 py-1 border border-brown shadow-sm focus:outline-none focus:ring-2 focus:ring-green focus:border-green transition-colors sm:text-sm"
            required={requiredFields.message !== false}
          />
        </div>
      )}
    </div>
  );
};
