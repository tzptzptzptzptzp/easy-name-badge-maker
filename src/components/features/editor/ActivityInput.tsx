import { Input } from "@/components/forms";
import { FormElement } from "@/components/forms/FormElement";
import { useUserStore } from "@/hooks/useUserStore";

export const EditorActivityInput = () => {
  const { activity, setActivity, activityLabel, setActivityLabel } =
    useUserStore();

  const handleActivityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setActivity(event.target.value);
  };

  const handleActivityLabelChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setActivityLabel(event.target.value);
  };

  return (
    <div className="space-y-3">
      <FormElement label="専攻ラベル" htmlFor="activity-label" onlyCustom>
        <Input
          type="text"
          id="activity-label"
          placeholder="専攻"
          onChange={handleActivityLabelChange}
          value={activityLabel}
        />
      </FormElement>
      <FormElement label={`${activityLabel}内容`} htmlFor="activity">
        <Input
          type="text"
          id="activity"
          placeholder={`${activityLabel}を入力`}
          onChange={handleActivityChange}
          value={activity}
        />
      </FormElement>
    </div>
  );
};
