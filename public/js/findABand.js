//const findBand = require("../../views");
const searchFormEl = document.querySelector("form");
const genreOptionEl = document.querySelector("#genreOption");
const locationOptionEl = document.querySelector("#location");
const feeOptionEl = document.querySelector("#fee");

const BandFormHandler = async function (event) {
  event.preventDefault();
  //console.log(genreOptionEl);
  
  const searchGenres = [].filter
                .call(genreOptionEl.options, option => (option.selected && option.value != 'None'))
                .map(option => option.value);   
  console.log("searchGenres", searchGenres);
  const city = locationOptionEl.value;             
  console.log("city", city);
  const fee = feeOptionEl.value;
  console.log("fee", fee);
  
  let queryUrl = '/api/bands?';
  if(searchGenres.length != 0){
    searchGenres.forEach(genre => 
    { 
        queryUrl += `genre=${genre}&`;
    });
  }
  if(city != "" && city != "None"){
    queryUrl += `location=${city}&`;
  } 
  if(fee != "" && fee != "None"){
    queryUrl += `fee=${fee}&`;
  }       
  
    console.log(queryUrl);
  
    // When a query is received collect the data
    fetch(queryUrl)
    .then(response => {
      if (!response.ok) {
        return alert('Error: ' + response.statusText);
      }
      return response.json();
    })
    .then(bands => {
      console.log(bands);
      //Update content with current handlebars view
    });
  /*if (body) {
    await fetch("/api/bands", {
      method: "GET",
      body: JSON.stringify({
        genre,
        body,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    document.location.reload();
  }*/

};
/*
document
  .querySelector("#genre-list")
  .addEventListener("click", BandFormHandler);

const select = document.getElementById('select');

select.addEventListener('change', function handleChange(event) {
  console.log(event.target.value);// get selected VALUE

  //get selected VALUE even outside event handler
  console.log(select.options[select.selectedIndex].value);

  //get selected TEXT in or outside event handler
  console.log(select.options[select.selectedIndex].text);
});
*/
searchFormEl.addEventListener('submit', BandFormHandler);