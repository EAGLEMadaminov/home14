import { createContext, useState } from "react";

const SideBarContext = createContext([]);

const SideProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const showBtn = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <SideBarContext.Provider value={{ showSidebar, showBtn }}>
      {children}
    </SideBarContext.Provider>
  );
};

export { SideProvider, SideBarContext };
