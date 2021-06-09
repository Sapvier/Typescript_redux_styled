import React, { useEffect, useState } from "react";
import { fetchRequest } from "../../api";
import DayPicture from "./components/DayPicture";
import { PageContainer } from "../styled";
import { Loader } from "../../styles/Loader";

export interface Picture {
  title: string;
  url: string;
  explanation: string;
}

const HomePage: React.FC = () => {
  const [picture, setPicture] = useState<Picture | null>(null);

  useEffect(() => {
    fetchRequest().then((result) => setPicture(result));
  }, []);

  return Object.keys({ ...picture }).length > 0 ? (
    <PageContainer>
      <DayPicture picture={picture} />
    </PageContainer>
  ) : (
    <Loader />
  );
};

export default HomePage;
