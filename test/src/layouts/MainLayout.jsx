import Topbar from "../components/topbar";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import AppProvider from "../store/SidebarContext";

const MainLayout = () => {
  return (
    <AppProvider>
      <div className="main">
        <Sidebar />
        <div className="content">
          <Topbar />
          <Outlet />
        </div>
      </div>
    </AppProvider>
  );
};

export default MainLayout;
