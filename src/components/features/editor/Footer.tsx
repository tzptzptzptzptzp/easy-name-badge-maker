import { RefObject, useState } from "react";
import { Button } from "@/components/elements";
import { useImageSave } from "@/hooks/useImageSave";

interface EditorFooterProps {
  previewRef: RefObject<HTMLDivElement | null>;
}

export const EditorFooter = ({ previewRef }: EditorFooterProps) => {
  const { saveAsImage } = useImageSave();
  const [isSaving, setIsSaving] = useState(false);

  const handleSaveImage = async () => {
    setIsSaving(true);
    try {
      await saveAsImage(previewRef, "name-badge");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="flex justify-center p-4">
      <Button onClick={handleSaveImage} disabled={isSaving}>
        {isSaving ? "保存中..." : "画像を保存"}
      </Button>
    </div>
  );
};
