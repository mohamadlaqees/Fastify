/* eslint-disable react/prop-types */
import {
  faCommentDots,
  faEllipsis,
  faLink,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TaskCard = ({
  tags,
  title,
  description,
  image,
  progress,
  persons,
  attachments,
  commetns,
  width,
}) => {
  return (
    <>
      <div className="card">
        <div className="heading">
          {tags && tags.length > 0 ? (
            <div>
              {tags.map((tag) => (
                <div key={tag.name}>
                  <div className={`tag tag${tag.color}`}>{tag.name}</div>
                </div>
              ))}

              <FontAwesomeIcon
                icon={faPlus}
                className="text-tabs bg-gray-100 py-2 px-4 cursor-pointer  "
              />
            </div>
          ) : (
            <div className="no-tag">
              <FontAwesomeIcon icon={faPlus}  />
              Add Tag
            </div>
          )}

          <span>
            <FontAwesomeIcon icon={faEllipsis}  className="cursor-pointer"/>
          </span>
        </div>

        <div className="content">
          <h3>{title}</h3>
          <p>{description}</p>
          {progress ? (
            <div className="prog">
              <div className="progress-container">
                <div className="progress-bar" style={{ width: `${width}%` }} />
              </div>
              <span className="persentage">{width}%</span>
            </div>
          ) : (
            ""
          )}
          {image ? <img src={image} alt="" /> : ""}
        </div>

        <div className="footer">
          <div>
            {persons
              ? persons.map((person) => (
                  <img key={person.alt} src={person.src} />
                ))
              : ""}
          </div>

          <div>
            {attachments ? (
              <span>
                <FontAwesomeIcon icon={faLink} className="cursor-pointer" /> {attachments}
              </span>
            ) : (
              ""
            )}
            {commetns ? (
              <span>
                <FontAwesomeIcon icon={faCommentDots} className="cursor-pointer" /> {commetns}
              </span>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskCard;
