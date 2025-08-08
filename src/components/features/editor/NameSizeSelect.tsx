import { Select } from "@/components/forms";
import { FormElement } from "@/components/forms/FormElement";
import { useUserStore } from "@/hooks/useUserStore";

const nameSizeOptions = [
  { value: "small", label: "Ｓ" },
  { value: "medium", label: "Ｍ" },
  { value: "large", label: "Ｌ" },
  { value: "ex-large", label: "ＬＬ" },
];

export const EditorNameSizeSelect = () => {
  const { nameSize, setNameSize } = useUserStore();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setNameSize(event.target.value);
  };

  return (
    <FormElement label="┗ サイズ" htmlFor="nameSize" onlyCustom>
      <Select id="nameSize" value={nameSize} onChange={handleChange}>
        {nameSizeOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
    </FormElement>
  );
};
