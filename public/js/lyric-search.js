const lyricFormHandler = async function (event) {
  event.preventDefault();
  console.log("lyricFormHandler");

  const songTitleEl = document.querySelector("#song-title");
  const artistEl = document.querySelector("#artist-name");

  if (songTitleEl && artistEl) {
    const songTitle = songTitleEl.value.trim();
    const artist = artistEl.value.trim();
    const searchStr = songTitle + ' - ' + artist;
    location.replace(`/song?search=${searchStr}`);
   /* 
    const response = await fetch('/song', {
      method: 'POST',
      body: JSON.stringify({
        search: searchStr,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      console.log(response);
     // location.replace('/song');
    }*/
  }
};

document
  .querySelector("#lyric-form")
  .addEventListener("submit", lyricFormHandler);
