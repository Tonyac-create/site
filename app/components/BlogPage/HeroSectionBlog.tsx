'use client';

import Image from 'next/image';
import ArticleBlog from '../ArticleBlog';
import { useState } from 'react';

export default function HeroSectionBlog() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <section>
            <div className="bg-[url(/cochon_poules.webp)] w-full h-[600px] bg-fixed bg-center bg-cover"></div>
            <div className="mx-6 pt-16 lg:mx-28">
                <h2 className="text-brown text-4xl font-lora font-semibold mb-6">Nos action et initiatives</h2>
                <p className="text-xl mt-3 mb-5 w-[80%]">Chez Secours Français pour Animaux, nous agissons chaque jour pour secourir, soigner et offrir une nouvelle vie aux animaux en détresse. Sur cette page, retrouvez nos dernières actualités, nos histoires inspirantes et nos appels à mobilisation.</p>
                <h3 className="text-brown text-2xl font-lora font-semibold mb-6">Articles de journaux</h3>
                <div className="flex flex-col lg:flex-row gap-10">
                    <div className="cursor-pointer" onClick={() => setSelectedImage('/article_journal.png')}>
                        <Image
                            src="/article_journal.png"
                            width={400}
                            height={300}
                            priority={true}
                            quality={100}
                            alt='article journal'
                            className="mb-10 object-contain hover:opacity-90 transition-opacity"
                        />
                    </div>
                    <div className="cursor-pointer" onClick={() => setSelectedImage('/article_journal_2.jpg')}>
                        <Image
                            src="/article_journal_2.jpg"
                            width={400}
                            height={300}
                            priority={true}
                            quality={100}
                            alt='article journal'
                            className="mb-10 object-contain hover:opacity-90 transition-opacity"
                        />
                    </div>
                </div>

                {/* Modal pour l'image agrandie */}
                {selectedImage && (
                    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={() => setSelectedImage(null)}>
                        <div className="relative max-w-4xl w-full">
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedImage(null);
                                }}
                                className="absolute -top-10 right-0 text-white hover:text-gray-300 text-4xl"
                                aria-label="Fermer"
                            >
                                ×
                            </button>
                            <div onClick={(e) => e.stopPropagation()} className="relative">
                                <Image
                                    src={selectedImage}
                                    width={1200}
                                    height={900}
                                    quality={100}
                                    priority={true}
                                    alt='Article journal agrandi'
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>
                )}
                <h3 className="text-brown text-2xl font-lora font-semibold mb-6">Nos articles</h3>
                <ArticleBlog />
            </div>
        </section>
    );
}