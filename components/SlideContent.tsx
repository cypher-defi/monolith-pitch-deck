import React from "react"

interface SlideContentProps {
  children: React.ReactNode
  className?: string
}

export default function SlideContent({
  children,
  className = ""
}: SlideContentProps) {
  return (
    <div
      className={`max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 ${className}`}
    >
      {children}
    </div>
  )
}
