import { useConfig } from "@/hooks/useConfig";
import { EditorHeader } from "./Header";
import { EditorFooter } from "./Footer";

export const Editor = () => {
  const { scaledFrameSize } = useConfig();

  return (
    <div
      className="flex flex-col relative border-[3px] rounded-3xl border-main shadow-xl leading-none"
      style={{ width: scaledFrameSize.width, height: scaledFrameSize.height }}
    >
      <EditorHeader />
      <div className="h-full"></div>
      <EditorFooter />
    </div>
  );
};
