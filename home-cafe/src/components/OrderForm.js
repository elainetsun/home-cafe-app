import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Switch,
  Button,
  Box,
  MenuItem,
  Typography,
  FormControlLabel,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useMenuItems } from "../hooks/useMenuItems";
import { useOrderItem } from "../hooks/useOrderItem";
import {
  defaultSugarType,
  defaultSugarLevel,
  sugarLevelOptions,
  sugarMenuOptions,
} from "../constants";
import { getRandomPrice, LoadingSpinner, ConfirmDialog } from "./utils";

const NAME_INPUT = "customerName";
const REQUESTS_INPUT = "specialRequests";
const SUGAR_INPUT = "sweetener";
const DECAF_INPUT = "isDecaf";
const SUGAR_LEVEL_INPUT = "sugarLevel";

export const OrderForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { id } = useParams();
  const navigate = useNavigate();
  const sugarSelection = watch(SUGAR_INPUT);

  const handleNavToMenu = () => {
    setIsOpen(false);
    navigate("/");
  };

  const selectMenuItem = useCallback(
    (items) => {
      return items.find((item) => Number(item?.id) === Number(id));
    },
    [id],
  );

  const { data: selectedMenuItem = {} } = useMenuItems({
    select: selectMenuItem,
  });

  const { mutate, isLoading } = useOrderItem({
    onSuccess: () => setIsOpen(true),
  });

  const onSubmit = (data) => {
    const orderData = {
      ...data,
      ...selectedMenuItem,
    };
    mutate(orderData);
  };

  const { name, allowDecafOption, allowSugarOption } = selectedMenuItem;

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ display: "flex", flexDirection: "column", p: 2, gap: 2 }}>
        <Typography variant="h2" sx={{ m: 0 }}>
          Order {name}
        </Typography>
        <TextField
          label="Name"
          variant="outlined"
          error={Boolean(errors[NAME_INPUT])}
          helperText={errors[NAME_INPUT]?.message}
          {...register(NAME_INPUT, {
            required: "Name is required",
            maxLength: { value: 20, message: "Max 20 characters" },
          })}
        />

        <TextField
          disabled={!allowSugarOption}
          select
          label="Sweetener"
          variant="outlined"
          error={Boolean(errors[SUGAR_INPUT])}
          helperText={
            errors[SUGAR_INPUT]?.message ||
            (!allowSugarOption &&
              "this drink includes sweetener or cannot be changed")
          }
          defaultValue={defaultSugarType}
          {...register(SUGAR_INPUT, {
            required: "Please select a sweetness level",
          })}
        >
          {sugarMenuOptions.map((option) => (
            <MenuItem value={option}>{option}</MenuItem>
          ))}
        </TextField>

        {sugarSelection !== defaultSugarType && (
          <TextField
            select
            label="Sugar Level"
            variant="outlined"
            error={Boolean(errors[SUGAR_LEVEL_INPUT])}
            helperText={errors[SUGAR_LEVEL_INPUT]?.message}
            defaultValue={defaultSugarLevel}
            {...register(SUGAR_LEVEL_INPUT)}
          >
            {sugarLevelOptions.map((option) => (
              <MenuItem value={option}>{option}</MenuItem>
            ))}
          </TextField>
        )}
        
        {allowDecafOption && (
          <FormControlLabel
            sx={{ width: "fit-content" }}
            control={<Switch {...register(DECAF_INPUT)} />}
            label="Decaf"
          />
        )}

        <TextField
          label="Special requests"
          variant="outlined"
          error={Boolean(errors[REQUESTS_INPUT])}
          helperText={
            Boolean(errors[REQUESTS_INPUT])
              ? errors[REQUESTS_INPUT]?.message
              : "add whipped cream, add cold foam, add extra shot..."
          }
          {...register(REQUESTS_INPUT, {
            maxLength: { value: 75, message: "Max 75 characters" },
          })}
        />
        <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
          <Button
            onClick={handleNavToMenu}
            sx={{ width: "fit-content" }}
            variant="outlined"
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            sx={{ width: "fit-content" }}
            type="submit"
          >
            Place order
          </Button>
        </Box>
      </Box>
      <ConfirmDialog
        open={isOpen}
        title="Thank you!"
        content={`Your order has been submitted. You will be charged ${getRandomPrice()}`}
        onCancel={handleNavToMenu}
        onConfirm={handleNavToMenu}
      />
    </form>
  );
};
