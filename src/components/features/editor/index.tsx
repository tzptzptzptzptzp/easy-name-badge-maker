import { RefObject } from "react";
import { useConfig } from "@/hooks/useConfig";
import { EditorHeader } from "./Header";
import { EditorFooter } from "./Footer";
import { EditorNameInput } from "./NameInput";

interface EditorProps {
  previewRef: RefObject<HTMLDivElement | null>;
}

export const Editor = ({ previewRef }: EditorProps) => {
  const { scaledFrameSize } = useConfig();

  return (
    <div
      className="flex flex-col relative border-[3px] rounded-3xl border-main shadow-xl leading-none"
      style={{ width: scaledFrameSize.width, height: scaledFrameSize.height }}
    >
      <EditorHeader />
      <div className="h-full p-4">
        <EditorNameInput />
      </div>
      <EditorFooter previewRef={previewRef} />
    </div>
  );
};
