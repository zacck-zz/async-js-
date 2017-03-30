const getData = fetch('https://jsonplaceholder.typicode.com/posts')
.then((response) => { //here we fetch  contents of our url
  if(response.ok) {
    return response.json(); //if we get the content we return it  as a json object
  }
  throw new Error('Nework response broke'); //if response not ok lets throw an error
})
.then((respJson) => {
  console.log(respJson); //consume the data
})
.catch((err) => {
  console.log(err); //if an error occured show it
});

console.log(getData);
