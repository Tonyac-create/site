import Link from 'next/link';
import React from 'react';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'pdf';
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ href, children, className, variant = 'primary', onClick }) => {
  const baseClasses = 'px-4 py-2 text-center rounded-md transition duration-300 drop-shadow-btn';
  const variantClasses = 
    variant === 'primary' 
      ? 'bg-white text-brown border-2 border-green text-lg md:text-xl hover:bg-brown hover:text-green font-semibold' 
      : variant === 'secondary'
      ? 'bg-green text-brown border-2 border-green text-lg md:text-xl hover:bg-brown hover:text-green font-semibold'
      : 'text-brown text-lg md:text-xl hover:text-black';

  return (
    <Link href={href} className={`${baseClasses} ${variantClasses} ${className}`} onClick={onClick}>
      {children}
    </Link>
  );
};

export default Button;
