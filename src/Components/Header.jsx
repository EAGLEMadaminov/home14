import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useContext } from "react";
import { SideBarContext } from "../Context/sideBar";

const Header = () => {
  const { showBtn } = useContext(SideBarContext);
  const todos = useSelector((store) => store.todo);
  const dispatch = useDispatch();

  const toggleSidebar = () => {
    showBtn();
  };

  const handleChange = (e) => {
    dispatch({
      type: "CHANGE_LANGUAGE",
      payload: e.target.value,
    });
  };
  return (
    <header className="text-bg-primary py-3">
      <nav className="container d-flex justify-content-between align-items-center m-0 mx-auto">
        <button className="btn btn-info" onClick={toggleSidebar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </button>
        <select onChange={handleChange}>
          <option value="uz">UZ</option>
          <option value="en">EN</option>
          <option value="ru">RU</option>
        </select>
        <ul className="list-unstyled d-flex w-50 justify-content-between align-items-center m-0">
          <li>
            <Link className="text-reset text-decoration-none" to="/main">
              Main home
            </Link>
          </li>
          <li>
            <Link className="text-reset text-decoration-none" to="/main/users">
              Main users
            </Link>
          </li>
          <li>
            <Link
              className="text-reset text-decoration-none"
              to="/main/products"
            >
              Main products
            </Link>
          </li>
          <li>
            <Link className="text-reset text-decoration-none" to="/main/todo">
              Main todo <span className="badge bg-info">{todos.length}</span>
            </Link>
          </li>
          <li>
            <Link className="text-reset text-decoration-none" to={"/login"}>
              Login
            </Link>
          </li>
          <li>
            <Link className="text-reset text-decoration-none" to={"/register"}>
              Sign up
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
