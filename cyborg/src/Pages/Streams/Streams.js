import "./Streams.css";
import { SectionWrapper, FeaturedGames } from "../../components/index";
import MostLiveStreamsData from "../../Data/MostLiveStreams/MostLiveStreamsData";
import TopStreamsItemData from "../../Data/TopStreamsItemData/TopStreamsItemData";

const Streams = () => {
  return (
    <>
      <div className="featured-games">
        
        <div className="first-column">
          <SectionWrapper title="Live" nextTitle="Streams">
            <div className="cards-holder">{FeaturedGames}</div>
          </SectionWrapper>
        </div>
        <div className="second-column">
        <div className="streams-second-column">
          <SectionWrapper title="Top" nextTitle="Streams">
            {TopStreamsItemData}
          </SectionWrapper>
        </div>
        </div>
      </div>

      <div className="most-live-streams">
        <SectionWrapper
          title="Most Popular"
          nextTitle="Live Stream"
          ButtonValue="Load More Streams"
        >
          <div className="LiveStreamsItemCards">
            {MostLiveStreamsData}
            {MostLiveStreamsData}
          </div>
        </SectionWrapper>
      </div>
    </>
  );
};
export default Streams;
