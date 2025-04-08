import { whyHelp } from "@/app/utils/whyHelp";
import CardWhyHelp from "./CardWhyHelp";

export default function WhyHelpSection() {
    return (
        <section className="mx-6 pt-8 lg:mx-28">
            <h3 className="text-brown text-3xl font-semibold mb-6">Pourquoi nous aider ?</h3>
            <div className="flex flex-wrap gap-4">
                {whyHelp.map((item, index) => (
                    <CardWhyHelp
                        key={index}
                        src={item.src}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </div>
        </section>
    )
}