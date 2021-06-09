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
    max-width: 100%;
    text-align: justify;
    margin: 0;
  }
`;

export const ApolloMissionContent = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 30px;

  & > div:first-child {
    min-width: 50%;
    display: flex;
    flex-direction: column;
    row-gap: 15px;
  }
`;

export const ApolloMissionImage = styled.div`
  min-width: 50%;
  & img {
    max-width: 100%;
    height: auto;
    object-fit: cover;
  }
`;
