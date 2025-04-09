import ArrayFormules from "./ArrayFormules";
import GridMission from "./GridMission";

export default function HeroSectionMissions() {
    return (
        <section>
            <div className="bg-[url(/Elvis_cochon_2.webp)] w-full h-[600px] bg-fixed bg-bottom bg-cover"></div>
            <div className="mx-6 pt-16 lg:mx-28">
                <h2 className="text-brown text-4xl font-lora font-semibold mb-6">Chaque action compte : voici les nôtres</h2>
            </div>
            <GridMission />
            <ArrayFormules />
        </section>
    )
}