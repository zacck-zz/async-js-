const waitAFewSeconds = () => {
  //lets return a promise that does serious work
  return new Promise(function(resolve, reject) {
    setTimeout(function () {
      resolve('seriosness done')
    }, 2000);
  });

}


//now lets call our function and wait for it to finish
async function wait()   {
  console.log('before await')
  console.log(await waitAFewSeconds());
  console.log('after await')
}
