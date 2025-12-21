/**
 * Centralized styling and constants for the presentation
 * This file contains reusable styles, spacing, colors, and utility classes
 */

// Color Palette
export const colors = {
  primary: {
    background: "#0a0a0a",
    foreground: "#ededed",
    accent: "#60a5fa", // blue-400
  },
  background: {
    dark: "#0a0a0a",
    darker: "#1a1a1a",
  },
  text: {
    primary: "#f3f4f6",
    secondary: "#d1d5db",
    tertiary: "#9ca3af",
  },
  accents: {
    primary: "#60a5fa", // blue-400
    success: "#10b981", // green-600
    warning: "#f59e0b", // amber-500
    error: "#ef4444", // red-500
  },
};

// Spacing
export const spacing = {
  xs: "0.5rem",
  sm: "1rem",
  md: "1.5rem",
  lg: "2rem",
  xl: "3rem",
  "2xl": "4rem",
};

// Font Sizes
export const fontSizes = {
  sm: "0.875rem",
  base: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "3xl": "1.875rem",
  "4xl": "2.25rem",
  "5xl": "3rem",
  "6xl": "3.75rem",
  "7xl": "4.5rem",
};

// Common Tailwind Classes for styling
export const slideStyles = {
  container: "max-w-[1200px] mx-auto",
  centerContent: "text-center flex flex-col justify-center items-center",
  highlightBox:
    "bg-accent-primary/10 border-[3px] border-accent-primary rounded-xl p-8 text-center my-10",
  infoBox: "bg-bg-card rounded-xl p-8 my-8 border-2 border-border",
  card: "bg-bg-card border-2 border-border rounded-xl p-8 transition-all duration-300",
};

// Gradients
export const gradients = {
  coverSlide: "bg-gradient-to-br from-black via-zinc-900 to-black",
  solutionSlide: "bg-gradient-to-br from-black via-blue-950/20 to-black",
  darkDefault: "bg-black",
};

// Card Variants
export const cardVariants = {
  primary: "bg-slate-100 border-2 border-blue-500 text-slate-900",
  secondary:
    "bg-gradient-to-br from-amber-50 via-amber-100 to-amber-50 border-2 border-amber-500",
  glass: "bg-bg-card border-2 border-border",
  highlight: "bg-blue-500/10 border-2 border-blue-500/50",
};

// Animation Classes
export const animations = {
  hover:
    "transition-all duration-300 hover:border-accent-primary hover:-translate-y-0.5 hover:shadow-lg",
  fadeIn: "animate-fadeIn",
};

// Grid Layouts
export const gridLayouts = {
  threeColumn: "grid grid-cols-3 gap-8",
  twoColumn: "grid grid-cols-2 gap-8",
  fourColumn: "grid grid-cols-2 gap-6",
  fiveColumn: "grid grid-cols-5 gap-4",
};

// Button Styles
export const buttonStyles = {
  nav: "bg-accent-primary text-white border-none px-5 py-2.5 rounded-2xl cursor-pointer text-sm font-semibold transition-all duration-300 min-w-[110px]",
  navHover: "hover:bg-balanced hover:scale-105",
  navDisabled: "disabled:opacity-40 disabled:cursor-not-allowed",
};
