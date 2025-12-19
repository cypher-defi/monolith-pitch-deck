import React from 'react';

interface TitleProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function Title({ children, className = '', size = 'xl' }: TitleProps) {
  const sizeClasses = {
    sm: 'text-xl sm:text-2xl md:text-3xl',
    md: 'text-2xl sm:text-3xl md:text-4xl',
    lg: 'text-3xl sm:text-4xl md:text-5xl',
    xl: 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl'
  };

  return (
    <h1 className={`slide-title ${sizeClasses[size]} ${className}`}>
      {children}
    </h1>
  );
}
