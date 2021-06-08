import React from "react";
import { Data } from "../..";
import { PlayButton, PreviewWrapper } from "../../styled";
import VideoContent from "../VideoContent";
import VideoModal from "../VideoModal";
import { ApolloMissionWrapper } from "./styled";

export interface LandingData {
  landingData: Data | null;
}

const ApolloMission: React.FC<LandingData> = ({ landingData }) => {
  const [isVideoOpen, setIsVideoOpen] = React.useState<boolean>(false);
  const clickHandler = () => {
    setIsVideoOpen((state) => !state);
  };

  return (
    <ApolloMissionWrapper>
      <VideoModal
        open={isVideoOpen}
        onClose={() => setIsVideoOpen(!isVideoOpen)}
      >
        <VideoContent landingData={landingData} />
      </VideoModal>
      <h1>Apollo 11 Mission</h1>
      <p>
        Apollo 11 was the first manned mission to land on the Moon. The first
        steps by humans on another planetary body were taken by Neil Armstrong
        and Buzz Aldrin on July 20, 1969. The astronauts also returned to Earth
        the first samples from another planetary body.
      </p>
      <PreviewWrapper>
        <PlayButton onClick={clickHandler} />
        <img
          width="250"
          height="250"
          src={landingData?.items[8]?.href}
          alt="preview"
        />
      </PreviewWrapper>
      <p>
        Apollo 11 achieved its primary mission - to perform a manned lunar
        landing and return the mission safely to Earth - and paved the way for
        the Apollo lunar landing missions to follow.
      </p>
    </ApolloMissionWrapper>
  );
};

export default ApolloMission;
