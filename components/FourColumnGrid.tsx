import React from 'react';

interface FourColumnGridProps {
  children: React.ReactNode;
  className?: string;
}

export default function FourColumnGrid({ children, className = '' }: FourColumnGridProps) {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 ${className}`}>
      {children}
    </div>
  );
}
