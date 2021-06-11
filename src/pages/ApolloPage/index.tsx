import React, { useEffect, useState } from "react";
import ApolloMission from "./components/ApolloMission";
import { fetchApolloMission } from "../../api";
import { PageContainer } from "../../styles/styled";

interface Object {
  href: string;
}

export interface ILandingData {
  href: string;
  items: Object[];
  version: string;
}

const ApolloPage = () => {
  const [landingData, setLandingData] = useState<ILandingData | null>(null);
  const getApolloMission = () => {
    fetchApolloMission().then((r) => setLandingData(r.collection));
  };

  useEffect(() => {
    getApolloMission();
  }, []);

  return (
    <PageContainer>
      {landingData ? <ApolloMission landingData={landingData} /> : null}
    </PageContainer>
  );
};

export default ApolloPage;
