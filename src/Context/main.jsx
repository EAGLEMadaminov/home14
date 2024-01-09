import { SideProvider } from "./sideBar";
import { TodoProvider } from "./index.jsx";
export const MainProvider = ({ children }) => {
  return (
    <>
      <TodoProvider>
        <SideProvider>{children}</SideProvider>
      </TodoProvider>
    </>
  );
};
export default MainProvider;
