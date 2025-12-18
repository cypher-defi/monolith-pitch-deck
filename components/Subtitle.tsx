import React from 'react';

interface SubtitleProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function Subtitle({ children, className = '', size = 'md' }: SubtitleProps) {
  const sizeClasses = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  return (
    <p className={`slide-subtitle ${sizeClasses[size]} ${className}`}>
      {children}
    </p>
  );
}
