'use client';

import { useEffect, useState, useRef } from 'react';
import { useCarousel } from '@/app/hooks/useCarousel';
import { useInView } from '@/app/hooks/useInView';
import Image from 'next/image';

interface CarouselProps {
    items: React.ReactNode[];
    itemsToShowDesktop?: number;
    itemsToShowTablet?: number;
    itemsToShowMobile?: number;
    gap?: number;
}

const MIN_SWIPE_DISTANCE = 50;

export default function Carousel({
    items,
    itemsToShowDesktop = 3,
    itemsToShowTablet = 2,
    itemsToShowMobile = 1,
    gap = 1.5
}: CarouselProps) {
    const [itemsToShow, setItemsToShow] = useState(itemsToShowDesktop);
    const [showSwipeIndicator, setShowSwipeIndicator] = useState(false);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);
    const carouselRef = useRef<HTMLDivElement>(null);
    const isInView = useInView({ ref: carouselRef, triggerOnce: true });

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

    useEffect(() => {
        if (isInView && window.innerWidth < 1024) {
            setShowSwipeIndicator(true);
            const timer = setTimeout(() => {
                setShowSwipeIndicator(false);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [isInView]);

    const onTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > MIN_SWIPE_DISTANCE;
        const isRightSwipe = distance < -MIN_SWIPE_DISTANCE;

        if (isLeftSwipe) {
            nextSlide();
        } else if (isRightSwipe) {
            prevSlide();
        }

        setTouchEnd(null);
        setTouchStart(null);
    };

    return (
        <div className="relative px-4 sm:px-16 lg:px-20" ref={carouselRef}>
            {showSwipeIndicator && (
                <div className="absolute inset-0 pointer-events-none z-20 flex items-center justify-center">
                    <div className="flex flex-col items-center gap-2 swipe-indicator animate-swipe">
                        <Image
                            src="/icons/swipe.svg"
                            width={50}
                            height={50}
                            alt=""
                            className=""
                        />
                    </div>
                </div>
            )}
            <div
                className="overflow-hidden"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
            >
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



            {/* Pagination */}
            <div className="flex flex-wrap justify-center gap-2 mt-6">
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
