import Image from "next/image";
import { getSortedArticles } from "../lib/articles";

type Article = {
    author: string;
    date: string;
    image: string;
    slug: string;
    title: string;
    text1: string;
    text2: string;
    text3: string;
    text4: string;
    text5: string;
    text6: string;
}

interface ArticleBlogProps {
    limit?: number;
}

const truncateText = (text: string, maxLength: number = 200): string => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + "...";
};

export default function ArticleBlog({ limit }: ArticleBlogProps) {
    const articles: Article[] = getSortedArticles();
    const displayedArticles = limit ? articles.slice(0, limit) : articles;

    return (
        <div className="flex flex-wrap gap-9 mt-5 mb-9">
            {displayedArticles.map((article) => (
                <article key={article.slug} className="w-[300px]">
                    <div className="relative w-[300px] h-[200px]">
                        <Image
                            src={article.image}
                            fill
                            sizes="(max-width: 300px)"
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
                </article>
            ))}
        </div>
    )
}