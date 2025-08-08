import { Radio } from "@/components/forms";
import { FormElement } from "@/components/forms/FormElement";
import { useUserStore } from "@/hooks/useUserStore";

const options = [
  { value: "yes", label: "表示する" },
  { value: "no", label: "表示しない" },
];

export const EditorFrameFes2025Radio = () => {
  const { frameFes2025Enabled, setFrameFes2025Enabled } = useUserStore();

  const handleChange = (value: string) => {
    setFrameFes2025Enabled(value === "yes");
  };

  return (
    <FormElement label="フェステーマ" htmlFor="frame-fes-2025">
      <Radio
        id="frame-fes-2025"
        options={options}
        name="frame-fes-2025"
        value={frameFes2025Enabled ? "yes" : "no"}
        onChange={handleChange}
      />
    </FormElement>
  );
};
