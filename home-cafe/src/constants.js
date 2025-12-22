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
  "sugar free vanilla",
  "sugar free hazelnut",
];
