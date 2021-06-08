import React, { useEffect, useState } from "react";
import { fetchApolloMission } from "../../api";
import { PageContainer } from "../styled";
import ApolloMission from "./components/ApolloMission";

interface Object {
  href: string;
}

export interface Data {
  href: string;
  items: Object[];
  version: string;
}

const ApolloPage = () => {
  const [landingData, setLandingData] = useState<Data | null>(null);

  useEffect(() => {
    fetchApolloMission().then((r) => setLandingData(r.collection));
  }, []);

  return (
    <PageContainer>
      <ApolloMission landingData={landingData} />
    </PageContainer>
  );
};

export default ApolloPage;
