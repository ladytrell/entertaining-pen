const { SetList } = require("../models");

const setListData = [
  {
    band_id: 1,
    song_id: 1
  },
  {
    band_id: 1,
    song_id: 10
  },
  {
    band_id: 1,
    song_id: 3
  },  
  {
    band_id: 1,
    song_id: 13
  }, 
  {
    band_id: 1,
    song_id: 14
  },
  {
    band_id: 1,
    song_id: 15
  },
  {
    band_id: 1,
    song_id: 16
  },
  {
    band_id: 1,
    song_id: 17
  },
  {
    band_id: 1,
    song_id: 5
  },  
  {
    band_id: 2,
    song_id: 2
  },
  {
    band_id: 2,
    song_id: 9
  },
  {
    band_id: 2,
    song_id: 4
  },
  {
    band_id: 2,
    song_id: 6
  },
  {
    band_id: 2,
    song_id: 18
  },
  {
    band_id: 2,
    song_id: 19
  },
  {
    band_id: 2,
    song_id: 20
  },  
  {
    band_id: 2,
    song_id: 21
  },
  {
    band_id: 2,
    song_id: 22
  },
  {
    band_id: 3,
    song_id: 3
  },
  {
    band_id: 3,
    song_id: 7
  },
  {
    band_id: 3,
    song_id: 8
  },
  {
    band_id: 3,
    song_id: 11
  },
  {
    band_id: 3,
    song_id: 23
  },
  {
    band_id: 3,
    song_id: 24
  },
  {
    band_id: 3,
    song_id: 25
  },
  {
    band_id: 3,
    song_id: 26
  },
  {
    band_id: 3,
    song_id: 27
  },
  {
    band_id: 4,
    song_id: 1
  },
  {
    band_id: 4,
    song_id: 5
  },
  {
    band_id: 4,
    song_id: 8
  },
  {
    band_id: 4,
    song_id: 12
  },
  {
    band_id: 4,
    song_id: 28
  },
  {
    band_id: 4,
    song_id: 29
  },
  {
    band_id: 4,
    song_id: 30
  },
  {
    band_id: 4,
    song_id: 31
  },
  {
    band_id: 4,
    song_id: 32
  },
];

const seedSetLists = () =>
  SetList.bulkCreate(setListData, { individualHooks: true });

module.exports = seedSetLists;
