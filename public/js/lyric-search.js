

const lyricFormHandler = async function(event) {
  event.preventDefault();
  console.log('lyricFormHandler');

  const songTitleEl = document.querySelector('#song-title');
  const artistEl = document.querySelector('#artist-name');

  if (songTitleEl && artistEl) {
    const songTitle = songTitleEl.value.trim();
    const artist = artistEl.value.trim();
    const searchStr = songTitle + ' - ' + artist;
    
    const response = await fetch('/api/songs');
    
  }
};

//document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);

document
  .querySelector('.login-form')
  .addEventListener('submit', lyricFormHandler);
