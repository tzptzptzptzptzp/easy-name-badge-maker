import React from "react";
import { useModeStore } from "@/hooks/useModeStore";
import { cn } from "@/utils/cn";

type Props = {
  label: string;
  children: React.ReactNode;
  onlyCustom?: boolean;
  htmlFor?: string;
  labelClassName?: string;
};

export const FormElement = ({
  label,
  children,
  onlyCustom,
  htmlFor,
  labelClassName,
}: Props) => {
  const { mode } = useModeStore();
  const isSimple = mode === "simple";

  if (isSimple && onlyCustom) return null;

  return (
    <div className="flex items-center justify-between">
      <label
        htmlFor={htmlFor}
        className={cn("w-1/3", onlyCustom && "text-main", labelClassName)}
      >
        {label}
      </label>
      <div className="w-2/3">{children}</div>
    </div>
  );
};
