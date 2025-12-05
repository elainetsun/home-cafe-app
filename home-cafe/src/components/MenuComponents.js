import React from "react";
import { Box, Typography, Card, CardContent, Grid } from "@mui/material";
import theme from "../theme";
import { MENU_HEADER_TEXT } from "../constants";

const menuItems = [
  {
    name: "Cappuccino",
    desc: "Rich espresso with steamed milk foam",
    price: "$4.50",
  },
  { name: "Latte", desc: "Smooth espresso with creamy milk", price: "$4.00" },
  { name: "Mocha", desc: "Chocolate espresso delight", price: "$4.75" },
  { name: "Chai Latte", desc: "Spiced tea with steamed milk", price: "$4.25" },
  { name: "Matcha Latte", desc: "Creamy green tea latte", price: "$4.50" },
];

export const MenuHeader = () => (
  <Typography variant="h1" gutterBottom>
    {MENU_HEADER_TEXT}
  </Typography>
);

export const MenuItem = ({ item }) => (
  <Card
    sx={{
      backgroundColor: theme.palette.background.paper,
      width: "300px",
    }}
  >
    <CardContent>
      <Typography variant="h2">{item.name}</Typography>
      <Typography variant="body1">{item.desc}</Typography>
      <Typography variant="h3" sx={{ marginTop: 1 }}>
        {item.price}
      </Typography>
    </CardContent>
  </Card>
);

export const MenuItemContainer = () => (
  <Grid container spacing={3}>
    {menuItems.map((item) => (
      <Grid key={item.name}>
        <MenuItem item={item} />
      </Grid>
    ))}
  </Grid>
);
