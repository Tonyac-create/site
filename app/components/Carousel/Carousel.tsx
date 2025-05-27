'use client';

import { useEffect, useState } from 'react';
import { useCarousel } from '@/app/hooks/useCarousel';
import Image from 'next/image';

interface CarouselProps {
    items: React.ReactNode[];
    itemsToShowDesktop?: number;
    itemsToShowTablet?: number;
    itemsToShowMobile?: number;
    gap?: number;
}

export default function Carousel({
    items,
    itemsToShowDesktop = 3,
    itemsToShowTablet = 2,
    itemsToShowMobile = 1,
    gap = 1.5
}: CarouselProps) {
    const [itemsToShow, setItemsToShow] = useState(itemsToShowDesktop);

    const {
        currentIndex,
        nextSlide,
        prevSlide,
        goToPage,
        currentPage,
        totalPages,
    } = useCarousel(items.length, itemsToShow);

    // Update items to show based on screen size
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setItemsToShow(itemsToShowMobile);
            } else if (window.innerWidth < 1024) {
                setItemsToShow(itemsToShowTablet);
            } else {
                setItemsToShow(itemsToShowDesktop);
            }
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [itemsToShowDesktop, itemsToShowTablet, itemsToShowMobile]);

    return (
        <div className="relative px-4 sm:px-16 lg:px-20">
            <div className="overflow-hidden">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                        transform: `translateX(-${(currentIndex * 100) / itemsToShow}%)`
                    }}
                >
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="flex-none"
                            style={{
                                width: `${100 / itemsToShow}%`,
                                padding: `0 ${gap}rem`
                            }}
                        >
                            <div className="h-full w-full flex items-center justify-center">
                                {item}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation buttons */}
            <button
                onClick={prevSlide}
                className="absolute left-2 sm:-left-12 lg:-left-16 top-1/2 -translate-y-1/2 bg-green text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center hover:bg-opacity-80 transition-colors z-10"
                aria-label="Previous slide"
            >
                <Image
                    src="/icons/chevron-left.svg"
                    width={15}
                    height={15}
                    quality={100}
                    priority={true}
                    alt=""
                    className="object-contain"
                />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-2 sm:-right-12 lg:-right-16 top-1/2 -translate-y-1/2 bg-green text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center hover:bg-opacity-80 transition-colors z-10"
                aria-label="Next slide"
            >
                <Image
                    src="/icons/chevron-right.svg"
                    width={15}
                    height={15}
                    quality={100}
                    priority={true}
                    alt=""
                    className="object-contain"
                />
            </button>

            {/* Pagination */}
            <div className="flex justify-center gap-2 mt-6">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                        key={page}
                        onClick={() => goToPage(page)}
                        className={`
                            w-8 h-8 rounded-full flex items-center justify-center transition-colors
                            ${currentPage === page
                                ? 'bg-brown text-white'
                                : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                            }
                        `}
                        aria-label={`Go to page ${page}`}
                        aria-current={currentPage === page ? 'page' : undefined}
                    >
                        {page}
                    </button>
                ))}
            </div>
        </div>
    );
}
