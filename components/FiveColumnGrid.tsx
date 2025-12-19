import React from 'react';

interface FiveColumnGridProps {
  children: React.ReactNode;
  className?: string;
}

export default function FiveColumnGrid({ children, className = '' }: FiveColumnGridProps) {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 ${className}`}>
      {children}
    </div>
  );
}
