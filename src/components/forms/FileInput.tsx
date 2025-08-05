import { InputHTMLAttributes, forwardRef, useRef } from "react";

type FileInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  hasFile?: boolean;
  buttonText?: string;
  selectedText?: string;
};

const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
  (
    {
      className = "",
      hasFile = false,
      buttonText = "ファイルを選択",
      selectedText = "変更する",
      ...props
    },
    ref
  ) => {
    const hiddenInputRef = useRef<HTMLInputElement>(null);

    const handleButtonClick = () => {
      hiddenInputRef.current?.click();
    };

    const displayText = hasFile ? selectedText : buttonText;

    return (
      <div className="relative hover:opacity-70 duration-200">
        <input
          {...props}
          type="file"
          ref={ref || hiddenInputRef}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
        <button
          type="button"
          onClick={handleButtonClick}
          className={`w-full h-8 px-2 border-2 border-main rounded-md focus:outline-none focus:ring-none bg-main text-white text-sm font-bold ${className}`}
        >
          {displayText}
        </button>
      </div>
    );
  }
);

FileInput.displayName = "FileInput";

export { FileInput };
