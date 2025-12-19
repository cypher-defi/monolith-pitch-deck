'use client';

import React from 'react';

interface NavControlsProps {
  currentSlide: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
}

export default function NavControls({ currentSlide, totalSlides, onPrevious, onNext }: NavControlsProps) {
  return (
    <div className="nav-controls touch-manipulation">
      <button
        onClick={onPrevious}
        disabled={currentSlide === 1}
        className="nav-btn touch-manipulation active:scale-95 transition-transform"
        aria-label="Previous slide"
      >
        ← Previous
      </button>

      <span className="slide-number">
        {currentSlide} / {totalSlides}
      </span>

      <button
        onClick={onNext}
        disabled={currentSlide === totalSlides}
        className="nav-btn touch-manipulation active:scale-95 transition-transform"
        aria-label="Next slide"
      >
        Next →
      </button>
    </div>
  );
}
