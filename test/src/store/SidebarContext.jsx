import { createContext, useState } from "react";

export const SidebarContext = createContext();

const AppProvider = ({ children }) => {
  const [openSidebar, setOpenSidbar] = useState(true);

  return (
    <SidebarContext.Provider value={{ openSidebar, setOpenSidbar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default AppProvider;
