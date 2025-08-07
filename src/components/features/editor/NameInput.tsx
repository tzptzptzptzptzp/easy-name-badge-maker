import { Input } from "@/components/forms";
import { FormElement } from "@/components/forms/FormElement";
import { useUserStore } from "@/hooks/useUserStore";

export const EditorNameInput = () => {
  const { name, setName } = useUserStore();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  return (
    <FormElement label="名前" htmlFor="name">
      <Input
        type="text"
        id="name"
        placeholder="名前を入力"
        onChange={handleChange}
        value={name}
      />
    </FormElement>
  );
};
