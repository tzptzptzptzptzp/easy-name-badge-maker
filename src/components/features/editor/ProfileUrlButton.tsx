import { useState } from "react";
import { Button } from "@/components/elements";
import { FormElement } from "@/components/forms/FormElement";
import { useUserStore } from "@/hooks/useUserStore";
import { ProfileUrlModal } from "./ProfileUrlModal";

export const EditorProfileUrlButton = () => {
  const { profileUrl, setProfileUrl } = useUserStore();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmitUrl = (url: string) => {
    setProfileUrl(url);
  };

  return (
    <>
      <FormElement label="URL" htmlFor="profileUrl">
        <Button
          onClick={handleOpenModal}
          className="flex items-center justify-center w-full h-8 p-0 rounded-md bg-main text-white hover:opacity-70 duration-200"
          variant="none"
        >
          {profileUrl ? "プロフィールURLを変更" : "プロフィールURLを入力"}
        </Button>
      </FormElement>

      <ProfileUrlModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmitUrl}
        currentUrl={profileUrl}
      />
    </>
  );
};
