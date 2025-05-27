export default function HeroSectionHelp() {

    return (
        <section>
            <div className="bg-[url(/chien_canape.webp)] w-full h-[600px] bg-fixed bg-bottom bg-cover"></div>
            <div className="mx-6 pt-16 lg:mx-28">
                <h2 className="text-brown text-4xl font-lora font-semibold mb-6">Chaque geste compte, chaque vie mérite d’être sauvée.</h2>
                <p className="text-xl mt-3 mb-5 w-[80%]">Chaque jour, des milliers d’animaux sont abandonnés, maltraités ou en danger.
                     Grâce à votre générosité, nous pouvons les secourir, les soigner et leur offrir une seconde chance.
                    100% des dons et adhésions servent à financer nos actions de sauvetage, de soins et d’adoption.
                    Chaque euro compte : même un petit don fait une grande différence !</p>
            </div>
            <div className="flex flex-col justify-center pt-5 ml-6 lg:flex-row gap-11">
                <video src="/videos/pub.mp4" controls className="w-[500px] h-[300px]"></video>
                <video src="/videos/Renard.mp4" controls className="w-[500px] h-[300px]"></video>
            </div>
        </section>
    );
}