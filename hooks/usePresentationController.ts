"use client"

import { useState, useEffect, useCallback } from "react"

export default function usePresentationController(totalSlides: number) {
  const [currentSlide, setCurrentSlide] = useState(1)
  const [isClient, setIsClient] = useState(false)

  // List of all slide IDs (including 7.5)
  const slideIds = [
    1, 2, 3, 4, 5, 6, 7, 7.5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
  ]

  // Initialize from URL on first load (client-side only)
  useEffect(() => {
    setIsClient(true)

    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search)
      const slideParam = params.get("slide")

      if (slideParam) {
        const slideNum = parseFloat(slideParam)
        if (slideIds.includes(slideNum)) {
          setCurrentSlide(slideNum)
        }
      }
    }
  }, [])

  const goToSlide = useCallback((slideNumber: number | string) => {
    const num =
      typeof slideNumber === "string" ? parseFloat(slideNumber) : slideNumber
    if (slideIds.includes(num)) {
      setCurrentSlide(num)
    }
  }, [])

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => {
      const currentIndex = slideIds.indexOf(prev)
      if (currentIndex < slideIds.length - 1) {
        return slideIds[currentIndex + 1]
      }
      return prev
    })
  }, [])

  const previousSlide = useCallback(() => {
    setCurrentSlide((prev) => {
      const currentIndex = slideIds.indexOf(prev)
      if (currentIndex > 0) {
        return slideIds[currentIndex - 1]
      }
      return prev
    })
  }, [])

  // Sync URL when slide changes
  useEffect(() => {
    if (typeof window !== "undefined" && isClient) {
      const params = new URLSearchParams(window.location.search)
      params.set("slide", currentSlide.toString())
      window.history.replaceState({}, "", `?${params.toString()}`)
    }
  }, [currentSlide, isClient])

  // Add/remove 'active' class to slides
  useEffect(() => {
    // Remove active from all slides
    slideIds.forEach((id) => {
      const element = document.getElementById(`slide-${id}`)
      if (element) {
        element.classList.remove("active")
      }
    })

    // Add active to current slide and scroll to top
    const currentElement = document.getElementById(`slide-${currentSlide}`)
    if (currentElement) {
      currentElement.classList.add("active")
      // Reset scroll position to top when slide becomes active
      currentElement.scrollTop = 0
    }
  }, [currentSlide])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        nextSlide()
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        previousSlide()
      } else if (e.key === "Home") {
        goToSlide(1)
      } else if (e.key === "End") {
        goToSlide(20)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [nextSlide, previousSlide, goToSlide])

  return {
    currentSlide,
    totalSlides,
    nextSlide,
    previousSlide,
    goToSlide
  }
}
