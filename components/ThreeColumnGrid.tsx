import React from 'react';

interface ThreeColumnGridProps {
  children: React.ReactNode;
  className?: string;
}

export default function ThreeColumnGrid({ children, className = '' }: ThreeColumnGridProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 ${className}`}>
      {children}
    </div>
  );
}
