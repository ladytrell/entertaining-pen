const { Tag } = require("../models");

const tagData = [
  {
    genre1: "Rock",
    genre2: "Pop",
    genre3: "Country",
    fee: 200,
    location: "Raleigh",
    travelRadius: 150,
    setList: "1. Don't Stop Believing (Journey),  2. Horse With No Name (America), 3. Hey Jude (The Beatles),  4. Welcome To The Jungle (Guns N Roses),  5. Hotel California (The Eagles)",
  },
  {
    genre1: "Jazz",
    genre2: "Pop",
    genre3: "Bebop",
    fee: 50,
    location: "Durham",
    travelRadius: 75,
    setList: "1. Take Five (Dave Brubeck Quartet),  2. Take The A Train (Duke Ellington),  3. Moanin' (Art Blakey),  4. So What (Miles Davis),  5. A Love Supreme (John Coletrane)",
  },
  {
    genre1: "Country",
    genre2: "Pop",
    genre3: "Dance",
    fee: 150,
    location: "Raleigh",
    travelRadius: 100,
    setList: "1. I Will Always Love You (Dolly Parton),  2. A Boy Named Sue (Johnny Cash),  3. Ode To Billy Joe (Bobbie Gentry),  4. You're Still The One (Shania Twain),  5. Feels So Right (Alabama)",
  },
  {
    genre1: "Hip Hop",
    genre2: "Electronic",
    genre3: "Pop",
    fee: 125,
    location: "Chapel Hill",
    travelRadius: 75,
    setList: "1. Lost Ones (Lauren Hill),  2. Hey Ya (OutKast),  3. Baby's Got Back (Sir Mixalot),  4. Empire State of Mind (Jay Z),  5. Gold Digger (Kanye West)",
  }
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
