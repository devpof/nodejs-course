//simple promise example

var asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() =>{
      if(typeof a === 'number' && typeof b === 'number') {
        resolve(a + b);
      } else {
        reject('Arguments must be numbers');
      }
    }, 1500);
  });
}

//chaining promises
asyncAdd(5, '7').then((result) => {
  console.log('Result: ', result);
  return asyncAdd(result, 33);
}).then((result) => {
  console.log('Should be 45: ', result)
}).catch((errorMessage) => {
  console.log(errorMessage);
});
// //the Promise callback function always has resolve, reject arguments passed
// var somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     //this is what will return when success otherwise use reject
//     // resolve('Hey. It worked!');
//     reject('Unable fulfill promise');
//   }, 2000);
// });
//
// //runs after somePromise finishes.
// //the function inside the .then will ONLY run if the previous function is fulfilled/resolved.
// //second argument contains the function when promise is rejected.
// //the 2 function arguments in the .then will depend on the position of
// //reject and resolve argument when the Promise is created.
// somePromise.then((message) => {
//   console.log(`Success: ${message}`);
// }, (errorMessage) => { //handle rejections
//   console.log(`Error: ${errorMessage}`);
// });
