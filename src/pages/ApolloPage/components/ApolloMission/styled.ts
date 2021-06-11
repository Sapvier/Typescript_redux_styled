import styled from "styled-components";

export const ApolloMissionWrapper = styled.div`
  display: flex;
  width: 80%;
  height: auto;
  flex-direction: column;
  justify-content: flex-start;
  row-gap: 15px;

  & h1 {
    margin: 0;
  }
  & p {
    max-width: 100%;
    margin: 0;
    text-align: justify;
  }
`;

export const ApolloMissionContent = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 30px;

  & > div:first-child {
    display: flex;
    min-width: 50%;
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
