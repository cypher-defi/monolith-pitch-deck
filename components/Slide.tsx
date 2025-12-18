'use client';

import React from 'react';

interface SlideProps {
  id: number;
  children: React.ReactNode;
  className?: string;
  background?: string;
}

export default function Slide({ id, children, className = '', background = 'bg-black' }: SlideProps) {
  return (
    <section
      id={`slide-${id}`}
      className={`slide ${background} ${className}`}
      data-slide={id}
    >
      {children}
    </section>
  );
}
