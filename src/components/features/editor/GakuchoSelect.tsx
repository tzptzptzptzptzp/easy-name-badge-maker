import { Select } from "@/components/forms";
import { FormElement } from "@/components/forms/FormElement";
import { gakuchoImages } from "@/config/gakucho";
import { useUserStore } from "@/hooks/useUserStore";

export const EditorGakuchoSelect = () => {
  const { gakuchoImage, setGakuchoImage } = useUserStore();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setGakuchoImage(event.target.value);
  };

  return (
    <FormElement label="両学長" htmlFor="gakucho">
      <Select id="gakucho" value={gakuchoImage} onChange={handleChange}>
        {gakuchoImages.map((image) => (
          <option key={image.value} value={image.value}>
            {image.label}
          </option>
        ))}
      </Select>
    </FormElement>
  );
};
