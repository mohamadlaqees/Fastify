import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TaskCard from "../components/TaskCard";
import {
  faCircle,
  faEllipsis,
  faPaperclip,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { Select } from "@mui/material";
import FilterList from "@mui/icons-material/FilterList";

const Home = () => {
  const persons = [
    {
      alt: "person1",
      src: "/test.png",
    },
    {
      alt: "person2",
      src: "/test.png",
    },
    {
      alt: "person3",
      src: "/test.png",
    },
  ];
  return (
    <div className="home">
      <div className="home-1">
        <div>
          <h1>Active Task</h1>
          <p>You can edit all the stuf as you wish</p>
        </div>
        <div>
          <p>
            <span>Date,</span>16 Jan 2022
          </p>
          <p>
            <FontAwesomeIcon
              icon={faCircle}
              className="text-xs text-gray-300"
            />{" "}
            Updated 24 min ago
          </p>
        </div>
      </div>

      <div className="home-2">
        <div className="section-1">
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel
                id="demo-simple-select-label"
                style={{
                  color: "#A0A0A0",
                }}
              >
                Filter
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
                style={{
                  borderRadius: "20px",
                  height: "50px",
                }}
                IconComponent={FilterList}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel
                id="demo-simple-select-label"
                style={{
                  color: "#A0A0A0",
                }}
              >
                today
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
                style={{
                  borderRadius: "20px",
                  height: "50px",
                }}
                IconComponent={FilterList}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        <div className="section-2">
          <div className="line" />

          <div>
            {persons.map((person) => (
              <img
                key={person.alt}
                className="persons"
                src={person.src}
                alt={person.alt}
              />
            ))}

            <div className="invite">
              invite{" "}
              <FontAwesomeIcon
                icon={faPlus}
                className="rounded-full bg-blue-200 text-blue-500 p-1 cursor-pointer"
              />
              <FontAwesomeIcon
                icon={faPaperclip}
                className="text-tabs cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="home-3">
        <div>
          <div className="heading">
            <h1>
              Planned <span>1</span>
            </h1>
            <span>
              <FontAwesomeIcon icon={faEllipsis} className="text-tabs" />
            </span>
          </div>
          <TaskCard
            tags={[{ name: "visual Design", color: "blue" }]}
            title={"New brand design"}
            description={"Illustrations, logo , colors and brandbook"}
            image={"/paint.jpg"}
            attachments={4}
            commetns={32}
            persons={[
              { alt: "person1", src: "/test.png" },
              {
                alt: "person2",
                src: "/test.png",
              },
            ]}
          />
        </div>
        <div>
          <div className="heading">
            <h1>
              In progress <span>2</span>
            </h1>
            <span>
              <FontAwesomeIcon icon={faEllipsis} className="text-tabs" />
            </span>
          </div>
          <TaskCard
            title={"Reserch"}
            description={"How to increas the landing page conversion"}
            commetns={51}
            persons={[
              { alt: "person1", src: "/test.png" },
              {
                alt: "person2",
                src: "/test.png",
              },
            ]}
          />

          <TaskCard
            tags={[{ name: "Bugs", color: "blue" }]}
            title={"oohhh let's fix that"}
            description={"Issue at checkout in Safari"}
          />
        </div>
        <div>
          <div className="heading">
            <h1>
              Done <span>1</span>
            </h1>
            <span>
              <FontAwesomeIcon icon={faEllipsis} className="text-tabs" />
            </span>
          </div>
          <TaskCard
            tags={[
              { name: "UI", color: "red" },
              { name: "UX", color: "yellow" },
            ]}
            title={"Update reserch document"}
            description={"Outline in UX guide where new branches should be"}
            commetns={51}
            persons={[
              { alt: "person1", src: "/test.png" },
              {
                alt: "person2",
                src: "/test.png",
              },
            ]}
          />
          <TaskCard
            title={"Wireframes"}
            description={"Create wireframe design for product page"}
            commetns={14}
            persons={[
              { alt: "person1", src: "/test.png" },
              {
                alt: "person2",
                src: "/test.png",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
