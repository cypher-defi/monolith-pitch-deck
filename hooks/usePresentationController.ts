'use client';

import { useState, useEffect, useCallback } from 'react';

export default function usePresentationController(totalSlides: number) {
  const [currentSlide, setCurrentSlide] = useState(1);

  const goToSlide = useCallback((slideNumber: number) => {
    if (slideNumber >= 1 && slideNumber <= totalSlides) {
      setCurrentSlide(slideNumber);
    }
  }, [totalSlides]);

  const nextSlide = useCallback(() => {
    if (currentSlide < totalSlides) {
      goToSlide(currentSlide + 1);
    }
  }, [currentSlide, totalSlides, goToSlide]);

  const previousSlide = useCallback(() => {
    if (currentSlide > 1) {
      goToSlide(currentSlide - 1);
    }
  }, [currentSlide, goToSlide]);

  // Add/remove 'active' class to slides
  useEffect(() => {
    // Remove active from all slides
    for (let i = 1; i <= totalSlides; i++) {
      const element = document.getElementById(`slide-${i}`);
      if (element) {
        element.classList.remove('active');
      }
    }

    // Add active to current slide
    const currentElement = document.getElementById(`slide-${currentSlide}`);
    if (currentElement) {
      currentElement.classList.add('active');
    }
  }, [currentSlide, totalSlides]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        previousSlide();
      } else if (e.key === 'Home') {
        goToSlide(1);
      } else if (e.key === 'End') {
        goToSlide(totalSlides);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, previousSlide, goToSlide, totalSlides]);

  return {
    currentSlide,
    totalSlides,
    nextSlide,
    previousSlide,
    goToSlide,
  };
}
