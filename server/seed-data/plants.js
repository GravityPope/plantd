module.exports = [
  {
    id: "0738a646-6aa8-4d5e-b5bd-3c2f6c9a4d56",
    name: "Tomatoes",
    description:
      "A heat loving and thirsty garden classic, with many different varieties sutable for different preparations",
    default_cultivar: "",
    type_id: "f6052f3a-deb9-4861-a962-e3aac2865091",
  },
  {
    id: "ab152a53-8a17-45e2-a864-e9b985c66683",
    name: "Snap Peas",
    description:
      "A sweet and crunchy vegetable, perfect for snacking or adding freshness to salads, with vines that climb and yield abundantly, making it an easly season favorite in any garden.",
    default_cultivar: "",
    type_id: "dbeb26db-ae85-4a6d-9c38-e93a975d4b60",
  },
  {
    id: "0bdceca3-fafe-47de-8ac3-f57cfe3bbff9",
    name: "Carrots",
    description:
      "A vibrant root vegetable known for their sweet flavor and versatility in cooking, making them a beloved staple in gardens and kitchens worldwide.",
    default_cultivar: "",
    type_id: "e0f4f72d-1065-45dc-9539-80a9c60f2f02",
  },
  {
    id: "1b85555f-aff0-4c1f-8b15-31c17392a546",
    name: "Bell Peppers",
    description:
      "A colorful, crisp, hot-season vegetable with a sweet flavor, ideal for adding vibrancy to dishes or enjoying fresh from the garden.",
    default_cultivar: "",
    type_id: "c1d5dd0c-3dec-4578-ad5b-62068a1df881",
  },
  {
    id: "a4c96db8-35a6-4ff2-8a2d-79dd1977c563",
    name: "Hot Peppers",
    description:
      "A fiery, flavorful gem that add spice and depth to dishes, making them a must-have for any garden seeking to infuse heat into culinary creations.",
    default_cultivar: "",
    type_id: "c1d5dd0c-3dec-4578-ad5b-62068a1df881",
  },
  {
    id: "3e6b463b-8e92-4926-b2b1-e842d4c1f1e9",
    name: "Broccoli",
    description:
      "With compact florets and nutrient-rich stalks, Broccoli is a versatile and nutritious vegetable that thrives in gardens, offering a delicious addition to a variety of dishes.",
    default_cultivar: "",
    type_id: "e36671e0-d528-493f-8cf0-b6335701e1c3",
  },
  {
    id: "14b2ac02-0c9c-4e02-85a7-0ac946225d58",
    name: "Lettuce",
    description:
      "A cool season crop with crisp leaves and refreshing taste that adds a burst of freshness to salads and sandwiches.",
    default_cultivar: "",
    type_id: "fddf728c-84a6-43f3-9c30-e412f793e2c4",
  },
  {
    id: "05cb53c6-15ee-4c42-9e0f-a09468a21725",
    name: "Cucumbers",
    description:
      "A heat loving and water intensive plant, perfect for fresh salads, pickling, or simply enjoying as a healthy snack straight from the vine.",
    default_cultivar: "",
    type_id: "fd2e4534-ca6b-45f1-874b-0a4f91cc688f",
  },
  {
    id: "43d50474-d1f6-4ff9-b2d1-658a2efccba1",
    name: "Strawberries",
    description:
      "Juicy sweetness and vibrant color make Strawberries perfect for enjoying fresh and adding to desserts. Also great for canning and freezing to enjoy all year.",
    default_cultivar: "",
    type_id: "479cbb7f-00d8-4c24-a45c-7d10865a7fec",
  },
  {
    id: "92fe9d1d-1a43-4864-b265-9069079bf2c0",
    name: "Corn",
    description:
      "A tall cereal plant bearing large, edible grains on cob-like structures, renowned for its versatility in culinary applications and its role as a staple crop in many cultures.",
    default_cultivar: "",
    type_id: "5bdba3d3-451e-4ee8-ba78-efcf9746aff8",
  },
  {
    id: "33fc1aaa-a515-4398-96f7-213d48e2feab",
    name: "Pumpkins",
    description:
      "Large, vine-growing squash renowned for their culinary versatility in dishes like pies and soups, as well as their iconic role in Halloween decorations, with their hollowed-out shells often carved into spooky Jack-o'-lanterns.",
    default_cultivar: "",
    type_id: "ef45d33a-6873-48bf-a99e-d159c6692b04",
  },
  {
    id: "bb5154f1-ae1f-4545-8437-4b51d3b921fc",
    name: "Potatoes",
    description:
      "Versatile, starchy tubers prized for their culinary flexibility, serving as a staple ingredient in a myriad of dishes worldwide.",
    default_cultivar: "",
    type_id: "e0f4f72d-1065-45dc-9539-80a9c60f2f02",
  },
  {
    id: "cc45e787-248b-45ac-90aa-b7540fc5657e",
    name: "Beans",
    description:
      "Nutritious plants known for their protein-rich seeds and diverse culinary uses, while also serving as valuable nitrogen-fixing crops in garden rotations.",
    default_cultivar: "",
    type_id: "dbeb26db-ae85-4a6d-9c38-e93a975d4b60",
  },
  {
    id: "b26b6629-4eb6-4047-8773-1c7cfe6d9ccc",
    name: "Onions",
    description:
      "Pungent, bulbous vegetables prized for their distinctive flavor and versatile culinary applications, from savory soups to caramelized toppings, while also playing a crucial role in garden biodiversity and pest management strategies.",
    default_cultivar: "",
    type_id: "b3e6b52c-cd71-429c-af1b-afed9bca8643",
  },
  {
    id: "a68fe70a-fdd7-4e9c-9572-28db9787159e",
    name: "Garlic",
    description:
      "Flavorful bulbous plants revered for its culinary prowess, enriching dishes with its robust taste and aromatic essence, while also serving as a natural pest deterrent in garden cultivation.",
    default_cultivar: "",
    type_id: "b3e6b52c-cd71-429c-af1b-afed9bca8643",
  },
];


