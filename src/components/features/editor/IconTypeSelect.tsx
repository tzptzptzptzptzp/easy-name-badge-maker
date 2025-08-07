import { Select } from "@/components/forms";
import { FormElement } from "@/components/forms/FormElement";
import { iconTypes } from "@/config/iconType";
import { useUserStore } from "@/hooks/useUserStore";

export const EditorIconTypeSelect = () => {
  const { iconType, setIconType } = useUserStore();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setIconType(event.target.value);
  };

  return (
    <FormElement label="┗ 形・サイズ" htmlFor="iconType" onlyCustom>
      <Select id="iconType" value={iconType} onChange={handleChange}>
        {iconTypes.map((type) => (
          <option key={type.value} value={type.value}>
            {type.label}
          </option>
        ))}
      </Select>
    </FormElement>
  );
};
