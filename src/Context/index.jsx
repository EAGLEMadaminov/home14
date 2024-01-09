import { createContext, useState } from "react";

const TodoContext = createContext([]);

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [editItem, setEditItem] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
    console.log(todos);
  };

  const checkCompelte = (id) => {
    console.log(id);
    let newA = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
        return todo;
      }
      return todo;
    });
    console.log(newA);

    setTodos(newA);
  };
  const updateBtn = (id, newTitle) => {
    let changed = todos.map((todo) => {
      if ((todo.id = id)) {
        todo.title = newTitle;
        return todo;
      }

      todo;
    });
    setTodos(changed);
  };
  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        isUpdate,
        setIsUpdate,
        checkCompelte,
        editItem,
        setEditItem,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
