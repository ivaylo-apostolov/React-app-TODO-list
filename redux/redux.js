const { createStore } = Redux;

const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      state++;
      break;
    case "DECREMENT":
      state--;
      break;
    default:
      return 0;
  }
};

const store = createStore(counter);
const render = () => {
    document.getElementById("total").innerText = store.getState();
}
store.subscribe(render);

document.getElementById("incrementBtn").addEventListener("click", () => {
  store.dispatch({ type: "INCREMENT"});
  
});
document.getElementById("decrementBtn").addEventListener("click", () => {
  store.dispatch({ type: "DECREMENT"});
});

