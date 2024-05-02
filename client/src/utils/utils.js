const PORT = 8080;
export const BASE_URL = `http://localhost:${PORT}`;

const EMOJI = {
  Tomatoes: "🍅",
  SnapPeas: "🫛",
  Carrots: "🥕",
  BellPeppers: "🫑",
  HotPeppers: "🌶️",
  Broccoli: "🥦",
  Lettuce: "🥬",
  Cucumbers: "🥒",
  Strawberries: "🍓",
  Corn: "🌽",
  Pumpkins: "🎃",
  Potatoes: "🥔",
  Beans: "🫘",
  Onions: "🧅",
  Garlic: "🧄",
};
export const getEmoji = (key) => {
    key = key.replace(/ /g, '');
    return EMOJI[key]}
