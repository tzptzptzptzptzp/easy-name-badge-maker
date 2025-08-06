import { InputHTMLAttributes, forwardRef } from "react";

interface RadioOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface RadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "onChange"> {
  options: RadioOption[];
  orientation?: "horizontal" | "vertical";
  name: string;
  value?: string;
  onChange?: (value: string) => void;
}

const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      options,
      orientation = "horizontal",
      name,
      value,
      onChange,
      className = "",
      ...props
    },
    ref
  ) => {
    const containerClasses =
      orientation === "horizontal"
        ? "flex flex-row gap-3"
        : "flex flex-col gap-2";

    const handleChange = (optionValue: string) => {
      if (onChange) {
        onChange(optionValue);
      }
    };

    return (
      <div className={`${containerClasses} ${className}`}>
        {options.map((option, index) => (
          <label
            key={option.value}
            className={`flex items-center gap-1 cursor-pointer ${
              option.disabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <input
              ref={index === 0 ? ref : undefined}
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              disabled={option.disabled}
              onChange={() => handleChange(option.value)}
              className="w-4 h-4 text-main border-2 border-main focus:ring-main focus:ring-2 focus:ring-offset-0"
              {...props}
            />
            <span className="text-sm select-none">{option.label}</span>
          </label>
        ))}
      </div>
    );
  }
);

Radio.displayName = "Radio";

export { Radio };
export type { RadioOption, RadioProps };
