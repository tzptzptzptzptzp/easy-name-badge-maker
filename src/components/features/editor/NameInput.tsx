import { Input } from "@/components/forms";
import { FormElement } from "@/components/forms/FormElement";
import { useUserStore } from "@/hooks/useUserStore";

export const EditorNameInput = () => {
  const { setName } = useUserStore();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  return (
    <FormElement label="名前" htmlFor="name">
      <Input type="text" id="name" onChange={handleChange} />
    </FormElement>
  );
};
