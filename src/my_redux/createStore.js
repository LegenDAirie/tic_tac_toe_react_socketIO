import { filter, each } from 'lodash';

export default function createStore({ initialState, reducer }) {
  var currentState = initialState;
  var observers = [];

  function dispatcher(action) {
    currentState = reducer(action);

    each(observers, function(observer) {
      observer();
    });
  }

  function getState() {

    return currentState;
  }

  function subscribe(observer) {
    observers.push(observer);

    return function() {
      observers = _.filter(observers, function(obs) {
        return observer !== obs;
      });
    };
  }

  return {
    dispatcher,
    getState,
    subscribe
  };
}
