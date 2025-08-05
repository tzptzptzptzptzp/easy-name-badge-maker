import { RefObject } from "react";
import { useConfig } from "@/hooks/useConfig";
import { EditorHeader } from "./Header";
import { EditorFooter } from "./Footer";
import { EditorNameInput } from "./NameInput";
import { EditorActivityInput } from "./ActivityInput";
import { EditorThemeSelect } from "./ThemeSelect";
import { EditorFontSelect } from "./FontSelect";
import { EditorIconInput } from "./IconInput";
import { EditorProfileUrlButton } from "./ProfileUrlButton";

interface EditorProps {
  previewRef: RefObject<HTMLDivElement | null>;
}

export const Editor = ({ previewRef }: EditorProps) => {
  const { scaledFrameSize } = useConfig();

  return (
    <div
      className="flex flex-col relative border-[3px] rounded-3xl border-main shadow-xl leading-none font-m-plus-rounded"
      style={{ width: scaledFrameSize.width, height: scaledFrameSize.height }}
    >
      <EditorHeader />
      <div className="flex flex-col gap-2 h-full p-4">
        <EditorThemeSelect />
        <EditorFontSelect />
        <EditorIconInput />
        <EditorNameInput />
        <EditorActivityInput />
        <EditorProfileUrlButton />
      </div>
      <EditorFooter previewRef={previewRef} />
    </div>
  );
};
