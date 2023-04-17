const request = require('request');

const fetchBreedDescription = function(breed, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    if (error) {
      console.log("error: ", error);
    }
    if (response) {
      console.log("response: ", response.statusCode);
    }
    const data = JSON.parse(body);
    
    const breed = data[0];
    if (breed) {
      callback(null, breed.description);
    } else {
      callback(`failed to find ${breed}`, null);
    }
  });
};
  
module.exports = { fetchBreedDescription };