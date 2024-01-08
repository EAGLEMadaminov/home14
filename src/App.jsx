// import Counter from "./Pages/Counter";
import { Link, Route, Routes } from "react-router-dom";
import TodoApp from "./Pages/Todo";
import MainLayout from "./Layouts/Main.jsx";
function App() {
  return (
    <>
      <Routes>
        <Route path="/main" element={<MainLayout />}>
          <Route path="/main" element={<h1>Home</h1>} />
          <Route path="/main/users" element={<h1>Users</h1>} />
          <Route path="/main/products" element={<h1>Products</h1>} />
          <Route path="/main/todo" element={<TodoApp />} />
          <Route
            path="*"
            element={
              <h1>
                NOT FOUND FROM LAYOUT <Link to="/main">Back to main</Link>
              </h1>
            }
          />
        </Route>
        <Route path="/login" element={<h1>Login</h1>} />
        <Route path="/register" element={<h1>Sign up</h1>} />
        <Route
          path="*"
          element={
            <h1>
              Not Found <Link to="/main">Back to main</Link>
            </h1>
          }
        />
      </Routes>
    </>
  );
}

export default App;
