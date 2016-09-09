function createStore( reducer ) {
  var state;
  var observers = [];

  var getState = function() {
     return state;
  };

  var subscribe = function( observer ) {
    observers.push( observer );
  };

  var dispatch = function( action ) {
    state = reducer(state, action);

    observers.forEach( function( observer ) {
      observer();
    });
  };

  dispatch({});

  return { getState: getState, subscribe: subscribe, dispatch:dispatch };
}

module.exports = createStore;
// TESTS
// var store = createStore( function(state, action) {
//   var state = state || {};
//   return state;
// });
//
// var subOne = function() {
//   console.log('subOne');
// }
//
// var subTwo = function() {
//   console.log('subTwo');
// }
//
// console.log(store.getState()); // undefined?
// store.dispatch({});
// console.log(store.getState()); // empty obj
// console.log(store.subscribe(subOne)); // undefined?
// store.dispatch({}); // print subOne
// console.log(store.subscribe(subTwo)); // undefined?
// store.dispatch({}); // print subOne, subTwo
