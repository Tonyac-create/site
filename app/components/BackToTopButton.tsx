'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

export default function BackToTopButton() {
    const [isVisible, setIsVisible] = useState(false)

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-[8.5rem] right-8 bg-brown border border-green rounded-full p-3 hover:scale-110 transition-all duration-300 z-50"
                    aria-label="Retour en haut de page"
                >
                    <Image
                        src="/icons/arrow-up-solid.svg"
                        width={30}
                        height={30}
                        alt='Retour en haut de page'
                        className='w-6 h-6 md:w-8 md:h-8'
                    />
                </button>
            )}
        </>
    )
}