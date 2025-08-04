import { ButtonHTMLAttributes, forwardRef } from "react";

type ButtonVariant = "default" | "destructive" | "outline" | "ghost" | "link";
type ButtonSize = "default" | "xs" | "sm" | "lg" | "xl" | "icon";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const getVariantClasses = (variant: ButtonVariant = "default"): string => {
  const variants: Record<ButtonVariant, string> = {
    default:
      "bg-main text-white shadow-[0_5px_0_0_#5a7fa8] hover:translate-y-[3px] hover:shadow-none transition-all duration-300",
    destructive:
      "bg-red-500 text-white shadow-[0_5px_0_0_#b91c1c] hover:translate-y-[3px] hover:shadow-none transition-all duration-300",
    outline:
      "border border-main bg-transparent text-main shadow-[0_5px_0_0_var(--color-main)] hover:translate-y-[3px] hover:shadow-none transition-all duration-300",
    ghost: "text-main hover:bg-main/10 transition-all duration-300",
    link: "text-main underline-offset-4 hover:underline transition-all duration-300",
  };
  return variants[variant];
};

const getSizeClasses = (size: ButtonSize = "default"): string => {
  const sizes: Record<ButtonSize, string> = {
    default: "p-3 text-[16px]",
    xs: "p-2 text-[12px]",
    sm: "p-2 text-[14px]",
    lg: "p-4 text-[18px]",
    xl: "p-4 text-[20px]",
    icon: "p-3 w-12 h-12",
  };
  return sizes[size];
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className = "", variant = "default", size = "default", ...props },
    ref
  ) => {
    const baseClasses =
      "inline-flex items-center justify-center rounded-full whitespace-nowrap font-bold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 active:translate-y-[3px] active:shadow-none";
    const variantClasses = getVariantClasses(variant);
    const sizeClasses = getSizeClasses(size);

    const combinedClasses = [
      baseClasses,
      variantClasses,
      sizeClasses,
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return <button className={combinedClasses} ref={ref} {...props} />;
  }
);

Button.displayName = "Button";

export { Button };
