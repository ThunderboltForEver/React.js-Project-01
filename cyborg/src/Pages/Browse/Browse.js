import "./Browse.css";
import {
  SectionWrapper,
  TopDownloadedData,
  LiveSteamItemInfo,
  FeaturedGames,
} from "../../components/index";

const Home = () => {
  return (
    <>
      <div className="featured-games">
        <div className="first-column">
          <SectionWrapper title="Featured" nextTitle="Games">
            <div className="cards-holder">{FeaturedGames}</div>
          </SectionWrapper>
        </div>
        <div className="second-column">
          <SectionWrapper
            title="Top"
            nextTitle="Downloaded"
            ButtonValue="Discover Popular"
          >
            {TopDownloadedData}
            <div className="top-downloaded-link">
              <a href="/#">View All Games</a>
            </div>
          </SectionWrapper>
        </div>
      </div>

      <div className="live-steam">
        <SectionWrapper
          title="How To Start Your"
          nextTitle="Live Steam"
          ButtonValue="Go To Profile"
        >
          <div className="live-steam-boxes">{LiveSteamItemInfo}</div>
        </SectionWrapper>
      </div>
    </>
  );
};
export default Home;
