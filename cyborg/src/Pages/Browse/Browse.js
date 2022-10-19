import "./Browse.css";
import {
  SectionWrapper,
  TopDownloadedData,
  LiveSteamItemInfo,
  FeaturedGames,
} from "../../components/index";
import MostLiveStreamsData from "../../Data/MostLiveStreams/MostLiveStreamsData";

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
          nextTitle="Live Stream"
          ButtonValue="Go To Profile"
        >
          <div className="live-steam-boxes">{LiveSteamItemInfo}</div>
        </SectionWrapper>
      </div>
      <div className="most-live-streams">
        <SectionWrapper
          title="Most Popular"
          nextTitle="Live Stream"
          ButtonValue="Discover All Streams"
        >
          <div className="LiveStreamsItemCards">
            {MostLiveStreamsData}
          </div>
        </SectionWrapper>
      </div>
    </>
  );
};
export default Home;
