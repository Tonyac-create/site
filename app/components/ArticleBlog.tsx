'use client'

import Image from "next/image";
import { getSortedArticles } from "../lib/articles";
import { useState, useEffect } from "react";
import ArticleDetails from "./ArticleDetails";
import type { Article } from "../lib/articles";

interface ArticleBlogProps {
    limit?: number;
}

const truncateText = (text: string, maxLength: number = 200): string => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + "...";
};

export default function ArticleBlog({ limit }: ArticleBlogProps) {
    const [articles, setArticles] = useState<Article[]>([]);
    const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const fetchedArticles = await getSortedArticles();
                setArticles(fetchedArticles);
            } catch (err) {
                console.error('Error loading articles:', err);
                setError('Erreur lors du chargement des articles');
            } finally {
                setIsLoading(false);
            }
        };

        fetchArticles();
    }, []);

    if (error) {
        return <div className="text-red-500 text-center py-4">{error}</div>;
    }

    if (isLoading) {
        return <div className="text-center py-4">Chargement des articles...</div>;
    }

    const displayedArticles = limit ? articles.slice(0, limit) : articles;

    return (
        <div className="w-full min-h-screen flex flex-col">
            {selectedArticle ? (
                <div className="flex-grow bg-white">
                    <ArticleDetails article={selectedArticle} onBack={() => setSelectedArticle(null)} />
                </div>
            ) : (
                <div className="flex-grow flex flex-wrap gap-8 justify-center mt-5 mb-9">
                    {displayedArticles.map((article) => (
                <article key={article.slug} className="w-[300px]">
                    <div className="relative w-[300px] h-[300px]">
                        <Image
                            src={article.image}
                            fill
                            quality={100}
                            priority={true}
                            alt={article.title}
                            className="rounded-sm object-cover"
                        />
                    </div>
                    <h2 className="font-lora text-xl font-semibold">{article.title}</h2>
                    <p>{article.author}</p>
                    <p className="text-gray-600">{article.date}</p>
                    <div className="bg-green h-1 w-3/4 mx-auto my-2"></div>
                    <p>{truncateText(article.text1)}</p>
                    <button 
                        onClick={() => setSelectedArticle(article)}
                        className="mt-4 px-4 py-2 bg-brown text-white rounded-md hover:bg-brown/80 transition-colors"
                    >
                        Voir plus
                    </button>
                </article>
                ))}
                </div>
            )}
        </div>
    )
}