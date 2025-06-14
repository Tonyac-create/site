'use client';

import { useEffect } from 'react';
import GalleryCarousel from '../Carousel/GalleryCarousel';


interface GalleryModalProps {
    isOpen: boolean;
    onClose: () => void;
    images: string[];
    title: string;
}

export default function GalleryModal({ isOpen, onClose, images, title }: GalleryModalProps) {
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;



    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
            <div className="relative w-full max-w-6xl mx-4 bg-white rounded-lg p-4">
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 z-10 text-gray-500 hover:text-gray-700"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <h3 className="text-2xl font-bold text-brown mb-4">{title}</h3>
                <div className="relative">
                    <GalleryCarousel images={images} title={title} />
                </div>
            </div>
        </div>
    );
}
