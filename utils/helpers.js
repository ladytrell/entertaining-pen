function filterByQuery(query, bands) {
    console.log("bands", bands);
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
    if (query.genre) {
      // Save genres as a dedicated array.
      // If genres is a string, place it into a new array and save.
      if (typeof query.genre === 'string') {
        genreSearch = [query.genre];
      } else {
        genreSearch = query.genre;
      }
      console.log("genreSearch",genreSearch);
      // Loop through each genre in the genres array:
      genreSearch.forEach(genre => {
        tempArray =  tempArray.concat(filteredResults.filter(band => (band.tag.genre1 == genre || band.tag.genre2 == genre || band.tag.genre3 == genre)));
        filteredResults = filteredResults.filter(band => (band.tag.genre1 != genre && band.tag.genre2 != genre && band.tag.genre3 != genre));
      });
       filteredResults = tempArray;
    }
    console.log("filteredResults", filteredResults);
    return filteredResults;
}

module.exports = {
  filterByQuery
};