import { RefObject } from "react";
import { useConfig } from "@/hooks/useConfig";
import { EditorHeader } from "./Header";
import { EditorFooter } from "./Footer";
import { EditorNameInput } from "./NameInput";
import { EditorNameSizeSelect } from "./NameSizeSelect";
import { EditorActivityInput } from "./ActivityInput";
import { EditorCommentInput } from "./CommentInput";
import { EditorThemeSelect } from "./ThemeSelect";
import { EditorFontSelect } from "./FontSelect";
import { EditorIconInput } from "./IconInput";
import { EditorProfileUrlButton } from "./ProfileUrlButton";
import { EditorPrRadio } from "./PRRadio";
import { EditorGakuchoSelect } from "./GakuchoSelect";
import { EditorBadgeSelect } from "./BadgeSelect";
import { EditorPatternSelect } from "./PatternSelect";
import { EditorRankRadio } from "./RankRadio";
import { EditorIconTypeSelect } from "./IconTypeSelect";
import { EditorFrameFes2025Radio } from "./FrameFes2025Radio";

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
      <div className="flex flex-col gap-2 overflow-y-scroll h-full p-4">
        <EditorFrameFes2025Radio />
        <EditorThemeSelect />
        <EditorPatternSelect />
        <EditorFontSelect />
        <EditorIconInput />
        <EditorIconTypeSelect />
        <EditorNameInput />
        <EditorNameSizeSelect />
        <EditorRankRadio />
        <EditorBadgeSelect />
        <EditorActivityInput />
        <EditorProfileUrlButton />
        <EditorCommentInput />
        <EditorGakuchoSelect />
        <EditorPrRadio />
      </div>
      <EditorFooter previewRef={previewRef} />
    </div>
  );
};
