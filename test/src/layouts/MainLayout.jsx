import Topbar from "../components/topbar";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="main">
      <Sidebar />
      <div className="content">
        <Topbar />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
