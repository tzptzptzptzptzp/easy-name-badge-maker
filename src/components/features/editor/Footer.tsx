import { RefObject, useState } from "react";
import { Button } from "@/components/elements";
import { useImageSave } from "@/hooks/useImageSave";
import { useUserStore } from "@/hooks/useUserStore";

interface EditorFooterProps {
  previewRef: RefObject<HTMLDivElement | null>;
}

export const EditorFooter = ({ previewRef }: EditorFooterProps) => {
  const [isSaving, setIsSaving] = useState(false);
  const { saveImage } = useImageSave();
  const { resetStore } = useUserStore();

  const handleSaveImage = async (): Promise<void> => {
    setIsSaving(true);
    try {
      await saveImage(previewRef, "name-badge");
    } catch (error) {
      console.error("画像保存に失敗しました:", error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleReset = (): void => {
    resetStore();
  };

  return (
    <div className="flex justify-center gap-4 p-4 pb-5">
      <Button onClick={handleReset} variant="outline" className="w-1/3">
        リセット
      </Button>
      <Button onClick={handleSaveImage} disabled={isSaving} className="w-1/3">
        {isSaving ? "保存中..." : "画像を保存"}
      </Button>
    </div>
  );
};
