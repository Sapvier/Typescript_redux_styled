import React from "react";
import { Picture } from "../..";

const DayPicture: React.FC<{ picture: Picture | null }> = ({ picture }) => {
  return (
    <>
      <h1>{picture?.title}</h1>
      <div>
        <img src={picture?.url} alt={picture?.title} />
      </div>
      <p>{picture?.explanation}</p>
    </>
  );
};

export default DayPicture;
