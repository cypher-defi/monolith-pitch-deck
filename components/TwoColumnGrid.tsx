import React from 'react';

interface TwoColumnGridProps {
  children: React.ReactNode;
  className?: string;
}

export default function TwoColumnGrid({ children, className = '' }: TwoColumnGridProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 ${className}`}>
      {children}
    </div>
  );
}
