import { Radio } from "@/components/forms";
import { FormElement } from "@/components/forms/FormElement";
import { useUserStore } from "@/hooks/useUserStore";

const options = [
  { value: "yes", label: "いいよ！" },
  { value: "no", label: "やだ！" },
];

export const EditorPrRadio = () => {
  const { prEnabled, setPrEnabled } = useUserStore();

  const handleChange = (value: string) => {
    setPrEnabled(value === "yes");
  };

  return (
    <FormElement label="紹介しても…" htmlFor="pr">
      <Radio
        id="pr"
        options={options}
        name="pr"
        value={prEnabled ? "yes" : "no"}
        onChange={handleChange}
      />
    </FormElement>
  );
};
