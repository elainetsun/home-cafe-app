import { useState, useMemo } from "react";
import { Tabs, Tab, Box, Typography } from "@mui/material";
import { DrinkCard } from "./DrinkCard";
import { useMenuItems } from "../hooks/useMenuItems";

const TabPanel = ({ value, index, children }) => (
  <div hidden={value !== index}>
    {value === index && (
      <Box sx={{ p: 2 }}>
        <Typography>{children}</Typography>
      </Box>
    )}
  </div>
);

const StyledCardContainer = ({ children }) => (
  <Box
    sx={{
      display: "grid",
      gap: 2,
      gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
    }}
  >
    {children}
  </Box>
);

const MenuTabs = ({ menuItems = [] }) => {
  const [value, setValue] = useState(0);

  const seasonalItems = useMemo(
    () => menuItems.filter((item) => item?.name?.includes("seasonal")),
    [menuItems],
  );
  const icedItems = useMemo(
    () => menuItems.filter((item) => item?.name?.includes("Iced")),
    [menuItems],
  );
  const hotItems = useMemo(
    () => menuItems.filter((item) => !item?.name?.includes("Iced")),
    [menuItems],
  );

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs value={value} onChange={(_, v) => setValue(v)}>
        <Tab label="All" />
        <Tab label="Seasonal" />
        <Tab label="Iced" />
        <Tab label="Hot" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <StyledCardContainer>
          {menuItems?.map((card) => (
            <DrinkCard {...card} />
          ))}
        </StyledCardContainer>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <StyledCardContainer>
          {seasonalItems?.map((card) => (
            <DrinkCard {...card} />
          ))}
        </StyledCardContainer>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <StyledCardContainer>
          {icedItems?.map((card) => (
            <DrinkCard {...card} />
          ))}
        </StyledCardContainer>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <StyledCardContainer>
          {hotItems?.map((card) => (
            <DrinkCard {...card} />
          ))}
        </StyledCardContainer>
      </TabPanel>
    </Box>
  );
};

export const MenuPage = () => {
  const { data: menuItems = [] } = useMenuItems();

  return <MenuTabs menuItems={menuItems} />;
};
