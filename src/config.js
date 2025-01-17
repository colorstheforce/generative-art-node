const layersOrder = [
    { name: 'background', number: 1 },
    { name: 'ball', number: 2 },
    { name: 'eye color', number: 12 },
    { name: 'iris', number: 3 },
    { name: 'shine', number: 1 },
    { name: 'shine', number: 1 },
    { name: 'bottom lid', number: 4 },
    { name: 'top lid', number: 4 },
];
  
const format = {
    width: 230,
    height: 230
};

const rarity = [
    { key: "", val: "original" },
    { key: "_u", val: "uncommon" },
    { key: "_f", val: "foil" },
    { key: "_r", val: "rare" },
    { key: "_sr", val: "super rare" },
];

const defaultEdition = 1666;

module.exports = { layersOrder, format, rarity, defaultEdition };