"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  fallbackText?: string;
  size?: number; // Optional size prop (defaults to 40px)
}

export default function Avatar({
  className,
  src,
  alt = "User Avatar",
  fallbackText = "AV",
  size = 40, // Default size 40px (h-10 w-10)
  ...props
}: AvatarProps) {
  const [imageError, setImageError] = useState(false);

  const style = {
    width: `${size}px`,
    height: `${size}px`,
  };

  const handleImageError = () => {
    setImageError(true);
  };

  // Reset error state if src changes
  React.useEffect(() => {
    setImageError(false);
  }, [src]);

  return (
    <div
      className={cn(
        "relative inline-flex flex-shrink-0 items-center justify-center overflow-hidden  bg-gray-200 dark:bg-gray-700",
        className
      )}
      style={style}
      {...props}
    >
      {src && !imageError ? (
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
          onError={handleImageError}
        />
      ) : (
        <span
          className="font-medium text-gray-600 dark:text-gray-300"
          style={{ fontSize: `${size * 0.4}px` }}
        >
          {fallbackText}
        </span>
      )}
    </div>
  );
}
