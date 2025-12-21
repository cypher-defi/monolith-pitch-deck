import React from "react";

interface TitleProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export default function Title({
  children,
  className = "",
  size = "xl",
}: TitleProps) {
  const sizeClasses = {
    sm: "text-lg sm:text-xl md:text-2xl lg:text-3xl",
    md: "text-xl sm:text-2xl md:text-3xl lg:text-4xl",
    lg: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl",
    xl: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl",
  };

  return (
    <h1
      className={`slide-title ${sizeClasses[size]} ${className} word-wrap break-word`}
    >
      {children}
    </h1>
  );
}
