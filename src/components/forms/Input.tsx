import { InputHTMLAttributes, forwardRef } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", ...props }, ref) => {
    const baseClasses =
      "w-full h-8 px-2 border-2 border-main rounded-md focus:outline-none focus:ring-none";

    const combinedClasses = [baseClasses, className].filter(Boolean).join(" ");

    return <input className={combinedClasses} ref={ref} {...props} />;
  }
);

Input.displayName = "Input";

export { Input };
