import { Select } from "@/components/forms";
import { FormElement } from "@/components/forms/FormElement";
import { fonts } from "@/config/fonts";
import { useUserStore } from "@/hooks/useUserStore";

export const EditorFontSelect = () => {
  const { font, setFont } = useUserStore();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFont(event.target.value);
  };
  return (
    <FormElement label="フォント" htmlFor="font">
      <Select id="font" value={font} onChange={handleChange}>
        {fonts.map((font) => (
          <option key={font.value} value={font.value}>
            {font.label}
          </option>
        ))}
      </Select>
    </FormElement>
  );
};
