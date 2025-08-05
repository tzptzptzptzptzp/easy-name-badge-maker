import { Input } from "@/components/forms";
import { FormElement } from "@/components/forms/FormElement";
import { useUserStore } from "@/hooks/useUserStore";

export const EditorIconInput = () => {
  const { setIconUrl } = useUserStore();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      // 画像ファイルかどうかチェック
      if (!file.type.startsWith("image/")) {
        alert("画像ファイルを選択してください。");
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setIconUrl(result);
      };
      reader.readAsDataURL(file);
    } else {
      setIconUrl(null);
    }
  };
  return (
    <FormElement label="アイコン" htmlFor="icon">
      <Input type="file" id="icon" accept="image/*" onChange={handleChange} />
    </FormElement>
  );
};
