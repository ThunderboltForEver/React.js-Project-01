import "./Details.css";
import imageLeft from "../../assests/images/feature-left.jpg";
import imageRight from "../../assests/images/feature-right.jpg";
import { SectionWrapper, TopDownloadedData } from "../../components";
import fortniteImage1 from "../../assests/images/details-01.jpg";
import fortniteImage2 from "../../assests/images/details-02.jpg";
import fortniteImage3 from "../../assests/images/details-03.jpg";
import { FaDownload, FaStar, FaGamepad, FaServer } from "react-icons/fa";

const Details = () => {
  return (
    <>
      <div className="details-content">
        <div className="feature-content">
          <img src={imageLeft} alt="" />
          <img src={imageRight} alt="" />
        </div>
        <h1>FORTNITE DETAILS</h1>
      </div>
      <div className="fortnite-details">
        <SectionWrapper>
          <div className="fortnite-content">
            <div className="fortnite-first-section">
              <div className="box1">
                <ul>
                  <li>
                    <h6>Fortnite</h6>
                    <span>Sandbox</span>
                  </li>
                  <li>
                    <div>
                      <FaStar style={{ color: "yellow", marginRight: "4px" }} />
                      <span style={{ marginRight: "8px" }}>4.8</span>
                    </div>
                    <FaDownload
                      style={{ color: "#ec6090", marginRight: "4px" }}
                    />
                    <span>2.3M</span>
                  </li>
                </ul>
              </div>
              <div className="box2">
                <ul>
                  <li>
                    <FaStar style={{ color: "yellow", marginRight: "4px" }} />
                    <span>4.8</span>
                  </li>
                  <li>
                    <FaDownload style={{ color: "#ec6090", marginRight: "4px" }} />
                    <span>2.3M</span>
                  </li>
                  <li>
                    <FaServer style={{ color: "#ec6090", marginRight: "4px" }} />
                    <span>36GB</span>
                  </li>
                  <li>
                    <FaGamepad style={{ color: "#ec6090", marginRight: "4px" }} />
                    <span>Action</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="fortnite-image-section">
              <img src={fortniteImage1} alt="" />
              <img src={fortniteImage2} alt="" />
              <img src={fortniteImage3} alt="" />
            </div>
            <div className="fortnite-details-section">
              <p>
                Cyborg Gaming is free HTML CSS website template provided by
                TemplateMo. This is Bootstrap v5.2.0 layout. You can make a
                small contribution via PayPal to info [at] templatemo.com and
                thank you for supporting. If you want to get the PSD source
                files, please contact us. Lorem ipsum dolor sit consectetur es
                dispic dipiscingei elit, sed doers eiusmod lisum hored tempor.
              </p>
            </div>
            <button>Download Fortnite Now !</button>
          </div>
        </SectionWrapper>
      </div>
      <div className="other-games">
        <SectionWrapper title="Other Related" nextTitle="Games">
          <div className="other-games-content">
            <div className="other-games-details">
              {TopDownloadedData}
              {TopDownloadedData}
            </div>
          </div>
        </SectionWrapper>
      </div>
    </>
  );
};
export default Details;
