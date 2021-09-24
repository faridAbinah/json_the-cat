const request = require('request');





const fetchBreedDescription = function(breedName, callback) {

  
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,  (err, res, body) => {
    if (err) {
      callback(err,null);
   
    }
    const data = JSON.parse(body);
    const breed = data[0];
  

    if (breed) {
      callback(null,data[0].description);
  } else {
    callback("Breed Not Found");
  }
  
  
});
};
module.exports = {fetchBreedDescription};

// console.log(url);
// console.log(request.get(url));
// request(url);
//Here we are allowing the user to specify the breed name using command line arguments by accepting the command line arguments, storing them in our args variable using process.argv.slive and then passing that to our request function as the first parameter. With the use of a template literal we are able to dynamically pass user input to our request so the user can access any breed.
//The body is the entire response sent back from the API Server.
// The description is fetched via an API request, which is network I/O. We use request which uses good Node practice by fetching our results asynchronously. Therefore, our fetch function also needs to be asynchronous. It should therefore accept a callback. We talked about how asynchronous functions can't simply return data in the previous cat exercise.


