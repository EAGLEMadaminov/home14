const initialState = [];
function todoReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "DELETE":
      return state.filter((todo) => todo.id !== action.payload);
    case "CHECK":
      return state.map((todo) => {
        if (todo.id === action.payload) {
          todo.isCompleted = !todo.isCompleted;
          return todo;
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
}

export default todoReducer;
