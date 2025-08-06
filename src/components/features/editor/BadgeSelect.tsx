import { Select } from "@/components/forms";
import { FormElement } from "@/components/forms/FormElement";
import { badgeImages } from "@/config/badge";
import { useUserStore } from "@/hooks/useUserStore";

export const EditorBadgeSelect = () => {
  const { badgeImage, setBadgeImage } = useUserStore();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setBadgeImage(event.target.value);
  };

  return (
    <FormElement label="バッジ" htmlFor="badge" onlyCustom>
      <Select id="badge" value={badgeImage} onChange={handleChange}>
        {badgeImages.map((image) => (
          <option key={image.value} value={image.value}>
            {image.label}
          </option>
        ))}
      </Select>
    </FormElement>
  );
};
