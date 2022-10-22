import { FaDownload, FaStar } from "react-icons/fa";
import "./TopDownloadedItem.css";

const TopDownloadedItem = (props) => {
  return (
    <>
      <div className="your-gaming-item">
        <div className="game-name">
          <img src={props.image} alt="" />
          <ul>
            <li>
              <h4>{props.title}</h4>
              <span>{props.subtitle}</span>
            </li>
            <li>
              <div className="rating-info">
                <FaStar style={{ color: "yellow", marginRight: "4px" }} />
                <span style={{ marginRight: "8px" }}>{props.rates}</span>
              </div>
              <FaDownload style={{ color: "#ec6090", marginRight: "4px" }} />
              <span>{props.downloads}</span>
            </li>
          </ul>
        </div>
      </div>
      <hr />
    </>
  );
};
export default TopDownloadedItem;
