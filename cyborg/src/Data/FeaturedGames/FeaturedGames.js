import Featured01 from "../../assests/images/featured-01.jpg";
import Featured02 from "../../assests/images/featured-02.jpg";
import Featured03 from "../../assests/images/featured-03.jpg";
import CardItem  from "../../components/CardItem/CardItem";

const FeaturedGamesData = [
  {
    id: "1",
    GameImage: Featured01,
    GameName: "Gamezer",
    GameDownload: "249 Downloads",
    Gamerating: "4.8",
    GameDownloadNumeber: "2.3M",
  },
  {
    id: "2",
    GameImage: Featured02,
    GameName: "CS-GO",
    GameDownload: "249 Downloads",
    Gamerating: "4.8",
    GameDownloadNumeber: "2.3M",
  },
  {
    id: "3",
    GameImage: Featured03,
    GameName: "Island Rusty",
    GameDownload: "249 Downloads",
    Gamerating: "4.8",
    GameDownloadNumeber: "2.3M",
  },
];
const FeaturedGames = FeaturedGamesData.map((item) => {
  return (
    <CardItem
      key={item.id}
      image={item.GameImage}
      title={item.GameName}
      subtitle={item.GameDownload}
      rates={item.Gamerating}
      downloads={item.GameDownloadNumeber}
    />
  );
});
export default FeaturedGames;
