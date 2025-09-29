'use client';

// import Image from 'next/image';
import { allTeam } from '@/app/utils/allTeam';

export default function ArchitectureTeam() {
    const leadership = allTeam.filter(member =>
        ["Fondatrice", "Présidente", "Secrétaire", "Trésorière"].includes(member.role)
    );

    const operations = allTeam.filter(member =>
        ["Enquêteurs", "Soigneurs animalier", "Chef des travaux et structures"].includes(member.role)
    );

    const support = allTeam.filter(member =>
        ["Développeuse web", "Chargée de communication", "Bénévoles", "Familles d'accueil"].includes(member.role)
    );

    return (
        <section className="w-full max-w-7xl mx-auto px-4 py-16">
            {/* Leadership - Top Level */}
            <div className="flex flex-wrap justify-center gap-8 mb-16">
                {leadership.map((member) => (
                    <div
                        key={member.id}
                        className="w-64 text-center mb-8"
                    >
                        <div className="relative w-60 h-60 mx-auto mb-4 bg-green rounded-full">
                            <div className="absolute inset-0 flex items-center justify-center text-4xl text-brown">
                                {member.name}
                            </div>
                        </div>
                        <p className="text-black text-lg font-medium mb-2">{member.role}</p>
                        <div className="text-sm text-gray-500">
                            {member.otheRoles.filter(role => role !== "").map((role, index) => (
                                <p key={index} className="mb-1">{role}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Operations - Middle Level */}
            <div className="flex flex-wrap justify-center gap-8 mb-16">
                {operations.map((member) => (
                    <div
                        key={member.id}
                        className="w-64 text-center mb-8"
                    >
                        <div className="relative w-56 h-56 mx-auto mb-4 bg-green rounded-full">
                            <div className="absolute inset-0 flex items-center justify-center text-3xl text-brown">
                                {member.name}
                            </div>
                        </div>
                        <p className="text-black text-lg font-medium mb-2">{member.role}</p>
                        <div className="text-sm text-gray-500">
                            {member.otheRoles.filter(role => role !== "").map((role, index) => (
                                <p key={index} className="mb-1">{role}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Support - Bottom Level */}
            <div className="flex flex-wrap justify-center gap-8">
                {support.map((member) => (
                    <div
                        key={member.id}
                        className="w-64 text-center mb-8"
                    >
                        <div className="relative w-52 h-52 mx-auto mb-4 bg-green rounded-full">
                            <div className="absolute inset-0 flex items-center justify-center text-2xl text-brown">
                                {member.name}
                            </div>
                        </div>
                        <p className="text-black text-lg font-medium mb-2">{member.role}</p>
                        <div className="text-sm text-gray-500">
                            {member.otheRoles.filter(role => role !== "").map((role, index) => (
                                <p key={index} className="mb-1">{role}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <p className='text-lg lg:text-2xl text-center mt-10'>Et de nombreux bénévoles polyvalents qui nous assistent au quotidien.</p>
        </section>
    );
}