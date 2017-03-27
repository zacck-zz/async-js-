function doWork(data, callback) {
  //do some work
  callback('done');
}

function doWorkPromise(data) {
  //return a new Promise
  //take in resolve to call when work is done
  //take in reject to call if something breaks
  return new Promise((resolve, reject) => {
    //all goes good
    //resolve(data);
    //or you can
    reject({error: 'Bad', message: 'Something Terrible went down'})
  });
}

//call the promise
doWorkPromise('some data').then((data) => {
  console.log(data);
}, (err) => {
  console.log(err.message)
});
