import theme from "../theme";
import BearLogoImg from "../sp.jpg";
import { Box, Card, Typography, Button } from "@mui/material";
import { AppHeader } from "./AppHeader";
import { DrinkCard } from "./DrinkCard";

const cards = [
  {
    emoji: "☕",
    title: "Cafe latte",
    desc: "$Espresso, milk",
  },
  {
    emoji: "🍵",
    title: "Matcha latte",
    desc: "Matcha, milk",
  },
  {
    emoji: "🍫",
    title: "Hot chocolate",
    desc: "Yuum",
  },
];

export const MenuPage = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gap: 2,
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
      }}
    >
      {cards.map((card) => (
        <DrinkCard {...card} />
      ))}
    </Box>
  );
};
