import imageOne from "../../assests/images/stream-01.jpg";
import imageTwo from "../../assests/images/stream-02.jpg";
import imageThree from "../../assests/images/stream-03.jpg";
import imageFour from "../../assests/images/stream-04.jpg";
import imageAvatar01 from "../../assests/images/avatar-01.jpg";
import imageAvatar02 from "../../assests/images/avatar-02.jpg";
import imageAvatar03 from "../../assests/images/avatar-03.jpg";
import imageAvatar04 from "../../assests/images/avatar-04.jpg";
import MostLiveStreams from "../../components/MostLiveStreams/MostLiveStreams";

const MostLiveStreamsInfo = [
  {
    id: "1",
    imageBody: imageOne,
    imageAvatar: imageAvatar01,
    playerName: "KenganC",
    title: "Just Talking With Fans",
  },
  {
    id: "2",
    imageBody: imageTwo,
    imageAvatar: imageAvatar02,
    playerName: "LunaMa",
    title: "CS-GO 36 Hours Live Stream",
  },
  {
    id: "3",
    imageBody: imageThree,
    imageAvatar: imageAvatar03,
    playerName: "Areluwa",
    title: "Maybe Nathej Allnight Chillin'",
  },
  {
    id: "4",
    imageBody: imageFour,
    imageAvatar: imageAvatar04,
    playerName: "GangTm",
    title: "Live Streaming Till Morning",
  },
];
const MostLiveStreamsData = MostLiveStreamsInfo.map((item) => {
  return (
    <MostLiveStreams
      key={item.id}
      bodyImage={item.imageBody}
      avatarImage={item.imageAvatar}
      name={item.playerName}
      title={item.title}
    />
  );
});

export default MostLiveStreamsData;
