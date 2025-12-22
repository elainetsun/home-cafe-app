import { useNavigate, useParams } from "react-router-dom";
import { useAddMenuItem } from "../hooks/useAddMenuItem";
import { MenuItemForm } from "./MenuItemForm";

export const AddMenuItemForm = () => {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate("/editMenu");
  };

  const onSubmit = (formData) => {
    mutate(formData);
  };

  const { mutate } = useAddMenuItem({ onSuccess: handleCancel });

  return <MenuItemForm onSubmit={onSubmit} onCancel={handleCancel} />;
};
