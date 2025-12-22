export const APP_HEADER_TEXT = "Snuffles Cafe";
export const APP_HEADER_SUBTEXT = "yesssss what would you like?";

export const MENU_ITEMS_URL = `${process.env.REACT_APP_API_BASE_URL}/menuItems`;
export const ORDER_ITEM_URL = `${process.env.REACT_APP_API_BASE_URL}/orders`;
export const PENDING_ORDERS_URL = `${process.env.REACT_APP_API_BASE_URL}/orders?status=pending`;

export const sugarMenuOptions = [
  "no sugar added",
  "maple syrup",
  "simple syrup",
  "honey",
  "monk fruit",
  "chocolate sauce",
  "sugar free pumpkin",
  "sugar free hazelnut",
];

export const sugarLevelOptions = [
  "25% (not very sweet)",
  "50% (a little sweet)",
  "75% (regular sweetness)",
  "100% (extra sweet)",
];

export const defaultSugarType = sugarMenuOptions[0];
export const defaultSugarLevel = sugarLevelOptions[2];
