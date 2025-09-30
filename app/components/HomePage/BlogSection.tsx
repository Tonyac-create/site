'use client';

import ArticleBlog from "../ArticleBlog";
import Button from "../Button";
import { usePlausible } from "next-plausible";

export default function BlogSection() {
    const plausible = usePlausible();
    return (
        <section className="my-14 px-6 pt-16 lg:px-28">
            <h2 className="text-brown text-4xl font-lora font-semibold">Nos dernières actualités</h2>
            <ArticleBlog limit={7}/>
            <Button href="/blog" variant="secondary" onClick={() => plausible('blog-button')}>{`Voir tous nos articles`}</Button>
        </section>
    )
}