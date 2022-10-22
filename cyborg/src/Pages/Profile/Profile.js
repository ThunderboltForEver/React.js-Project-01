import { SectionWrapper } from "../../components";
import { YourGaming } from "../../sections";
import "./Profile.css";

const Profile = () => {
  return (
    <>
    <div className="gaming-library">
      <SectionWrapper title="Your Gaming" nextTitle="Library">
        <YourGaming />
      </SectionWrapper>
      </div>
    </>
  );
};
export default Profile;
