export const tags = {
  1: "hot",
  2: "cold",
  3: "special",
};

export const emojis = {
  1: "☕",
  2: "🧋",
  3: "🍵",
  4: "🍫",
};

export const menuItems = [
  {
    id: 1,
    emoji: 1,
    displayName: "Cafe latte",
    description: "espresso, milk",
    isSugarCustomizable: true,
    tags: [1],
  },
  {
    id: 2,
    emoji: 2,
    displayName: "Iced cafe latte",
    description: "espresso, milk, ice",
    isSugarCustomizable: true,
    tags: [2],
  },
  {
    id: 3,
    emoji: 3,
    displayName: "Matcha latte",
    description: "matcha, milk, ice",
    isSugarCustomizable: true,
    tags: [1],
  },
  {
    id: 4,
    emoji: 3,
    displayName: "Iced matcha latte",
    description: "matcha, milk, ice",
    isSugarCustomizable: true,
    tags: [2],
  },
  {
    id: 5,
    emoji: 4,
    displayName: "Hot chocolate",
    description: "yumm",
    isSugarCustomizable: false,
    tags: [1],
  },
];
