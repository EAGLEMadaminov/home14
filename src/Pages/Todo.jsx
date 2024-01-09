import { useDispatch, useSelector } from "react-redux";
import { useContext } from "react";
import {
  addTodo,
  deleteTodo,
  toggleComplete,
  updateTodo,
} from "../Store/Slices/todoSlice";

import { TodoContext } from "../Context";
import { SideBarContext } from "../Context/sideBar";

const Todo = ({ todo }) => {
  const { checkCompelte, editItem, setEditItem } = useContext(TodoContext);
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };
  const handleCheck = () => {
    // dispatch(toggleComplete(todo.id));
    checkCompelte(todo.id);
  };

  const handleUpdate = () => {
    dispatch(updateTodo(todo.id));
    setEditItem(!editItem);
  };

  const handleChanged = (e) => {
    console.log(e.target.value);
  };
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span
        onChange={(e) => handleChanged(e.target.value)}
        className={todo.isComplete ? "text-decoration-line-through" : ""}
        contentEditable={editItem}
      >
        {todo?.title}
      </span>
      <div className="actions d-flex gap-3">
        <button className="btn btn-primary" onClick={handleUpdate}>
          🖊
        </button>
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
  const { addTodo, todos } = useContext(TodoContext);
  // const dispatch = useDispatch();

  // const todos = useSelector((store) => store.todo);

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    if (!title) return alert("Input is required!");

    // dispatch(addTodo({ id: crypto.randomUUID(), title, isComplete: false }));
    e.target.reset();
    const newTodo = { id: crypto.randomUUID(), title, isComplete: false };
    addTodo(newTodo);
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
