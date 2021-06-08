import React, { useEffect, useState } from "react";
import { fetchRequest } from "../../api";
import DayPicture from "./components/DayPicture";
import { PageContainer } from "../styled";

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

  return (
    <PageContainer>
      <DayPicture picture={picture} />
    </PageContainer>
  );
};

export default HomePage;
