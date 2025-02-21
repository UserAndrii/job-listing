import React from "react";

interface CoreButtonProps {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  children: React.ReactNode;
}

export const CoreButton: React.FC<CoreButtonProps> = ({
  type = "button",
  onClick,
  className = "",
  disabled = false,
  children,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`mt-4 bg-blue-500 text-white rounded px-4 py-2 transition-all 
        hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed ${className}`}
    >
      {children}
    </button>
  );
};
