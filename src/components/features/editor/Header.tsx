import Link from "next/link";

export const EditorHeader = () => {
  return (
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
  );
};
