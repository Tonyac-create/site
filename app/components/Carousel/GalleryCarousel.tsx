'use client';

import { useState } from 'react';
import Image from 'next/image';

interface GalleryCarouselProps {
    images: string[];
    title: string;
}

export default function GalleryCarousel({ images, title }: GalleryCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const goToPrev = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="relative w-full h-full">
            <div className="relative w-full aspect-video">
                <Image
                    src={images[currentIndex]}
                    alt={`${title} - Photo ${currentIndex + 1}`}
                    fill
                    quality={100}
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 80vw"
                    priority={currentIndex === 0}
                />
            </div>

            {/* Navigation arrows */}
            <button
                onClick={goToPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-colors"
                aria-label="Image précédente"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-colors"
                aria-label="Image suivante"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Pagination */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/80 px-4 py-2 rounded-full">
                {currentIndex + 1} / {images.length}
            </div>
        </div>
    );
}
