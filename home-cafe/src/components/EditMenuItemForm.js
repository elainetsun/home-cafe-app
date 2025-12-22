import { useNavigate, useParams } from "react-router-dom";
import { useMenuItemById } from "../hooks/useMenuItems";
import { useEditMenuItem } from "../hooks/useEditMenuItem";
import { MenuItemForm } from "./MenuItemForm";

export const EditMenuItemForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate("/editMenu");
  };

  const onSubmit = (formData) => {
    mutate({ ...formData, id: data?.id });
  };

  const { data = {}, isLoading } = useMenuItemById({ id });
  const { mutate } = useEditMenuItem({ onSuccess: handleCancel });

  return (
    <MenuItemForm
      isLoading={isLoading}
      defaultValues={data}
      onSubmit={onSubmit}
      onCancel={handleCancel}
      isEdit
    />
  );
};
