function doWork(shouldFail) {
  return new  Promise(function(resolve, reject) {
    if(shouldFail) {
      reject();
    }
    setTimeout(() => {
      console.log('done');
      resolve();
    }, 1000)
  });
}


doWork().then(() => {
  return doWork(shouldFail)
}).then(() => {
  console.log('all done')
}).catch((err) => { //this will be run if any of our promises does not resolve
  console.log('caught error somewhere');
})
