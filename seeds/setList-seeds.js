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
];

const seedSetLists = () =>
  SetList.bulkCreate(setListData, { individualHooks: true });

module.exports = seedSetLists;
