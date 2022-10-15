import "./Browse.css";
import { SectionWrapper } from "../../components/index";
import CardItem from "../../components/CardItem/CardItem";
import FeaturedGames from "../../Data/FeaturedGames/FeaturedGames";
import TopDownloadedData from "../../Data/TopDownloadedData/TopDownloadedData";
import TopDownloadedItem from "../../components/TopDownloadedItem/TopDownloadedItem";

const Home = () => {
  const FeaturedGamesData = FeaturedGames.map((item) => {
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
  const TopDownloadedData1 = TopDownloadedData.map((item) => {
    return (
      <TopDownloadedItem
        key={item.id}
        image={item.TopDownloadedImage}
        title={item.title}
        subtitle={item.subtitle}
        rates={item.rates}
        downloads={item.downloads}
      />
    );
  });
  return (
    <>
      <div className="featured-games">
        <div className="first-column">
          <SectionWrapper title="Featured" nextTitle="Games">
            <div className="cards-holder">{FeaturedGamesData}</div>
          </SectionWrapper>
        </div>
        <div className="second-column">
          <SectionWrapper
            title="Top"
            nextTitle="Downloaded"
            ButtonValue="Discover Popular"
          >
            {TopDownloadedData1}
            <div className="top-downloaded-link">
              <a href="/#">View All Games</a>
            </div>
          </SectionWrapper>
        </div>
      </div>
      <div className="live-steam">
      <SectionWrapper title="How To Start Your" nextTitle="Live Steam" ButtonValue='Go To Profile'></SectionWrapper>
      </div>
    </>
  );
};
export default Home;
