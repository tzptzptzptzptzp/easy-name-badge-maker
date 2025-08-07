import { SelectHTMLAttributes, forwardRef } from "react";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement>;

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className = "", children, ...props }, ref) => {
    const baseClasses =
      "w-full h-8 pl-2 pr-8 border-2 border-main rounded-md focus:outline-none focus:ring-none bg-white appearance-none bg-no-repeat bg-right";

    const arrowStyle = {
      backgroundImage: `url("data:image/svg+xml;charset=UTF-8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6,9 12,15 18,9'></polyline></svg>")`,
      backgroundPosition: "right 8px center",
      backgroundSize: "16px 16px",
    };

    const combinedClasses = [baseClasses, className].filter(Boolean).join(" ");

    return (
      <select
        className={combinedClasses}
        style={arrowStyle}
        ref={ref}
        {...props}
      >
        {children}
      </select>
    );
  }
);

Select.displayName = "Select";

export { Select };
