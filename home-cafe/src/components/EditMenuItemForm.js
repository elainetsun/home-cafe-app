import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { LoadingSpinner } from "./utils";
import { useMenuItemById } from "../hooks/useMenuItems";
import {
  TextField,
  Switch,
  Button,
  Box,
  Typography,
  FormControlLabel,
} from "@mui/material";
import { useEditMenuItem } from "../hooks/useEditMenuItem";

const inputNames = {
  DECAF: "allowDecafOption",
  SUGAR: "allowSugarOption",
  DESCRIPTION: "description",
  NAME: "name",
};

export const EditMenuItemForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleNavToEdit = () => {
    navigate("/editMenu");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    mutate({ ...formData, id: data?.id });
  };

  const { data = {}, isLoading } = useMenuItemById({ id });
  const { mutate } = useEditMenuItem({ onSuccess: handleNavToEdit });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography>Edit {data?.name}</Typography>
      <Box sx={{ display: "flex", flexDirection: "column", p: 2, gap: 2 }}>
        <TextField
          defaultValue={data?.[inputNames.NAME]}
          label="Item Name"
          variant="outlined"
          error={Boolean(errors[inputNames.NAME])}
          helperText={errors[inputNames.NAME]?.message}
          {...register(inputNames.NAME, {
            required: "Name is required",
            maxLength: { value: 100, message: "Max 100 characters" },
          })}
        />
        <TextField
          defaultValue={data?.[inputNames.DESCRIPTION]}
          label="Description"
          variant="outlined"
          error={Boolean(errors[inputNames.DESCRIPTION])}
          helperText={errors[inputNames.DESCRIPTION]?.message}
          {...register(inputNames.DESCRIPTION, {
            required: "Description is required",
            maxLength: { value: 100, message: "Max 100 characters" },
          })}
        />
        <FormControlLabel
          sx={{ width: "fit-content" }}
          control={
            <Switch
              defaultChecked={data?.[inputNames.DECAF]}
              {...register(inputNames.DECAF)}
            />
          }
          label="allow decaf option"
        />
        <FormControlLabel
          sx={{ width: "fit-content" }}
          control={
            <Switch
              defaultChecked={data?.[inputNames.SUGAR]}
              {...register(inputNames.SUGAR)}
            />
          }
          label="allow sugar option"
        />
      </Box>
      <Box sx={{ display: "flex", gap: 1, justifyContent: "flex-end" }}>
        <Button onClick={handleNavToEdit} variant="outlined">
          Cancel
        </Button>
        <Button variant="contained" type="submit">
          Save
        </Button>
      </Box>
    </form>
  );
};
