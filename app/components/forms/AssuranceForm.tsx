'use client';

import { useState } from 'react';
import { BaseFormFields } from './BaseFormFields';
import { arrayFormules } from '@/app/utils/arrayFormules';

interface AnimalInfo {
    nom: string;
    race: string;
    identification: string;
    age: string;
    genre: 'male' | 'femelle';
    dateNaissance?: string;
}

interface FormData {
    nom: string;
    prenom: string;
    email: string;
    telephone: string;
    formuleId: string;
    animal: AnimalInfo;
    message?: string;
}

export default function AssuranceForm() {
    const [formData, setFormData] = useState<FormData>({
        nom: '',
        prenom: '',
        email: '',
        telephone: '',
        formuleId: '',
        animal: {
            nom: '',
            race: '',
            identification: '',
            age: '',
            genre: 'male',
            dateNaissance: ''
        },
        message: ''
    });

    const handleFieldChange = (field: string, value: string) => {
        if (field.includes('.')) {
            const [parent, child] = field.split('.');
            setFormData(prev => {
                if (parent === 'animal') {
                    return {
                        ...prev,
                        animal: {
                            ...prev.animal,
                            [child]: value
                        }
                    };
                }
                return prev;
            });
        } else {
            setFormData(prev => ({
                ...prev,
                [field]: value
            }));
        }
    };

    const handleBaseFieldChange = (field: string, value: string) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Traitement du formulaire
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mt-16 px-6 bg-white">
            <h2 className="text-2xl text-brown font-bold mb-6">Formulaire d&apos;assurance coup dur</h2>
            
            {/* Champs de base */}
            <BaseFormFields
                onFieldChange={handleBaseFieldChange}
                values={{
                    nom: formData.nom,
                    prenom: formData.prenom,
                    email: formData.email,
                    telephone: formData.telephone,
                    message: formData.message
                }}
            />

            {/* Choix de la formule */}
            <div className="mt-6">
                <label htmlFor="formule" className="block text-sm font-medium text-gray-700">
                    Choisir votre formule
                </label>
                <select
                    id="formule"
                    value={formData.formuleId}
                    onChange={(e) => handleFieldChange('formuleId', e.target.value)}
                    className="mt-1 block w-full rounded-md py-1 border border-brown shadow-sm focus:outline-none focus:ring-2 focus:ring-green focus:border-green transition-colors sm:text-sm"
                    required
                >
                    <option value="">Sélectionnez une formule</option>
                    {arrayFormules.map((formule) => (
                        <option key={formule.id} value={formule.id}>
                            {formule.title} - {formule.price}
                        </option>
                    ))}
                </select>
            </div>

            {/* Informations sur l'animal */}
            <div className="mt-6">
                <h3 className="text-lg font-semibold text-brown mb-4">Informations sur l&apos;animal</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="animal.nom" className="block text-sm font-medium text-gray-700">
                            Nom de l&apos;animal
                        </label>
                        <input
                            type="text"
                            id="animal.nom"
                            value={formData.animal.nom}
                            onChange={(e) => handleFieldChange('animal.nom', e.target.value)}
                            className="mt-1 block w-full rounded-md pl-2 py-1 border border-brown shadow-sm focus:outline-none focus:ring-2 focus:ring-green focus:border-green transition-colors sm:text-sm"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="animal.race" className="block text-sm font-medium text-gray-700">
                            Race
                        </label>
                        <input
                            type="text"
                            id="animal.race"
                            value={formData.animal.race}
                            onChange={(e) => handleFieldChange('animal.race', e.target.value)}
                            className="mt-1 block w-full rounded-md pl-2 py-1 border border-brown shadow-sm focus:outline-none focus:ring-2 focus:ring-green focus:border-green transition-colors sm:text-sm"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="animal.identification" className="block text-sm font-medium text-gray-700">
                            Numéro d&apos;identification
                        </label>
                        <input
                            type="text"
                            id="animal.identification"
                            value={formData.animal.identification}
                            onChange={(e) => handleFieldChange('animal.identification', e.target.value)}
                            className="mt-1 block w-full rounded-md pl-2 py-1 border border-brown shadow-sm focus:outline-none focus:ring-2 focus:ring-green focus:border-green transition-colors sm:text-sm"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="animal.age" className="block text-sm font-medium text-gray-700">
                            Âge
                        </label>
                        <input
                            type="text"
                            id="animal.age"
                            value={formData.animal.age}
                            onChange={(e) => handleFieldChange('animal.age', e.target.value)}
                            className="mt-1 block w-full rounded-md pl-2 py-1 border border-brown shadow-sm focus:outline-none focus:ring-2 focus:ring-green focus:border-green transition-colors sm:text-sm"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="animal.genre" className="block text-sm font-medium text-gray-700">
                            Genre
                        </label>
                        <select
                            id="animal.genre"
                            value={formData.animal.genre}
                            onChange={(e) => handleFieldChange('animal.genre', e.target.value)}
                            className="mt-1 block w-full rounded-md py-1 border border-brown shadow-sm focus:outline-none focus:ring-2 focus:ring-green focus:border-green transition-colors sm:text-sm"
                            required
                        >
                            <option value="male">Mâle</option>
                            <option value="femelle">Femelle</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="animal.dateNaissance" className="block text-sm font-medium text-gray-700">
                            Date de naissance (si connue)
                        </label>
                        <input
                            type="date"
                            id="animal.dateNaissance"
                            value={formData.animal.dateNaissance}
                            onChange={(e) => handleFieldChange('animal.dateNaissance', e.target.value)}
                            className="mt-1 block w-full rounded-md pl-2 py-1 border border-brown shadow-sm focus:outline-none focus:ring-2 focus:ring-green focus:border-green transition-colors sm:text-sm"
                        />
                    </div>
                </div>
            </div>

            {/* Message vaccinations */}
            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-md">
                <p className="text-yellow-800 font-medium">
                    ⚠️ Vaccinations obligatoires
                </p>
            </div>

            {/* Bouton de soumission */}
            <div className="mt-6 mb-6">
                <button
                    type="submit"
                    className="w-full bg-brown text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-brown focus:ring-offset-2"
                >
                    Envoyer la demande
                </button>
            </div>
        </form>
    );
}
