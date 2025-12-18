import React from 'react';

interface SlideContentProps {
  children: React.ReactNode;
  className?: string;
}

export default function SlideContent({ children, className = '' }: SlideContentProps) {
  return (
    <div className={`max-w-7xl w-full mx-auto ${className}`}>
      {children}
    </div>
  );
}
