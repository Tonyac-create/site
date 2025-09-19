'use client';

import Image from "next/image";
import type { Article } from "../lib/articles";

interface ArticleDetailsProps {
    article: Article;
    onBack: () => void;
}

export default function ArticleDetails({ article, onBack }: ArticleDetailsProps) {
    return (
        <section className="mx-6 pt-16 pb-10 lg:mx-28">
            <button 
                onClick={onBack}
                className="flex items-center gap-2 text-brown hover:text-brown/80 mb-8"
            >
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M10 19l-7-7m0 0l7-7m-7 7h18" 
                    />
                </svg>
                Retour
            </button>

            <article className="max-w-3xl mx-auto">
                <div className="relative w-full aspect-[4/3] max-w-3xl mx-auto mb-6">
                    <Image
                        src={article.image}
                        fill
                        sizes="(max-width: 768px) 100vw, 1024px"
                        quality={100}
                        priority={true}
                        alt={article.title}
                        className="rounded-sm object-contain"
                    />
                </div>
                <h1 className="font-lora text-3xl font-semibold mb-4">{article.title}</h1>
                <div className="mb-6">
                    <p className="font-semibold">{article.author}</p>
                    <p className="text-gray-600">{article.date}</p>
                </div>
                <div className="bg-green h-1 w-3/4 mx-auto my-6"></div>
                <div className="space-y-4">
                    <p className="whitespace-pre-line">{article.text1}</p>
                    {article.text2 && <p className="whitespace-pre-line">{article.text2}</p>}
                    {article.text3 && <p className="whitespace-pre-line">{article.text3}</p>}
                    {article.text4 && <p className="whitespace-pre-line">{article.text4}</p>}
                    {article.text5 && <p className="whitespace-pre-line">{article.text5}</p>}
                    {article.text6 && <p className="whitespace-pre-line">{article.text6}</p>}
                </div>
            </article>
        </section>
    );
}
