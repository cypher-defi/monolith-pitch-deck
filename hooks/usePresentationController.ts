'use client';

import { useState, useEffect, useCallback } from 'react';

export default function usePresentationController(totalSlides: number) {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isClient, setIsClient] = useState(false);

  // Initialize from URL on first load (client-side only)
  useEffect(() => {
    setIsClient(true);

    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const slideParam = params.get('slide');

      if (slideParam) {
        const slideNum = parseInt(slideParam);
        if (slideNum >= 1 && slideNum <= totalSlides) {
          setCurrentSlide(slideNum);
        }
      }
    }
  }, []); // Run once on mount

  const goToSlide = useCallback((slideNumber: number) => {
    if (slideNumber >= 1 && slideNumber <= totalSlides) {
      setCurrentSlide(slideNumber);
    }
  }, [totalSlides]);

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => {
      if (prev < totalSlides) {
        return prev + 1;
      }
      return prev;
    });
  }, [totalSlides]);

  const previousSlide = useCallback(() => {
    setCurrentSlide(prev => {
      if (prev > 1) {
        return prev - 1;
      }
      return prev;
    });
  }, []);

  // Sync URL when slide changes
  useEffect(() => {
    if (typeof window !== 'undefined' && isClient) {
      const params = new URLSearchParams(window.location.search);
      params.set('slide', currentSlide.toString());
      window.history.replaceState({}, '', `?${params.toString()}`);
    }
  }, [currentSlide, isClient]);

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
