module.exports = [
  { id: "f6052f3a-deb9-4861-a962-e3aac2865091", name: "Nightshade" },
  { id: "dbeb26db-ae85-4a6d-9c38-e93a975d4b60", name: "Legume" },
  { id: "e0f4f72d-1065-45dc-9539-80a9c60f2f02", name: "Root Crop" },
  { id: "c1d5dd0c-3dec-4578-ad5b-62068a1df881", name: "Pepper" },
  { id: "e36671e0-d528-493f-8cf0-b6335701e1c3", name: "Brassica" },
  { id: "fddf728c-84a6-43f3-9c30-e412f793e2c4", name: "Tender Green" },
  { id: "fd2e4534-ca6b-45f1-874b-0a4f91cc688f", name: "Cucurbit" },
  { id: "479cbb7f-00d8-4c24-a45c-7d10865a7fec", name: "Small Fruit" },
  { id: "5bdba3d3-451e-4ee8-ba78-efcf9746aff8", name: "Cereal Grain" },
  { id: "ef45d33a-6873-48bf-a99e-d159c6692b04", name: "Squash" },
  { id: "b3e6b52c-cd71-429c-af1b-afed9bca8643", name: "Allium" },
];

// generate new random UUIDs for seed by running the file with node
let typeDataIdGeneration = () => {
  return [
    {
      id: crypto.randomUUID(),
      name: "Nightshade",
    },
    {
      id: crypto.randomUUID(),
      name: "Legume",
    },
    {
      id: crypto.randomUUID(),
      name: "Root Crop",
    },
    {
      id: crypto.randomUUID(),
      name: "Pepper",
    },
    {
      id: crypto.randomUUID(),
      name: "Brassica",
    },
    {
      id: crypto.randomUUID(),
      name: "Tender Green",
    },
    {
      id: crypto.randomUUID(),
      name: "Cucurbit",
    },
    {
      id: crypto.randomUUID(),
      name: "Small Fruit",
    },
    {
      id: crypto.randomUUID(),
      name: "Cereal Grain",
    },
    {
      id: crypto.randomUUID(),
      name: "Squash",
    },
    {
      id: crypto.randomUUID(),
      name: "Allium",
    },
  ];
};

console.log(typeDataIdGeneration());
