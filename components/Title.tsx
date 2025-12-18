import React from 'react';

interface TitleProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function Title({ children, className = '', size = 'xl' }: TitleProps) {
  const sizeClasses = {
    sm: 'text-3xl',
    md: 'text-4xl',
    lg: 'text-5xl',
    xl: 'text-7xl'
  };

  return (
    <h1 className={`slide-title ${sizeClasses[size]} ${className}`}>
      {children}
    </h1>
  );
}
