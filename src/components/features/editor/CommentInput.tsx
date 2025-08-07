import { Input } from "@/components/forms";
import { FormElement } from "@/components/forms/FormElement";
import { useUserStore } from "@/hooks/useUserStore";

export const EditorCommentInput = () => {
  const { comment, setComment } = useUserStore();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setComment(event.target.value);
  };

  return (
    <FormElement label="コメント" htmlFor="comment">
      <Input
        type="text"
        id="comment"
        placeholder="コメントを入力"
        onChange={handleChange}
        value={comment}
      />
    </FormElement>
  );
};
