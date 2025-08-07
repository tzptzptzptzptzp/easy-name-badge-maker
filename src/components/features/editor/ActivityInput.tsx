import { Input } from "@/components/forms";
import { FormElement } from "@/components/forms/FormElement";
import { useUserStore } from "@/hooks/useUserStore";

export const EditorActivityInput = () => {
  const { activity, setActivity } = useUserStore();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setActivity(event.target.value);
  };
  return (
    <FormElement label="専攻" htmlFor="activity">
      <Input
        type="text"
        id="activity"
        placeholder="専攻を入力"
        onChange={handleChange}
        value={activity}
      />
    </FormElement>
  );
};
