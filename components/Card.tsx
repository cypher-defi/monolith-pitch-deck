import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'primary' | 'secondary' | 'glass';
}

export default function Card({ children, className = '', variant = 'default' }: CardProps) {
  return (
    <div className={`card ${className}`}>
      {children}
    </div>
  );
}
