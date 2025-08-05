import { Select } from "@/components/forms";
import { FormElement } from "@/components/forms/FormElement";
import { useUserStore } from "@/hooks/useUserStore";

export const EditorThemeSelect = () => {
  const { setName } = useUserStore();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  return (
    <FormElement label="テーマ" htmlFor="theme">
      <Select id="theme" onChange={() => handleChange}>
        <option value="">テーマを選択してください</option>
        <option value="light">ライト</option>
        <option value="dark">ダーク</option>
      </Select>
    </FormElement>
  );
};
