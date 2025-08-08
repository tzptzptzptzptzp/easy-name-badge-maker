import { RefObject, useState } from "react";
import { Button } from "@/components/elements";
import { useImageSave } from "@/hooks/useImageSave";

interface EditorFooterProps {
  previewRef: RefObject<HTMLDivElement | null>;
}

export const EditorFooter = ({ previewRef }: EditorFooterProps) => {
  const [isSaving, setIsSaving] = useState(false);
  const { saveImage } = useImageSave();

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

  return (
    <div className="flex justify-center p-4 pb-5">
      <Button onClick={handleSaveImage} disabled={isSaving}>
        {isSaving ? "保存中..." : "画像を保存"}
      </Button>
    </div>
  );
};
