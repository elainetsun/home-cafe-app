import { useCallback } from "react";
import { useForm } from "react-hook-form";
import {
  TextField,
  TextArea,
  Button,
  Box,
  MenuItem,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useMenuItems } from "../hooks/useMenuItems";

const NAME_INPUT = "name";
const REQUESTS_INPUT = "requests";
const SUGAR_INPUT = "sugar";

const sugarMenuOptions = [
  "no sugar added",
  "maple syrup",
  "simple syrup",
  "honey",
  "monk fruit",
  "sugar free pumpkin",
  "sugar free vanilla",
  "sugar free hazelnut",
];

export const OrderForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { id } = useParams();

  const selectMenuItem = useCallback(
    (items) => {
      return items.find((item) => item?.id === Number(id));
    },
    [id]
  );

  const { data: selectedMenuItem } = useMenuItems({ select: selectMenuItem });

  const onSubmit = (data) => {
    const orderData = {
      ...data,
      ...selectedMenuItem,
    };
    let tableString = "Order submitted:\n";
    for (const key in orderData) {
      if (Object.hasOwnProperty.call(orderData, key)) {
        tableString += `${key}: ${orderData[key]}\n`;
      }
    }
    alert(tableString);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ display: "flex", flexDirection: "column", p: 2, gap: 2 }}>
        <Typography variant="h2" sx={{ m: 0 }}>
          Order {selectedMenuItem?.title}
        </Typography>
        <TextField
          label="Name"
          variant="outlined"
          error={Boolean(errors?.name)}
          helperText={errors?.name?.message}
          {...register(NAME_INPUT, { required: "Name is required" })}
        />
        <TextField
          select
          label="Sweetener"
          variant="outlined"
          error={Boolean(errors.sweetness)}
          helperText={errors.sweetness?.message}
          defaultValue={sugarMenuOptions[0]}
          {...register(SUGAR_INPUT, {
            required: "Please select a sweetness level",
          })}
        >
          {sugarMenuOptions.map((option) => (
            <MenuItem value={option}>{option}</MenuItem>
          ))}
        </TextField>
        <TextField
          multiline
          rows={4}
          label="Special requests"
          variant="outlined"
          helperText="half sweet, extra shot, less ice, ...etc"
          {...register(REQUESTS_INPUT)}
        />
        <Button sx={{ width: "fit-content" }} type="submit">
          Place order
        </Button>
      </Box>
    </form>
  );
};
