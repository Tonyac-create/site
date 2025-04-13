'use client';

import Image from 'next/image';

const FootprintPath = () => {
    const footprints = Array(5).fill(null);

    return (
        <div className="hidden md:flex absolute w-full h-full pointer-events-none">
            {footprints.map((_, index) => (
                <Image
                    key={index}
                    src="/icons/empreinte_Elvis.png"
                    width={40}
                    height={40}
                    alt=""
                    className="absolute object-contain opacity-0 animate-fadeIn"
                    style={{
                        left: `${50 + (index * 30)}px`,
                        top: `${100 + (index * 40)}px`,
                        animationDelay: `${index * 0.5}s`
                    }}
                />
            ))}
        </div>
    );
};

export default FootprintPath;
