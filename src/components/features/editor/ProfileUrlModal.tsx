import React, { useState, useEffect } from "react";
import { Modal } from "@/components/elements";
import { Button } from "@/components/elements";
import { Input } from "@/components/forms";
import { useUrlStore } from "@/hooks/useUrlStore";

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
  const { urls, addUrl } = useUrlStore();
  const [url, setUrl] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

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

  const handleSubmit = async () => {
    if (validateUrl(url)) {
      setIsSaving(true);

      // 実際の保存処理を実行
      onSubmit(url);

      // URLを配列に追加（同一URLが存在しない場合のみ）
      if (url && !urls.includes(url)) {
        addUrl(url);
      }

      // 少し遅延させてから保存完了状態を表示
      setTimeout(() => {
        setIsSaving(false);
        setIsSaved(true);

        // 1.5秒後にモーダルを閉じる
        setTimeout(() => {
          setIsSaved(false);
          onClose();
        }, 1500);
      }, 300);
    }
  };

  const handleClose = () => {
    setUrl(currentUrl); // 現在のURLに戻す
    setIsValid(true);
    setIsSaving(false);
    setIsSaved(false);
    onClose();
  };

  // モーダルが開かれるたびに現在のURLを設定
  useEffect(() => {
    if (isOpen) {
      setUrl(currentUrl);
      setIsSaved(false);
      setIsSaving(false);
      setIsValid(true);
    } else {
      // モーダルが閉じられた時に状態をリセット
      setIsSaved(false);
      setIsSaving(false);
      setIsValid(true);
    }
  }, [isOpen, currentUrl]);

  const handleModalClose = () => {
    // 保存中または保存完了時はモーダルを閉じない
    if (!isSaving && !isSaved) {
      handleClose();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={handleModalClose} title="プロフィールURL">
      <div className="space-y-4">
        {/* 注意事項 */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-md p-3">
          <h3 className="text-sm font-bold text-yellow-800 mb-2">注意事項</h3>
          <ul className="text-xs text-yellow-700 space-y-1">
            <li>• 名札を作成できるのは自分の名札のみです</li>
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
            disabled={isSaving || isSaved}
          />
          {!isValid && (
            <p className="text-red-500 text-xs mt-1">
              有効なURLを入力してください
            </p>
          )}
        </div>

        {/* 保存状態メッセージ */}
        {isSaved && (
          <div className="bg-emerald-50 border-2 border-emerald-200 rounded-md p-3">
            <div className="flex items-center">
              <div className="text-emerald-600 mr-2">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-sm font-medium text-emerald-600">
                保存しました！
              </span>
            </div>
          </div>
        )}

        {/* ボタン */}
        <div className="flex space-x-2 pt-2">
          <Button
            onClick={handleClose}
            size="sm"
            variant="outline"
            className="flex-1"
            disabled={isSaving || isSaved}
          >
            キャンセル
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={!isValid || isSaving || isSaved}
            size="sm"
            className="flex-1"
          >
            {isSaving ? "保存中..." : isSaved ? "保存完了" : "保存"}
          </Button>
        </div>
      </div>
    </Modal>
  );
};
