import React, { useState } from "react";
import { Modal } from "@/components/elements";
import { Button } from "@/components/elements";
import { Input } from "@/components/forms";

interface ProfileUrlModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (url: string) => void;
  currentUrl?: string;
}

export const ProfileUrlModal: React.FC<ProfileUrlModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  currentUrl = "",
}) => {
  const [url, setUrl] = useState("");
  const [isValid, setIsValid] = useState(true);

  const validateUrl = (value: string) => {
    if (!value) {
      setIsValid(true);
      return true;
    }

    try {
      new URL(value);
      setIsValid(true);
      return true;
    } catch {
      setIsValid(false);
      return false;
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setUrl(value);
    validateUrl(value);
  };

  const handleSubmit = () => {
    if (validateUrl(url)) {
      onSubmit(url);
      onClose();
    }
  };

  const handleClose = () => {
    setUrl("");
    setIsValid(true);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title="プロフィールURL">
      <div className="space-y-4">
        {/* 注意事項 */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-md p-3">
          <h3 className="text-sm font-bold text-yellow-800 mb-2">注意事項</h3>
          <ul className="text-xs text-yellow-700 space-y-1">
            <li>• 名札を作成できるのは本人のみです</li>
            <li>• 注意事項を守らなかった場合に利用が制限されます</li>
          </ul>
        </div>

        {/* 現在のURL */}
        {currentUrl && (
          <div>
            <p className="text-sm font-bold text-gray-700 mb-1">
              現在のプロフィールURL
            </p>
            <p className="text-sm text-gray-600 break-words">{currentUrl}</p>
          </div>
        )}

        {/* URL入力フィールド */}
        <div>
          <label
            htmlFor="profileUrl"
            className="block text-sm font-bold text-gray-700 mb-1"
          >
            プロフィールURL
          </label>
          <Input
            id="profileUrl"
            type="url"
            value={url}
            onChange={handleChange}
            placeholder="https://libecity.com/user_profile/mbYh4qxQ0ccrVkDs5H9DhwYG08w1"
            className={`w-full ${!isValid ? "border-red-500" : ""}`}
          />
          {!isValid && (
            <p className="text-red-500 text-xs mt-1">
              有効なURLを入力してください
            </p>
          )}
        </div>

        {/* ボタン */}
        <div className="flex space-x-2 pt-2">
          <Button
            onClick={handleClose}
            size="sm"
            variant="outline"
            className="flex-1"
          >
            キャンセル
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={!isValid || !url}
            size="sm"
            className="flex-1"
          >
            保存
          </Button>
        </div>
      </div>
    </Modal>
  );
};
