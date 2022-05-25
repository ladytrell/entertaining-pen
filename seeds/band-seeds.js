const { Band } = require("../models");

const bandData = [
  {
    bandname: "Sick Sugar",
    email: "sick-sugar@music.com",
    imagePath:
      "https://images.unsplash.com/photo-1467779009031-53938b78ca38?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170",
  },
  {
    bandname: "Soul Singers",
    email: "soul-singers@music.com",
    imagePath:
      "https://images.unsplash.com/photo-1597052826387-65a5a9639944?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074",
  },
  {
    bandname: "Little Monstors",
    email: "little-monstors@music.com",
    imagePath:
      "https://images.unsplash.com/photo-1583470037890-73cc6850b7eb?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631",
  },
  {
    bandname: "Fire Wings",
    email: "fire-wings@music.com",
    imagePath:
      "https://images.unsplash.com/photo-1503853585905-d53f628e46ac?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686",
  },
];

const seedBands = () => Band.bulkCreate(bandData);

module.exports = seedBands;
