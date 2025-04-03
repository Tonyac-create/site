'use client';

import { arrayFormules } from "@/app/utils/arrayFormules";

export default function ArrayFormules() {
    const formules = arrayFormules;

    return (
        <div className="w-full px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {formules.map((formule) => (
                    <div key={formule.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="bg-brown text-white p-4">
                            <h3 className="text-lg font-semibold">{formule.title}</h3>
                        </div>
                        <div className="p-4 space-y-3">
                            <p className="text-gray-600">{formule.line1}</p>
                            <p className="text-gray-600">{formule.line2}</p>
                            <p className="text-gray-600">{formule.line3}</p>
                            <p className="text-gray-600">{formule.line4}</p>
                            <p className="text-xl font-semibold text-brown">{formule.line5}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}