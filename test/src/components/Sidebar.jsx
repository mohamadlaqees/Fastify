import { NavLink } from "react-router-dom";
import {
  faClipboardList,
  faBell,
  faCalendarAlt,
  faFolderOpen,
  faGear,
  faBolt,
  faHome,
  faCommentDots,
  faArrowRightFromBracket,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { SidebarContext } from "../store/SidebarContext";

const Sidebar = () => {
  const { openSidebar, setOpenSidbar } = useContext(SidebarContext);
  const sidebarHandler = () => {
    setOpenSidbar(!openSidebar);
  };
  return (
    <div className="flex">
      <div className={`${openSidebar ? "sidebar" : "sidebar-closed"}`}>
        <div className={`${openSidebar ? "header" : "header-close"}`}>
          <h1>
            <FontAwesomeIcon icon={faBolt} className="logo" /> Fastify
          </h1>
          <div>
            <FontAwesomeIcon
              icon={faBars}
              className="cursor-pointer"
              onClick={sidebarHandler}
            />
          </div>
        </div>

        <ul className="tabs">
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "link-active " : "link "} ${
                !openSidebar ? "side-close" : ""
              }`
            }
            to={"/"}
          >
            <FontAwesomeIcon icon={faHome} />{" "}
            <span> {openSidebar ? "Home" : ""}</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "link-active " : "link "} ${
                !openSidebar ? "side-close" : ""
              }`
            }
            to={"myTask"}
          >
            <FontAwesomeIcon icon={faClipboardList} />
            <span> {openSidebar ? "My task" : ""}</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "link-active " : "link "} ${
                !openSidebar ? "side-close" : ""
              }`
            }
            to={"notification"}
          >
            <FontAwesomeIcon icon={faBell} />
            <span> {openSidebar ? "Notification" : ""} </span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "link-active " : "link "} ${
                !openSidebar ? "side-close" : ""
              }`
            }
            to={"calendar"}
          >
            <FontAwesomeIcon icon={faCalendarAlt} />
            <span> {openSidebar ? "Calendar" : ""} </span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "link-active " : "link "} ${
                !openSidebar ? "side-close" : ""
              }`
            }
            to={"fileManager"}
          >
            <FontAwesomeIcon icon={faFolderOpen} />
            <span> {openSidebar ? "File Manager" : ""}</span>
          </NavLink>

          <div className="section-2">
            <h3>Others</h3>
            <NavLink
              className={({ isActive }) =>
                `${isActive ? "link-active " : "link "} ${
                  !openSidebar ? "side-close" : ""
                }`
              }
              to={"settings"}
            >
              <FontAwesomeIcon icon={faGear} />{" "}
              <span> {openSidebar ? "Settings" : ""} </span>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `${isActive ? "link-active " : "link "} ${
                  !openSidebar ? "side-close" : ""
                }`
              }
              to={"supportCenter"}
            >
              <FontAwesomeIcon icon={faCommentDots} />{" "}
              <span> {openSidebar ? "Supprot center" : ""} </span>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `${isActive ? "link-active " : "link "} ${
                  !openSidebar ? "side-close" : ""
                }`
              }
              to={"out"}
            >
              <FontAwesomeIcon icon={faArrowRightFromBracket} />{" "}
              <span> {openSidebar ? "Log out" : ""}</span>
            </NavLink>
          </div>
        </ul>
        <div className="h-fix" />
      </div>

      <div className="line" />
    </div>
  );
};

export default Sidebar;
