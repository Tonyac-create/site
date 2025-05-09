import Image from 'next/image';

const FootprintPath = () => {
    const footprints = Array(5).fill(null);

    return (
        <div className="absolute inset-0 pointer-events-none z-30">
            {footprints.map((_, index) => (
                <Image
                    key={index}
                    src="/icons/patte.png"
                    width={60}
                    height={60}
                    alt=""
                    className="absolute object-contain opacity-0 animate-fadeIn rotate-90 pr-4"
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
