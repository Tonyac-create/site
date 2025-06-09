import { useState, useEffect, RefObject } from 'react';

interface UseInViewProps {
    ref: RefObject<HTMLElement | null>;
    threshold?: number;
    rootMargin?: string;
    triggerOnce?: boolean;
}

export const useInView = ({
    ref,
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true
}: UseInViewProps): boolean => {
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const currentRef = ref.current;
        if (!currentRef) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                const isElementInView = entry.isIntersecting;
                setIsInView(isElementInView);

                // If triggerOnce is true and element is in view, disconnect the observer
                if (triggerOnce && isElementInView) {
                    observer.disconnect();
                }
            },
            {
                threshold,
                rootMargin,
            }
        );

        observer.observe(currentRef);

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [ref, threshold, rootMargin, triggerOnce]);

    return isInView;
};
