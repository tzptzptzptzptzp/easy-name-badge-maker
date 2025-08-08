import { Radio } from "@/components/forms";
import { FormElement } from "@/components/forms/FormElement";
import { useUserStore } from "@/hooks/useUserStore";

const options = [
  { value: "yes", label: "表示" },
  { value: "no", label: "非表示" },
];

export const EditorQRCodeImageRadio = () => {
  const { qrCodeImageEnabled, setQrCodeImageEnabled } = useUserStore();

  const handleChange = (value: string) => {
    setQrCodeImageEnabled(value === "yes");
  };

  return (
    <FormElement label="QRコード画像" htmlFor="qrCodeImage" onlyCustom>
      <div className="space-y-1">
        <Radio
          id="qrCodeImage"
          options={options}
          name="qrCodeImage"
          value={qrCodeImageEnabled ? "yes" : "no"}
          onChange={handleChange}
        />
        <p className="text-neutral-400 text-[12px]">
          ※ カメラで読み込めない時などは非表示
        </p>
      </div>
    </FormElement>
  );
};
