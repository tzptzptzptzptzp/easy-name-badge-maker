import { Editor } from "@/components/features/editor";
import { Preview } from "@/components/features/preview";

export const HomeIndex = () => {
  return (
    <div className="flex items-center justify-around h-dvh">
      <div>
        <Preview />
      </div>
      <div>
        <Editor />
      </div>
    </div>
  );
};
