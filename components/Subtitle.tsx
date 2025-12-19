import React from 'react';

interface SubtitleProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function Subtitle({ children, className = '', size = 'md' }: SubtitleProps) {
  const sizeClasses = {
    sm: 'text-sm sm:text-base',
    md: 'text-base sm:text-lg md:text-xl',
    lg: 'text-lg sm:text-xl md:text-2xl'
  };

  return (
    <p className={`slide-subtitle ${sizeClasses[size]} ${className}`}>
      {children}
    </p>
  );
}
