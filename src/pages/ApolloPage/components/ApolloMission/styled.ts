import styled from "styled-components";

export const ApolloMissionWrapper = styled.div`
  width: 80%;
  height: auto;

  display: flex;
  justify-content: flex-start;
  row-gap: 15px;
  flex-direction: column;
  & h1 {
    margin: 0;
  }
  & p {
    max-width: 45%;
    text-align: justify;
    margin: 0;
  }
`;
