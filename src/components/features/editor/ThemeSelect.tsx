import { Select } from "@/components/forms";
import { FormElement } from "@/components/forms/FormElement";
import { themes } from "@/config/themes";
import { useUserStore } from "@/hooks/useUserStore";

export const EditorThemeSelect = () => {
  const { theme, setTheme } = useUserStore();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(event.target.value);
  };
  return (
    <FormElement label="テーマ" htmlFor="theme">
      <Select id="theme" value={theme} onChange={handleChange}>
        {themes.map((theme) => (
          <option key={theme.value} value={theme.value}>
            {theme.label}
          </option>
        ))}
      </Select>
    </FormElement>
  );
};
