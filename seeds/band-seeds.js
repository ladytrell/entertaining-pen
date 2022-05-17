const { Band } = require('../models');

const banddata = [
  {
    name: 'Sick Sugar',
    email: 'sick-sugar@music.com',
    password: 'password123',
    socialMedia: {
        facebook: '',
        instagram: '',        
    }
  },
  {
    username: 'Soul Singers',
    email: 'soul-singers@music.com',
    password: 'password123', 
    socialMedia: {
        facebook: '',
        instagram: '',        
    }
  }
];

const seedBands = () => Band.bulkCreate(banddata, {individualHooks: true});

module.exports = seedBands;