'use client'

import MenuNavigation from './MenuNavigation';
import { useState } from 'react';
import Image from 'next/image'

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-white fixed w-full top-0 z-50 pt-5 xl:py-5">
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className='flex justify-center items-center gap-1'>
                        <Image
                            src="/Logo_FondTransparent_SFPA.webp"
                            width={80}
                            height={80}
                            alt='Logo SFPA'
                        />
                        <h1 className='hidden sm:flex text-brown font-semibold font-lora text-xl'>{`Secours Français Pour Animaux`}</h1>
                    </div>
                    <nav className='hidden xl:flex space-x-8'>
                        <ul className='flex my-auto gap-11 text-xl ml-auto'>
                            <MenuNavigation setIsMenuOpen={setIsMenuOpen} />
                        </ul>
                    </nav>
                    <div className="xl:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="xl:hidden w-10 h-10"
                            aria-expanded={isMenuOpen}
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? (
                                <Image
                                    src="/icons/xmark.svg"
                                    width={36}
                                    height={36}
                                    alt=""
                                    className='w-9 h-9 transition-transform duration-400 rotate-90 hover:rotate-180'
                                />
                            ) : (
                                <Image
                                    src="/icons/bars.svg"
                                    width={36}
                                    height={36}
                                    alt=""
                                    className='w-9 h-9 transition-transform duration-400 hover:scale-110'
                                />
                            )}
                        </button>
                    </div>
                </div>
            </div>
            <div
                className={`xl:hidden pt-3 overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-[410px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <nav className="flex flex-col items-center fixed w-full bg-white shadow-lg transform transition-transform duration-700 ease-in-out">
                    <ul className={`flex flex-col mr-auto pl-6 gap-5 text-2xl mb-2 transition-all duration-700 transform 
                            ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
                        <MenuNavigation setIsMenuOpen={setIsMenuOpen} />
                    </ul>
                </nav>
            </div>
        </header>
    )
}
