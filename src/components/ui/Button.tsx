import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  children, 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 ease-out rounded-sm";
  
  const variants = {
    primary: "bg-primary text-background hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]",
    secondary: "bg-surface text-primary hover:bg-gray-800 border border-border",
    outline: "bg-transparent text-primary border border-primary hover:bg-primary hover:text-background",
    ghost: "bg-transparent text-secondary hover:text-primary hover:bg-white/5",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base tracking-wide",
    lg: "px-8 py-4 text-lg tracking-wide",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
