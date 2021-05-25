const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  console.log('state:', state);
  return {
    counter: state.counter + 1,
  };
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log("latest state:", latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: "increment" });
