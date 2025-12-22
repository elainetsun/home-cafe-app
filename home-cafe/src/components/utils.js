import CircularProgress from "@mui/material/CircularProgress";
import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import { defaultSugarLevel } from "../constants";

export const getTimeAgo = (createdAt) => {
  const now = new Date();
  const past = new Date(createdAt);
  const diffMs = now - past;

  const seconds = Math.floor(diffMs / 1000);
  if (seconds < 60) return `${seconds}s ago`;

  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;

  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;

  const days = Math.floor(hours / 24);
  if (days < 7) return `${days}d ago`;

  const weeks = Math.floor(days / 7);
  if (weeks < 4) return `${weeks}w ago`;

  const months = Math.floor(days / 30);
  if (months < 12) return `${months}mo ago`;

  const years = Math.floor(days / 365);
  return `${years}y ago`;
};

export const getRandomPrice = () => {
  return `$${(Math.random() * 100).toFixed(2)}`;
};

export const formatSpecialRequests = ({
  isDecaf,
  specialRequests,
  sugarLevel,
}) => {
  const decaf = isDecaf ? "DECAF" : "";
  const sugarPercent = sugarLevel !== defaultSugarLevel ? `${sugarLevel}` : "";
  return [decaf, sugarPercent, specialRequests].filter(Boolean).join(", ");
};

export const LoadingSpinner = () => {
  return (
    <Box
      sx={{
        height: "50vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: 2,
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export const ConfirmDialog = ({
  open,
  title,
  content,
  onConfirm,
  onCancel,
}) => {
  return (
    <Dialog open={open} onClose={onCancel}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{content}</DialogContent>
      <DialogActions>
        <Button onClick={onConfirm} variant="contained" autoFocus>
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
};