// generate new random UUIDs for seed by running the file with node
let plantDataIdGeneration = () => {
  return [
    {
      id: crypto.randomUUID(),
      name: "Tomatoes",
      description:
        "A heat loving and thirsty garden classic, with many different varieties sutable for different preparations",
      default_cultivar: "",
      type_id: "f6052f3a-deb9-4861-a962-e3aac2865091",
    },
    {
      id: crypto.randomUUID(),
      name: "Snap Peas",
      description:
        "A sweet and crunchy vegetable, perfect for snacking or adding freshness to salads, with vines that climb and yield abundantly, making it an easly season favorite in any garden.",
      default_cultivar: "",
      type_id: "dbeb26db-ae85-4a6d-9c38-e93a975d4b60",
    },
    {
      id: crypto.randomUUID(),
      name: "Carrots",
      description:
        "A vibrant root vegetable known for their sweet flavor and versatility in cooking, making them a beloved staple in gardens and kitchens worldwide.",
      default_cultivar: "",
      type_id: "e0f4f72d-1065-45dc-9539-80a9c60f2f02",
    },
    {
      id: crypto.randomUUID(),
      name: "Bell Peppers",
      description:
        "A colorful, crisp, hot-season vegetable with a sweet flavor, ideal for adding vibrancy to dishes or enjoying fresh from the garden.",
      default_cultivar: "",
      type_id: "c1d5dd0c-3dec-4578-ad5b-62068a1df881",
    },
    {
      id: crypto.randomUUID(),
      name: "Hot Peppers",
      description:
        "A fiery, flavorful gem that add spice and depth to dishes, making them a must-have for any garden seeking to infuse heat into culinary creations.",
      default_cultivar: "",
      type_id: "c1d5dd0c-3dec-4578-ad5b-62068a1df881",
    },
    {
      id: crypto.randomUUID(),
      name: "Broccili",
      description:
        "With compact florets and nutrient-rich stalks, Broccoli is a versatile and nutritious vegetable that thrives in gardens, offering a delicious addition to a variety of dishes.",
      default_cultivar: "",
      type_id: "e36671e0-d528-493f-8cf0-b6335701e1c3",
    },
    {
      id: crypto.randomUUID(),
      name: "Lettuce",
      description:
        "A cool season crop with crisp leaves and refreshing taste that adds a burst of freshness to salads and sandwiches.",
      default_cultivar: "",
      type_id: "fddf728c-84a6-43f3-9c30-e412f793e2c4",
    },
    {
      id: crypto.randomUUID(),
      name: "Cucumbers",
      description:
        "A heat loving and water intensive plant, perfect for fresh salads, pickling, or simply enjoying as a healthy snack straight from the vine.",
      default_cultivar: "",
      type_id: "fd2e4534-ca6b-45f1-874b-0a4f91cc688f",
    },
    {
      id: crypto.randomUUID(),
      name: "Strawberries",
      description:
        "Juicy sweetness and vibrant color make Strawberries perfect for enjoying fresh and adding to desserts. Also great for canning and freezing to enjoy all year.",
      default_cultivar: "",
      type_id: "479cbb7f-00d8-4c24-a45c-7d10865a7fec",
    },
    {
      id: crypto.randomUUID(),
      name: "Corn",
      description:
        "A tall cereal plant bearing large, edible grains on cob-like structures, renowned for its versatility in culinary applications and its role as a staple crop in many cultures.",
      default_cultivar: "",
      type_id: "5bdba3d3-451e-4ee8-ba78-efcf9746aff8",
    },
    {
      id: crypto.randomUUID(),
      name: "Pumpkins",
      description:
        "Large, vine-growing squash renowned for their culinary versatility in dishes like pies and soups, as well as their iconic role in Halloween decorations, with their hollowed-out shells often carved into spooky Jack-o'-lanterns.",
      default_cultivar: "",
      type_id: "ef45d33a-6873-48bf-a99e-d159c6692b04",
    },
    {
      id: crypto.randomUUID(),
      name: "Potatoes",
      description:
        "Versatile, starchy tubers prized for their culinary flexibility, serving as a staple ingredient in a myriad of dishes worldwide.",
      default_cultivar: "",
      type_id: "e0f4f72d-1065-45dc-9539-80a9c60f2f02",
    },
    {
      id: crypto.randomUUID(),
      name: "Beans",
      description:
        "Nutritious plants known for their protein-rich seeds and diverse culinary uses, while also serving as valuable nitrogen-fixing crops in garden rotations.",
      default_cultivar: "",
      type_id: "dbeb26db-ae85-4a6d-9c38-e93a975d4b60",
    },
    {
      id: crypto.randomUUID(),
      name: "Onions",
      description:
        "Pungent, bulbous vegetables prized for their distinctive flavor and versatile culinary applications, from savory soups to caramelized toppings, while also playing a crucial role in garden biodiversity and pest management strategies.",
      default_cultivar: "",
      type_id: "b3e6b52c-cd71-429c-af1b-afed9bca8643",
    },
    {
      id: crypto.randomUUID(),
      name: "Garlic",
      description:
        "Flavorful bulbous plants revered for its culinary prowess, enriching dishes with its robust taste and aromatic essence, while also serving as a natural pest deterrent in garden cultivation.",
      default_cultivar: "",
      type_id: "b3e6b52c-cd71-429c-af1b-afed9bca8643",
    },
  ];
};

console.log(plantDataIdGeneration());
