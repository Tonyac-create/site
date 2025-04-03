import { useState, useCallback } from 'react';

export const useCarousel = (itemsLength: number, itemsToShow: number) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const totalPages = Math.ceil(itemsLength / itemsToShow);
    const currentPage = Math.floor(currentIndex / itemsToShow) + 1;

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => 
            prevIndex + itemsToShow >= itemsLength ? 0 : prevIndex + itemsToShow
        );
    }, [itemsLength, itemsToShow]);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => 
            prevIndex - itemsToShow < 0 ? Math.max(0, itemsLength - itemsToShow) : prevIndex - itemsToShow
        );
    }, [itemsLength, itemsToShow]);

    const goToPage = useCallback((page: number) => {
        const newIndex = (page - 1) * itemsToShow;
        if (newIndex >= 0 && newIndex < itemsLength) {
            setCurrentIndex(newIndex);
        }
    }, [itemsLength, itemsToShow]);

    return {
        currentIndex,
        nextSlide,
        prevSlide,
        goToPage,
        currentPage,
        totalPages,
    };
};
