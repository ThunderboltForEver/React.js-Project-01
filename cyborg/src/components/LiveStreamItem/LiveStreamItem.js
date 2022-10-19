import "./LiveStreamItem.css";

const LiveSteamItem = (props) => {

  return (
    <>
      <div className="live-steam-box">
        <img src={props.image} alt="" />
        <h5>{props.title}</h5>
        <p>{props.paragraph}</p>
      </div>
    </>
  );
};
export default LiveSteamItem;
