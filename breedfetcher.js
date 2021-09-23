const request = require('request');

const args = process.argv.slice(2);
const url = `https://api.thecatapi.com/v1/breeds/search?q=${args}`


// console.log(url);
// console.log(request.get(url));
// request(url);
//Here we are allowing the user to specify the breed name using command line arguments by accepting the command line arguments, storing them in our args variable using process.argv.slive and then passing that to our request function as the first parameter. With the use of a template literal we are able to dynamically pass user input to our request so the user can access any breed.
//The body is the entire response sent back from the API Server.
request(`https://api.thecatapi.com/v1/breeds/search?q=${args}`,  (err, res, body) => {
  if (err) { return console.log(err); }
  //console.log(body)
  
  const data = JSON.parse(body)
  //console.log(data[0]);
  //Here we are checking if data[0] is empty or if there was nothing retrieved from our request.
  if(!data[0]) {
    console.log("Sorry there is an error");

    return;
  }

  console.log(`${data[0].name}\nweight: ${data[0].weight.imperial}\ndescription: ${data[0].temperament}`); 
  
});