// function getTempCallback (location, callback) { // once it gets the weather, it'll pass the weather in the callback.
//   callback(undefined, 78); // (undefined as an error, 78 is a temperature) the success case, when we don't have an error argument, we just have our temp.
//   callback('City not found'); // we have an error so we pass in the string and we don't pass the temp.
// }
//
// getTempCallback('Syracuse', function (err, temp) {
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
// function getTempPromise (location) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve(79); // if things go well, we'll call resolve
//       reject('City not found'); // if things didn't go well, we'll call reject
//     }, 1000);
//   });
// }
// // 1st function is the success case
// // 2nd argument is the error case
// getTempPromise('Syracuse').then(function (temp) {
//   console.log('Promise success', temp);
// }, function (err) {
//   console.log('Promise error', err);
// });


function addPromise (a, b) {
  return new Promise(function(resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a+b);
    } else {
      reject('A & B need to be numbers');
    }
  });
}

addPromise(6, 2).then(function (sum) {
  console.log('Promise success', sum);
}, function (err) {
  console.log('Promise error', err);
});

addPromise('Theerut', 9).then(function (sum) {
  console.log('This should not show up');
}, function (err) {
  console.log('This should appear', err);
});
