import { useDispatch, useSelector } from "react-redux";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch({
      type: "DELETE",
      payload: todo.id,
    });
  };
  const handleCheck = () => {
    dispatch({
      type: "CHECK",
      payload: todo.id,
    });
  };
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span
        className={`${todo.isCompleted ? "text-decoration-line-through" : ""}`}
      >
        {todo?.title}
      </span>
      <div className="actions d-flex gap-3">
        <button className="btn btn-info" onClick={handleCheck}>
          ✅
        </button>
        <button className="btn btn-danger" onClick={handleDelete}>
          ❌
        </button>
      </div>
    </li>
  );
};

const TodoApp = () => {
  const dispatch = useDispatch();

  const todos = useSelector((store) => store.todo);

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    if (!title) return alert("Input is required!");

    dispatch({
      type: "ADD_TODO",
      payload: {
        id: crypto.randomUUID(),
        title,
        isCompleted: false,
      },
    });
    e.target.reset();
  };

  return (
    <div>
      <h1 className="text-center">Todo App</h1>
      <form onSubmit={handleSubmit}>
        <div className="d-flex gap-3">
          <input
            type="text"
            className="form-control"
            placeholder="Write a todo..."
          />
          <button className="btn btn-success">Add</button>
        </div>
      </form>
      <ul className="list-group my-3">
        {todos.map((todo) => {
          return <Todo key={todo.id} todo={todo} />;
        })}
      </ul>
    </div>
  );
};

export default TodoApp;
