import React from 'react';

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

export default function CardTitle({ children, className = '' }: CardTitleProps) {
  return (
    <h3 className={`card-title ${className}`}>
      {children}
    </h3>
  );
}
