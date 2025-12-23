import { useForm } from "react-hook-form";
import { LoadingSpinner } from "./utils";
import {
  TextField,
  Switch,
  Button,
  Box,
  Typography,
  FormControlLabel,
} from "@mui/material";

const inputNames = {
  DECAF: "allowDecafOption",
  SUGAR: "allowSugarOption",
  OUT_OF_STOCK: "isItemOutOfStock",
  DESCRIPTION: "description",
  NAME: "name",
};

export const MenuItemForm = ({
  defaultValues,
  onSubmit,
  isLoading,
  onCancel,
  isEdit = false,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h2" p={2}>
        {isEdit ? "Edit" : "Add"} {defaultValues?.name || "new item"}
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", p: 2, gap: 2 }}>
        <TextField
          defaultValue={defaultValues?.[inputNames.NAME]}
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
          defaultValue={defaultValues?.[inputNames.DESCRIPTION]}
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
              defaultChecked={defaultValues?.[inputNames.DECAF]}
              {...register(inputNames.DECAF)}
            />
          }
          label="allow decaf option"
        />
        <FormControlLabel
          sx={{ width: "fit-content" }}
          control={
            <Switch
              defaultChecked={defaultValues?.[inputNames.SUGAR]}
              {...register(inputNames.SUGAR)}
            />
          }
          label="allow sugar option"
        />
        <FormControlLabel
          sx={{ width: "fit-content" }}
          control={
            <Switch
              defaultChecked={defaultValues?.[inputNames.OUT_OF_STOCK]}
              {...register(inputNames.OUT_OF_STOCK)}
            />
          }
          label="out of stock"
        />
      </Box>
      <Box sx={{ display: "flex", gap: 1, justifyContent: "flex-end" }}>
        <Button onClick={onCancel} variant="outlined">
          Cancel
        </Button>
        <Button variant="contained" type="submit">
          Save
        </Button>
      </Box>
    </form>
  );
};
