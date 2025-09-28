import React from 'react';

interface PriceTableProps {
  className?: string;
}

export default function PriceTable({ className = '' }: PriceTableProps) {
  const priceData = [
    {
      designation: "Identification + examen Vétérinaire complet",
      cat: "60 €",
      dog: "60 €"
    },
    {
      designation: "Frais d'adoption",
      cat: "min. 30 €",
      dog: "min. 50 €"
    },
    {
      designation: "Frais d'abandon",
      cat: "30 €",
      dog: "50 €"
    },
    {
      designation: "Frais d'abandon femelle (+ de 3 mois)",
      cat: "125 €",
      dog: ""
    },
    {
      designation: "Pet sitting",
      cat: "10 € / jour",
      dog: ""
    },
    {
      designation: "Garde en famille d'accueil",
      cat: "75 € / mois",
      dog: ""
    },
    {
      designation: "Déplacement pour capture",
      cat: "30 € (max. 20 km)",
      dog: "30 € (max. 20 km)"
    }
  ];

  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-brown text-white">
            <th className="border border-gray-300 px-4 py-2 text-left">Désignation</th>
            <th className="border border-gray-300 px-4 py-2 text-center">Chat</th>
            <th className="border border-gray-300 px-4 py-2 text-center">Chien</th>
          </tr>
        </thead>
        <tbody>
          {priceData.map((row, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
              <td className="border border-gray-300 px-4 py-2 text-left">{row.designation}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">{row.cat}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">{row.dog}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
