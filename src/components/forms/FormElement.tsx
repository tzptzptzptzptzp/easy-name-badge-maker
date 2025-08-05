import React from "react";
import { useModeStore } from "@/hooks/useModeStore";

type Props = {
  label: string;
  children: React.ReactNode;
  onlyCustom?: boolean;
  htmlFor?: string;
};

export const FormElement = ({
  label,
  children,
  onlyCustom,
  htmlFor,
}: Props) => {
  const { mode } = useModeStore();
  const isSimple = mode === "simple";

  if (isSimple && onlyCustom) return null;

  return (
    <div className="flex items-center justify-between">
      <label htmlFor={htmlFor} className="w-1/3">
        {label}
      </label>
      <div className="w-2/3">{children}</div>
    </div>
  );
};
