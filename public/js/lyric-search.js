

const lyricFormHandler = async function(event) {
  event.preventDefault();
  console.log('lyricFormHandler');

  const songTitleEl = document.querySelector('#song-title');
  const artistEl = document.querySelector('#artist-name');

  if (songTitleEl && artistEl) {
    const songTitle = songTitleEl.value.trim();
    const artist = artistEl.value.trim();
    const searchStr = songTitle + ' - ' + artist;
    
    const response = await fetch('/songs', {
      method: 'POST',
      body: JSON.stringify({
        search: searchStr
      }),
    headers: { 'Content-Type': 'application/json' } 
    });  
    
    if (response.ok) {
      console.log(response);
    }
  }
};

//document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);

document
  .querySelector('#lyric-form')
  .addEventListener('submit', lyricFormHandler);
