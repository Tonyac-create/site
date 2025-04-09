import ArticleBlog from "../ArticleBlog";

export default function HeroSectionBlog() {

    return (
        <section>
            <div className="bg-[url(/cochon_poules.webp)] w-full h-[600px] bg-fixed bg-center bg-cover"></div>
            <div className="mx-6 pt-16 lg:mx-28">
                <h2 className="text-brown text-4xl font-lora font-semibold mb-6">Nos action et initiatives</h2>
                <p className="text-xl mt-3 mb-5 w-[80%]">Chez Secours Français pour Animaux, nous agissons chaque jour pour secourir, soigner et offrir une nouvelle vie aux animaux en détresse. Sur cette page, retrouvez nos dernières actualités, nos histoires inspirantes et nos appels à mobilisation.</p>
                <ArticleBlog />
            </div>
        </section>
    );
}