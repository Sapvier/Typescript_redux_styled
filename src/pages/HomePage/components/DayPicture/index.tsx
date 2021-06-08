import React from "react";
import { Picture } from "../..";
import { DayPictureWrapper, ImgWrapper } from "./styled";

const DayPicture: React.FC<{ picture: Picture | null }> = ({ picture }) => {
  return (
    <DayPictureWrapper>
      <h1>{picture?.title}</h1>
      <div>
        <ImgWrapper>
          <img width="800" height="260" src={picture?.url} alt="apod" />
        </ImgWrapper>
        <p>{picture?.explanation}</p>
      </div>
    </DayPictureWrapper>
  );
};

export default DayPicture;
