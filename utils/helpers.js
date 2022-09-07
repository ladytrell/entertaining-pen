function filterByQuery(query, bands) {
    console.log("query", query)
    // Note that we save the bands as filteredResults here:
    let filteredResults = bands;
    
    if (query.fee) {
      console.log("query", query)
      filteredResults = filteredResults.filter(band => band.tag.fee <= query.fee);
    }
    if (query.location) {
      filteredResults = filteredResults.filter(band => band.tag.location === query.location);
    }
    if (query.travelRadius) {
      filteredResults = filteredResults.filter(band => band.tag.travelRadius <= query.travelRadius);
    }

    let genreSearch = [];
    let tempArray = [];
    if (query.genres) {
      // Save genres as a dedicated array.
      // If genres is a string, place it into a new array and save.
      if (typeof query.genres === 'string') {
        genreSearch = [query.genres];
      } else {
        genreSearch = query.genres;
      }
      // Loop through each genre in the genres array:
      genreSearch.forEach(genre => {
        // Check the genre against each band in the filteredResults array.
        // Remember, it is initially a copy of the bands,
        // but here we're updating it for each genre in the .forEach() loop.
        // For each genre being targeted by the filter, the filteredResults
        // array will then contain only the entries that contain the genre,
        // so at the end we'll have an array of bands that have every one 
        // of the genres when the .forEach() loop is finished.

        /*filteredResults = filteredResults.filter(
            band => band.tag.genres.indexOf(genre) !== -1
        );*/

        tempArray =  filteredResults.filter(band => (band.tag.genre1 === genre || band.tag.genre2 === genre) || band.tag.genre3 === genre);

       });
       filteredResults = tempArray;
    }
    return filteredResults;
}

module.exports = {
  filterByQuery
};