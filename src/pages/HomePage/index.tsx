import React, { useEffect, useState } from "react";
import { fetchPictureOfTheDay } from "../../api";
import DayPicture from "./components/DayPicture";

import { Loader } from "../../styles/Loader";
import { PageContainer } from "../../styles/styled";

export interface Picture {
  title: string;
  url: string;
  explanation: string;
}

const HomePage: React.FC = () => {
  const [picture, setPicture] = useState<Picture | null>(null);
  const isLoaded = Object.keys({ ...picture }).length;
  const getPicture = () => {
    fetchPictureOfTheDay().then((result) => setPicture(result));
  };

  useEffect(() => {
    getPicture();
  }, []);

  return isLoaded ? (
    <PageContainer>
      {picture ? <DayPicture picture={picture} /> : null}
    </PageContainer>
  ) : (
    <Loader />
  );
};

export default HomePage;
