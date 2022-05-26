const lyricFormHandler = async function (event) {
  event.preventDefault();
  console.log("lyricFormHandler");

  const songTitleEl = document.querySelector("#song-title");
  const artistEl = document.querySelector("#artist-name");

  if (songTitleEl && artistEl) {
    const songTitle = songTitleEl.value.trim();
    const artist = artistEl.value.trim();
    // Directing to a new page to display the lyrics
    location.replace(`/song?title=${songTitle}&artist=${artist}`);
  }
};

document
  .querySelector("#lyric-form")
  .addEventListener("submit", lyricFormHandler);
