'use client';

import Image from 'next/image';

const FootprintPath = () => {
    const footprints = Array(5).fill(null);

    return (
        <div className="hidden sm:flex absolute w-full h-full pointer-events-none">
            {footprints.map((_, index) => (
                <Image
                    key={index}
                    src="/icons/empreinte_Elvis.png"
                    width={40}
                    height={40}
                    alt=""
                    className="absolute object-contain opacity-0 animate-fadeIn rotate-90"
                    style={{
                        left: `${20 + (index * 60)}px`,
                        bottom: `${index % 2 === 0 ? 50 : 80}px`,
                        animationDelay: `${index * 0.5}s`,
                    }}
                />
            ))}
        </div>
    );
};

export default FootprintPath;
