import Link from "next/link";
import { Button } from "@/components/elements";
import { useModeStore } from "@/hooks/useModeStore";

export const EditorHeader = () => {
  const { mode, setMode } = useModeStore();

  const isSimpleMode = mode === "simple";
  const isCustomMode = mode === "custom";

  const handleModeChange = (newMode: "simple" | "custom") => {
    if (mode !== newMode) {
      setMode(newMode);
    }
  };
  return (
    <div>
      <div className="flex items-end justify-between w-full p-4">
        <div className="flex flex-col w-full">
          <p className="text-[12px]">非公式</p>
          <div className="flex items-center justify-between">
            <h2 className="text-[20px]">簡単名札メーカー</h2>
            <Link href="#" className="px-0.5 py-px border-b text-[14px]">
              使い方
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-4 w-full">
        <Button
          size="xs"
          isActive={isSimpleMode}
          onClick={() => handleModeChange("simple")}
        >
          シンプル
        </Button>
        <Button
          size="xs"
          isActive={isCustomMode}
          onClick={() => handleModeChange("custom")}
        >
          カスタム
        </Button>
      </div>
    </div>
  );
};
