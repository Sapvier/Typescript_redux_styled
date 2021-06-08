import React from "react";
import { LandingData } from "../ApolloMission";

const VideoContent: React.FC<LandingData> = ({ landingData }) => {
  return (
    <div>
      <video
        autoPlay={true}
        loop
        muted={false}
        width="640"
        height="480"
        controls
      >
        <source src={landingData?.items[4].href} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoContent;
