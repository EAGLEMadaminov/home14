import { createContext, useState } from "react";

const SideBarContext = createContext([]);

const SideProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [lang, setLang] = useState("uz");
  const showBtn = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <SideBarContext.Provider value={{ showSidebar, showBtn, lang, setLang }}>
      {children}
    </SideBarContext.Provider>
  );
};

export { SideProvider, SideBarContext };
