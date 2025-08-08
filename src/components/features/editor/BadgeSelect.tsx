import { Select } from "@/components/forms";
import { FormElement } from "@/components/forms/FormElement";
import { badgeImages } from "@/config/badge";
import { useUserStore } from "@/hooks/useUserStore";

export const EditorBadgeSelect = () => {
  const {
    badgeImage,
    setBadgeImage,
    badgeTopLeft,
    setBadgeTopLeft,
    badgeTopRight,
    setBadgeTopRight,
  } = useUserStore();

  const handleBottomLeftChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setBadgeImage(event.target.value);
  };

  const handleTopLeftChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setBadgeTopLeft(event.target.value);
  };

  const handleTopRightChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setBadgeTopRight(event.target.value);
  };

  return (
    <div className="space-y-3">
      <FormElement
        label="バッジ（左下）"
        htmlFor="badge-bottom-left"
        onlyCustom
      >
        <Select
          id="badge-bottom-left"
          value={badgeImage}
          onChange={handleBottomLeftChange}
        >
          {badgeImages.map((image) => (
            <option key={image.value} value={image.value}>
              {image.label}
            </option>
          ))}
        </Select>
      </FormElement>

      <FormElement label="バッジ（左上）" htmlFor="badge-top-left" onlyCustom>
        <Select
          id="badge-top-left"
          value={badgeTopLeft}
          onChange={handleTopLeftChange}
        >
          {badgeImages.map((image) => (
            <option key={image.value} value={image.value}>
              {image.label}
            </option>
          ))}
        </Select>
      </FormElement>

      <FormElement label="バッジ（右上）" htmlFor="badge-top-right" onlyCustom>
        <Select
          id="badge-top-right"
          value={badgeTopRight}
          onChange={handleTopRightChange}
        >
          {badgeImages.map((image) => (
            <option key={image.value} value={image.value}>
              {image.label}
            </option>
          ))}
        </Select>
      </FormElement>
    </div>
  );
};
