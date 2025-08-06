import { Select } from "@/components/forms";
import { FormElement } from "@/components/forms/FormElement";
import { patternImages } from "@/config/pattern";
import { useUserStore } from "@/hooks/useUserStore";

export const EditorPatternSelect = () => {
  const { patternImage, setPatternImage } = useUserStore();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPatternImage(event.target.value);
  };

  return (
    <FormElement label="パターン" htmlFor="pattern" onlyCustom>
      <Select id="pattern" value={patternImage} onChange={handleChange}>
        {patternImages.map((image) => (
          <option key={image.value} value={image.value}>
            {image.label}
          </option>
        ))}
      </Select>
    </FormElement>
  );
};
