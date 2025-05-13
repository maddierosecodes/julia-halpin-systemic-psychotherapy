import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  darkBg?: boolean;
}

export const Button = ({
  children,
  variant = "primary",
  size = "medium",
  darkBg = false,
  className = "",
  ...props
}: ButtonProps) => {
  const baseStyles = `relative transform skew-x-[20deg] inline-block font-main text-md font-bold shadow-[5px_5px_0px_0px_rgba(198,166,100,0.5)] transition-all duration-500 group cursor-pointer border-2 border-gold-500 overflow-hidden`;

  const variantStyles = {
    primary: darkBg
      ? "text-lavender-100 bg-indigo-700 before:bg-indigo-500/90 hover:text-lavender"
      : "text-lavender-800 bg-indigo-700/20 before:bg-indigo-700/30 hover:text-lavender-100",
    secondary: darkBg
      ? "text-gold-500 bg-indigo-900 before:bg-indigo-700/90 hover:text-gold-300"
      : "text-gold-700 bg-gold-500/20 before:bg-gold-500/30 hover:text-gold-900",
  };

  const sizeStyles = {
    small: "px-4 py-1.5",
    medium: "px-6 py-2",
    large: "px-8 py-2.5",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      <span className="transform skew-x-[-20deg] inline-block relative z-10">
        {children}
      </span>
    </button>
  );
};
