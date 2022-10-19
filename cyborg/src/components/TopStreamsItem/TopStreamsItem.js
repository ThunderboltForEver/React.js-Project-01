import "./TopStreamsItem.css";
import { FaCheck } from "react-icons/fa";
import MainButton from "../MainButton/MainButton";

const TopStreamsItem = (props) => {
  return (
    <>
      <div className="top-streams">
        <ul>
          <li>{props.playerNumber}</li>
          <li>
            <img src={props.playerImage} alt=''/>
          </li>
          <li>
            <FaCheck
              style={{
                backgroundColor: "#ec6090",
                padding: "2px",
                borderRadius: "50px",
                marginRight: "6px",
                color: "#fff",
              }}
            />
            <span>{props.playerName}</span>
          </li>
          <li><div className='top-streams-button'><MainButton LinkTo='/#'>Follow</MainButton></div></li>
        </ul>
        
        <hr />
      </div>
    </>
  );
};
export default TopStreamsItem;
