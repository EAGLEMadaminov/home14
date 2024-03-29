import { useDispatch, useSelector } from "react-redux";
import { useContext } from "react";
import { SideBarContext } from "../Context/sideBar";
const Aside = () => {
  const { showBtn, showSidebar, lang } = useContext(SideBarContext);
  // const show = useSelector((store) => store.settings.showSidebar);
  // const dispatch = useDispatch();
  // const lang = useSelector((store) => store.settings.lang);
  const toggleSidebar = () => {
    showBtn();
  };

  return (
    <aside
      id="main-sidebar"
      className={`position-fixed d-flex justify-content-between top-0 bottom-0 bg-info left-0 p-3 text-end align-items-start ${
        showSidebar ? "show" : ""
      }`}
    >
      <h2>lang: {lang}</h2>
      <button className="btn btn-primary " onClick={toggleSidebar}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="16"
          width="11"
          viewBox="0 0 352 512"
        >
          <path d="M242.7 256l100.1-100.1c12.3-12.3 12.3-32.2 0-44.5l-22.2-22.2c-12.3-12.3-32.2-12.3-44.5 0L176 189.3 75.9 89.2c-12.3-12.3-32.2-12.3-44.5 0L9.2 111.5c-12.3 12.3-12.3 32.2 0 44.5L109.3 256 9.2 356.1c-12.3 12.3-12.3 32.2 0 44.5l22.2 22.2c12.3 12.3 32.2 12.3 44.5 0L176 322.7l100.1 100.1c12.3 12.3 32.2 12.3 44.5 0l22.2-22.2c12.3-12.3 12.3-32.2 0-44.5L242.7 256z" />
        </svg>
      </button>
    </aside>
  );
};

export default Aside;
