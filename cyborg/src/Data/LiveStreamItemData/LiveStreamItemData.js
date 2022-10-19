import service1 from "../../assests/images/service-01.jpg";
import service2 from "../../assests/images/service-02.jpg";
import service3 from "../../assests/images/service-03.jpg";
import LiveSteamItem  from "../../components/LiveStreamItem/LiveStreamItem";

const LiveSteamItemData = [
  {
    id: "1",
    image: service1,
    title: "Go To Profile",
    paragraph:
      "Cyborg Gaming is free HTML CSS website template provided by TemplateMo. This is Bootstrap v5.2.0 layout.",
  },
  {
    id: "2",
    image: service2,
    title: "Live Stream Button",
    paragraph:
      "If you wish to support us, you can make a small contribution via PayPal to info [at] templatemo.com",
  },
  {
    id: "3",
    image: service3,
    title: "You Are Live",
    paragraph:
      "You are not allowed to redistribute this template's downloadable ZIP file on any other template collection website.",
  },
];
const LiveSteamItemInfo = LiveSteamItemData.map((item) => {
    return (
      <LiveSteamItem
        key={item.id}
        image={item.image}
        title={item.title}
        paragraph={item.paragraph}
      />
    );
  });
export default LiveSteamItemInfo;