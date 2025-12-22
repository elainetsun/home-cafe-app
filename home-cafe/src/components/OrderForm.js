import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Box,
  MenuItem,
  Typography,
  Dialog,
  DialogTitle,
  DialogActions,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useMenuItems } from "../hooks/useMenuItems";
import { useOrderItem } from "../hooks/useOrderItem";
import { sugarMenuOptions } from "../constants";

const NAME_INPUT = "customerName";
const REQUESTS_INPUT = "specialRequests";
const SUGAR_INPUT = "sweetener";

export const OrderForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { id } = useParams();
  const navigate = useNavigate();

  const handleNavToMenu = () => {
    navigate("/");
  };

  const selectMenuItem = useCallback(
    (items) => {
      return items.find((item) => Number(item?.id) === Number(id));
    },
    [id],
  );

  const { data: selectedMenuItem } = useMenuItems({ select: selectMenuItem });
  const { mutate } = useOrderItem();

  const onSubmit = (data) => {
    const orderData = {
      ...data,
      ...selectedMenuItem,
    };
    mutate(orderData);
    setIsOpen(true);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ display: "flex", flexDirection: "column", p: 2, gap: 2 }}>
        <Typography variant="h2" sx={{ m: 0 }}>
          Order {selectedMenuItem?.name}
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
          select
          label="Sweetener"
          variant="outlined"
          error={Boolean(errors[SUGAR_INPUT])}
          helperText={errors[SUGAR_INPUT]?.message}
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
          rows={2}
          label="Special requests"
          variant="outlined"
          error={Boolean(errors[REQUESTS_INPUT])}
          helperText={
            Boolean(errors[REQUESTS_INPUT])
              ? errors[REQUESTS_INPUT]?.message
              : "half sweet, extra shot, less ice, ...etc"
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
          <Button sx={{ width: "fit-content" }} type="submit">
            Place order
          </Button>
        </Box>
      </Box>
      <ConfirmDialog
        open={isOpen}
        title="Thank you! Your order was submitted"
        onCancel={() => setIsOpen(false)}
        onConfirm={handleNavToMenu}
      />
    </form>
  );
};

export function ConfirmDialog({ open, title, onConfirm, onCancel }) {
  return (
    <Dialog open={open} onClose={onCancel}>
      <DialogTitle>{title}</DialogTitle>
      <DialogActions>
        <Button onClick={onConfirm} variant="contained" autoFocus>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
}
