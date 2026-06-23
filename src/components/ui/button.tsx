import { forwardRef } from "react";
import clsx from "clsx";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "flame";
type ButtonSize = "sm" | "md" | "lg" | "xl";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-navy-700 text-white hover:bg-navy-800 active:bg-navy-900 shadow-md hover:shadow-lg",
  secondary:
    "bg-warm-100 text-navy-800 hover:bg-warm-200 active:bg-warm-300",
  outline:
    "border-2 border-navy-700 text-navy-700 hover:bg-navy-700 hover:text-white active:bg-navy-800",
  ghost:
    "text-navy-700 hover:bg-navy-50 active:bg-navy-100",
  flame:
    "bg-flame-500 text-white hover:bg-flame-600 active:bg-flame-700 shadow-md hover:shadow-lg hover:shadow-flame-500/20",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm gap-1.5",
  md: "h-11 px-6 text-sm gap-2",
  lg: "h-13 px-8 text-base gap-2.5",
  xl: "h-15 px-10 text-lg gap-3",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      fullWidth,
      loading,
      leftIcon,
      rightIcon,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={clsx(
          "inline-flex items-center justify-center font-medium rounded-lg",
          "transition-all duration-fast ease-out",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-500",
          "disabled:opacity-50 disabled:pointer-events-none",
          "active:scale-[0.97]",
          variantStyles[variant],
          sizeStyles[size],
          fullWidth && "w-full",
          className
        )}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <svg
            className="h-4 w-4 animate-spin"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
        )}
        {!loading && leftIcon}
        {children}
        {!loading && rightIcon}
      </button>
    );
  }
);

Button.displayName = "Button";

/* Reusable variant styles for Link elements */
export { variantStyles as buttonVariantStyles, sizeStyles as buttonSizeStyles };
