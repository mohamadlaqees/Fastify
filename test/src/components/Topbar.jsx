import {
  faCircle,
  faHashtag,
  faMagnifyingGlass,
  faShare,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Topbar = () => {
  return (
    <>
      <div className="topbar">
        <div className="section-1">
          <FontAwesomeIcon
            icon={faHashtag}
            className="bg-logo text-white py-3 px-4 rounded-md text-2xl"
          />
          <div>
            <h2>
              Redesign Website V2{" "}
              <FontAwesomeIcon icon={faStar} className="text-yellow-400 cursor-pointer" />
            </h2>
            <div className="channel">
              <FontAwesomeIcon
                icon={faCircle}
                className="text-circle text-green-300"
              />{" "}
              Channel
            </div>
          </div>
        </div>
        <div className="section-1-2">
          <button>
            <FontAwesomeIcon icon={faShare} /> Share
          </button>
          <div className="search">
            <input type="text" placeholder="Search task" />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="absolute right-3 top-1/2 text-tabs text-lg -translate-y-1/2 cursor-pointer"
            />
          </div>
          <img src="/test.png" alt="" className="img" />
        </div>
      </div>
      <div className="line"></div>
    </>
  );
};

export default Topbar;
