import { foods } from "@/app/utils/foods";
import CardFood from "../CardFood";

export default function FoodSection() {
    return (
        <section className="mx-6 pt-8 lg:mx-28">
            <h3 className="text-brown text-3xl font-semibold mb-6">Nos besoins mensuels ?</h3>
            <div className="flex flex-wrap gap-8">
                {foods.map((item, index) => (
                    <CardFood
                        key={index}
                        src={item.src}
                        quantity={item.quantity}
                    />
                ))}
            </div>
        </section>
    )
}