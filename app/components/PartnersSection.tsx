import { partners } from "../utils/partners";
import CardPartners from "./CardPartners";

export default function PartnersSection() {
    return (
        <section className="my-14 px-6 pt-16 lg:px-28">
            <h2 className="text-brown text-4xl font-lora font-semibold mb-5">Nos partenaires</h2>
            <div className="flex flex-wrap justify-center gap-7 ">
                {partners.map((partner) => (
                    <CardPartners
                        key={partner.id}
                        id={partner.id}
                        name={partner.name}
                        url={partner.url}
                        image={partner.image}
                    />
                ))}
            </div>
        </section>
    )
}