import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className='flex flex-col xl:flex-row justify-between items-center p-8'>
            <div className='flex flex-col justify-center items-center sm:flex-row gap-1'>
                <Image
                    src="/Logo_FondTransparent_SFPA.webp"
                    width={80}
                    height={80}
                    quality={100}
                    priority={true}
                    alt='Logo SFPA'
                />
                <div className='flex flex-col'>
                    <h1 className='text-brown font-semibold font-lora text-xl'>{`Secours Français Pour Animaux`}</h1>
                    <p>{`7 place de l'hotel de ville 71170 Chauffailles`}</p>
                    <p>Tél: 06 69 97 76 41</p>
                    <p>Email : secoursfrancaispouranimaux@gmail.com</p>
                </div>
            </div>
            <div className='mt-5 xl:mt-0'>
                <Link
                    href="https://www.facebook.com/secours.francais.pour.animaux"
                    target="_blank"
                    className="flex gap-2 text-[#0866FF] text-lg mt-3 mb-8 underline underline-offset-4 hover:text-brown">
                    <Image
                        src="/icons/facebook.svg"
                        width={15}
                        height={15}
                        quality={100}
                        priority={true}
                        alt=''
                        className="object-contain"
                    />
                    Suivez nous
                </Link>
            </div>
            <div>
                <Link
                    href="/mentions"
                    className="flex gap-2 text-brown text-lg underline underline-offset-4 hover:text-black">
                    Mentions légales
                </Link>
                <Link
                    href="/politics"
                    className="flex gap-2 text-brown text-lg underline underline-offset-4 hover:text-black">
                    Politique de confidentialité
                </Link>
            </div>
        </footer>
    )
}