import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import FileManager from "./pages/FileManager.jsx";
import Home from "./pages/Home.jsx";
import MyTask from "./pages/MyTask.jsx";
import Settings from "./pages/Settings.jsx";
import SupportCenter from "./pages/SupportCenter.jsx";
import Notification from "./pages/Notification.jsx";
import Calendar from "./pages/Calendar";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "calendar",
        element: <Calendar />,
      },
      {
        path: "fielManage",
        element: <FileManager />,
      },

      {
        path: "myTask",
        element: <MyTask />,
      },
      {
        path: "notification",
        element: <Notification />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "supportCenter",
        element: <SupportCenter />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
    <RouterProvider router={routes} />
);
