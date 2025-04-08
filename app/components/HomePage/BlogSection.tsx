import ArticleBlog from "../ArticleBlog";
import Button from "../Button";

export default function BlogSection() {
    return (
        <section className="my-14 px-6 pt-16 lg:px-28">
            <h2 className="text-brown text-4xl font-lora font-semibold">Nos dernières actualités</h2>
            <ArticleBlog limit={5}/>
            <Button href="/blog" variant="secondary">{`Voir tous nos articles`}</Button>
        </section>
    )
}