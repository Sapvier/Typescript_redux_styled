import React from "react";
import { ILandingData } from "../..";

import VideoContent from "../VideoContent";
import VideoModal from "../VideoModal";

import {
  ApolloMissionContent,
  ApolloMissionImage,
  ApolloMissionWrapper,
} from "./styled";
import mission from "../../../../assets/mission.jpg";
import { Loader } from "../../../../styles/Loader";
import { PlayButton, PreviewWrapper } from "../../styled";

const ApolloMission: React.FC<{ landingData: ILandingData }> = ({
  landingData,
}) => {
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
      <ApolloMissionContent>
        <div>
          <p>
            Apollo 11 was the first manned mission to land on the Moon. The
            first steps by humans on another planetary body were taken by Neil
            Armstrong and Buzz Aldrin on July 20, 1969. The astronauts also
            returned to Earth the first samples from another planetary body.
          </p>
          {landingData ? (
            <PreviewWrapper>
              <PlayButton onClick={clickHandler} />
              <img
                width="250"
                height="250"
                src={landingData?.items[8]?.href}
                alt="preview"
              />
            </PreviewWrapper>
          ) : (
            <Loader />
          )}
          <p>
            After being sent to the Moon by the Saturn V's third stage, the
            astronauts separated the spacecraft from it and traveled for three
            days until they entered lunar orbit. Armstrong and Aldrin then moved
            into Eagle and landed in the Sea of Tranquility on July 20. The
            astronauts used Eagle's ascent stage to lift off from the lunar
            surface and rejoin Collins in the command module. They jettisoned
            Eagle before they performed the maneuvers that propelled Columbia
            out of the last of its 30 lunar orbits onto a trajectory back to
            Earth. They returned to Earth and splashed down in the Pacific Ocean
            on July 24 after more than eight days in space. Armstrong's first
            step onto the lunar surface was broadcast on live TV to a worldwide
            audience. He described the event as "one small step for man, one
            giant leap for mankind. Apollo 11 effectively proved US victory in
            the Space Race to demonstrate spaceflight superiority, by fulfilling
            a national goal proposed in 1961 by President John F. Kennedy,
            "before this decade is out, of landing a man on the Moon and
            returning him safely to the Earth.
          </p>
        </div>
        <ApolloMissionImage>
          <img width="800" height="350" src={mission} alt="mission" />
        </ApolloMissionImage>
      </ApolloMissionContent>
    </ApolloMissionWrapper>
  );
};

export default ApolloMission;
