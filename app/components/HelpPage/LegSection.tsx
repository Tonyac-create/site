'use client';

import Button from "../Button";

export default function LegSection() {
    return (
        <section className="py-10 mx-6 pt-8 lg:mx-28">
            <h2 className="text-brown text-3xl font-lora font-semibold mb-6">Faire un Legs au Secours Français Pour Animaux</h2>
            <p className="text-xl mt-3 mb-1 w-[80%]">Prévoir un legs dans votre testament est un geste fort et solidaire.
                Il permet de soutenir durablement la mission du Secours Français Pour Animaux
                et d’offrir une seconde chance aux animaux victimes d’abandon, de maltraitance ou en détresse.
            </p>
            <p className="text-xl mt-3 mb-5 w-[80%]">Faire un legs n’impacte en rien votre situation actuelle :
                il ne prend effet qu’après votre décès, et vous pouvez modifier votre testament à tout moment.</p>
            <Button href="/pdf/Legs.pdf" variant="pdf">Faire un legs (pdf)</Button>
        </section>
    );
}