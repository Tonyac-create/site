import Link from 'next/link';
import React from 'react';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ href, children, className, variant = 'primary' }) => {
  const baseClasses = 'px-4 py-2 text-center rounded-md transition duration-300 font-semibold ';
  const variantClasses = variant === 'primary' ? 'bg-white text-brown md:text-2xl hover:bg-brown hover:text-green' : 'bg-brown text-green md:text-2xl hover:bg-brown hover:text-green';

  return (
    <Link href={href} className={`${baseClasses} ${variantClasses} ${className}`}>
      {children}
    </Link>
  );
};

export default Button;
