import { Input } from "@/components/forms";
import { FormElement } from "@/components/forms/FormElement";
import { useUserStore } from "@/hooks/useUserStore";

export const EditorActivityInput = () => {
  const { setActivity } = useUserStore();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setActivity(event.target.value);
  };
  return (
    <FormElement label="専攻" htmlFor="activity">
      <Input type="text" id="activity" onChange={handleChange} />
    </FormElement>
  );
};
