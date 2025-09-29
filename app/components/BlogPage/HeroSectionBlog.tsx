'use client';

import Image from 'next/image';
import ArticleBlog from '../ArticleBlog';
import ArticleJournaux from './ArticleJournaux';
import Event from './Event';

export default function HeroSectionBlog() {

    return (
        <section>
            <div className="relative w-full">
                <div className="hidden sm:block w-full h-[500px] bg-[url(/Troupe_Elvis.jpeg)] bg-fixed bg-center bg-cover bg-no-repeat"></div>
                <Image
                    src="/Troupe_Elvis.jpeg"
                    width={1024}
                    height={500}
                    quality={100}
                    priority={true}
                    alt="Troupe Elvis"
                    className="block sm:hidden w-full h-auto object-cover"
                />
            </div>
            <div className="mx-6 pt-16 lg:mx-28">
                <h2 className="text-brown text-4xl font-lora font-semibold mb-6">Nos action et initiatives</h2>
                <p className="text-xl mt-3 mb-5 w-[80%]">Chez Secours Français pour Animaux, nous agissons chaque jour pour secourir, soigner et offrir une nouvelle vie aux animaux en détresse. Sur cette page, retrouvez nos dernières actualités, nos histoires inspirantes et nos appels à mobilisation.</p>
                <Event />
                <ArticleJournaux />
                <h3 className="text-brown text-2xl font-lora font-semibold mb-6">Nos articles</h3>
                <ArticleBlog />
            </div>
        </section>
    );
}