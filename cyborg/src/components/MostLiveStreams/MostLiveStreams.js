import "./MostLiveStreams.css";
import { FaCheck } from "react-icons/fa";

const MostLiveStreams = (props) => {
  return (
    <>
      <div className="LiveStreamsItemCard">
        <img src={props.bodyImage} alt="" />
        <div className="LiveStreamsItemCardInfo">
          <ul>
            <li>
              <img src={props.avatarImage} alt="" />
            </li>
            <li>
              <span>
                <FaCheck
                  style={{
                    backgroundColor: "#ec6090",
                    padding: "2px",
                    borderRadius: "50px",
                    marginRight: "6px",
                    color: "#fff",
                  }}
                />
                {props.name}
              </span>
              <h6>{props.title}</h6>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default MostLiveStreams;
