import { useState, useEffect } from 'react';

interface UseCounterProps {
    end: number;
    duration?: number;
    start?: number;
    shouldStart?: boolean;
}

export const useCounter = ({ 
    end, 
    duration = 2000, 
    start = 0,
    shouldStart = true 
}: UseCounterProps) => {
    const [count, setCount] = useState(start);

    useEffect(() => {
        if (!shouldStart) {
            setCount(start);
            return;
        }

        let startTime: number | null = null;
        let animationFrameId: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);

            // Fonction d'easing pour une animation plus naturelle
            const easeOutQuad = (t: number) => t * (2 - t);
            const easedPercentage = easeOutQuad(percentage);

            const currentCount = Math.floor(start + (end - start) * easedPercentage);
            setCount(currentCount);

            if (percentage < 1) {
                animationFrameId = requestAnimationFrame(animate);
            }
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [start, end, duration, shouldStart]);

    return count;
};
