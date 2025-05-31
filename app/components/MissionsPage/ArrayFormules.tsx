'use client';

import { arrayFormules } from "@/app/utils/arrayFormules";

export default function ArrayFormules() {
    const formules = arrayFormules;

    return (
        <div className="w-full px-4 py-8">
            <div className="flex flex-col md:flex-row justify-center gap-4">
                {formules.map((formule) => (
                    <div key={formule.id} className="bg-white border border-brown rounded-lg shadow-md overflow-hidden  max-w-[350px]">
                        <div className="flex justify-between bg-brown text-white p-4">
                            <h3 className="text-lg font-semibold">{formule.title}</h3>
                            <p className="text-lg font-bold italic text-green">{formule.price}</p>
                        </div>
                        <div className="p-4 space-y-3">
                            <p className="text-gray-600 font-semibold">{formule.line1}:</p>
                            <ul className="list-disc list-inside">
                                {formule.line2 && <li>{formule.line2}</li>}
                                {formule.line3 && <li>{formule.line3}</li>}
                                {formule.line4 && <li>{formule.line4}</li>}
                            </ul>
                            <p className="text-sm italic font-semibold text-brown">{formule.line5}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}