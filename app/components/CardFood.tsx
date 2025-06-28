'use client'

import Image from "next/image";
import { useCounter } from "@/app/hooks/useCounter";
import { useInView } from "@/app/hooks/useInView";
import { useRef } from "react";

type Quantity = {
    number: string;
    unit?: string;
    text: string;
}

type CardFoodProps = {
    src: string | string[];
    quantity: Quantity | Quantity[];
}

const AnimatedNumber = ({ number }: { number: string }) => {
    const elementRef = useRef<HTMLSpanElement>(null);
    const isInView = useInView({
        ref: elementRef,
        threshold: 0.1,
        triggerOnce: true
    });

    const count = useCounter({
        end: parseInt(number),
        duration: 3000,
        shouldStart: isInView
    });

    return <span ref={elementRef}>{count}</span>;
}

export default function CardFood({ src, quantity }: CardFoodProps) {
    return (
        <article className="flex flex-col justify-center items-center gap-4 text-center w-80 h-80 border-2 border-brown rounded-full p-5">
            {Array.isArray(src) ? (
                <div className="flex flex-row justify-center items-center gap-2">
                    {src.map((item, index) => (
                        <Image
                            key={index}
                            src={item}
                            width={50}
                            height={50}
                            quality={100}
                            priority={true}
                            alt="help"
                            className="mt-5 object-contain [filter:invert(27%)_sepia(15%)_saturate(3610%)_hue-rotate(346deg)_brightness(92%)_contrast(90%)]"
                        />
                    ))}
                </div>
            ) : (
                <Image
                    src={src}
                    width={50}
                    height={50}
                    quality={100}
                    priority={true}
                    alt="help"
                    className="mt-5 object-contain [filter:invert(27%)_sepia(15%)_saturate(3610%)_hue-rotate(346deg)_brightness(92%)_contrast(90%)]"
                />
            )}
            {Array.isArray(quantity) ? (
                <div className="flex flex-col justify-center items-center gap-2">
                    {quantity.map((item, index) => (
                        <p key={index} className="text-xl">
                            <span className="text-brown text-2xl font-bold"><AnimatedNumber number={item.number} /></span>
                            {item.unit && <span className="text-brown font-bold ml-1">{item.unit}</span>}
                            <span className="ml-1">{item.text}</span>
                        </p>
                    ))}
                </div>
            ) : (
                <p className="text-xl">
                    <span className="text-brown text-2xl font-bold"><AnimatedNumber number={quantity.number} /></span>
                    {quantity.unit && <span className="text-brown font-bold ml-1">{quantity.unit}</span>}
                    <span className="ml-1">{quantity.text}</span>
                </p>
            )}
        </article>
    )
}