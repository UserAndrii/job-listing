import React from "react";

interface IconButtonProps {
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}

export const IconButton: React.FC<IconButtonProps> = ({
  onClick,
  className = "",
  children,
}) => {
  return (
    <button
      onClick={onClick}
      className={`p-2 rounded-full hover:scale-110 transition-transform ${className}`}
    >
      {children}
    </button>
  );
};
