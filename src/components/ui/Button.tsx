import React from 'react';
import { clsx } from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className,
  children,
  icon,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";
  
  const variants = {
    primary: "bg-[#473BF0] text-white hover:bg-[#3b2fc9] focus:ring-[#473BF0]", // Based on design blue
    secondary: "bg-[#EBF2FF] text-[#473BF0] hover:bg-[#dbe7ff] focus:ring-[#473BF0]", // Light blue with blue text
    outline: "border border-[#E7E9ED] bg-transparent text-[#161C2D] hover:bg-gray-50 focus:ring-gray-200",
    ghost: "bg-transparent text-[#161C2D] hover:bg-gray-100 focus:ring-gray-200",
    link: "bg-transparent text-[#161C2D] hover:underline p-0 h-auto",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={clsx(
        baseStyles,
        variants[variant],
        sizes[size],
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {children}
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  );
};