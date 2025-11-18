import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant: "primary" | "outline" | "ghost";
  size: "sm" | "md" | "lg";
  fullWidth: boolean;
}

export const Button : React.FC<ButtonProps> = ({
label = "Click Me",
  variant = "primary",
  size = "md",
  fullWidth = false,
  className,
  ...props

}) => {

   const baseStyles =
    "rounded-xl font-medium transition-all duration-200 active:scale-95";

      const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-zinc-400 text-zinc-700 hover:bg-zinc-100 dark:text-white dark:border-zinc-600 bg-none",
    ghost: "text-zinc-700 hover:bg-zinc-200 dark:text-white dark:hover:bg-zinc-800",
    destructive: "bg-red-600 text-white hover:bg-red-700",
  };

   const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg",
  };

   return (
    <button
      {...props}
      className={clsx(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        fullWidth && "w-full",
        className
      )}
    >
      {label}
    </button>
  );
};