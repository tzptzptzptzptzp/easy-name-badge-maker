import { FormElement } from "@/components/forms/FormElement";
import { rankIcons } from "@/config/rank";
import { useUserStore } from "@/hooks/useUserStore";

export const EditorRankRadio = () => {
  const { rankIcon, setRankIcon } = useUserStore();

  const handleChange = (value: string) => {
    setRankIcon(value);
  };

  const handleRemove = () => {
    setRankIcon("none");
  };

  return (
    <FormElement label="会員アイコン" htmlFor="rank" onlyCustom>
      <div className="flex items-center gap-4 px-1">
        <div className="flex gap-4">
          {rankIcons.map((rank) => (
            <label
              key={rank.value}
              className={`flex items-center gap-1 cursor-pointer transition-opacity ${
                rankIcon === rank.value ? "opacity-100" : "opacity-50"
              }`}
            >
              <input
                type="radio"
                name="rank"
                value={rank.value}
                checked={rankIcon === rank.value}
                onChange={() => handleChange(rank.value)}
                className="sr-only"
              />
              <span className="flex items-center gap-1 text-sm select-none">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/images/rank/${rank.value}.png`}
                  alt={rank.label}
                  width={20}
                  height={20}
                  className="w-5 h-5 object-contain"
                />
              </span>
            </label>
          ))}
        </div>
        {rankIcon !== "none" && (
          <button
            type="button"
            onClick={handleRemove}
            className="text-xs text-red-600 hover:text-red-800 transition-colors underline"
          >
            削除
          </button>
        )}
      </div>
    </FormElement>
  );
};
