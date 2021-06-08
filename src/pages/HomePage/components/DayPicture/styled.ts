import styled from "styled-components";

export const ImgWrapper = styled.div`
  width: 65%;
  margin: 0;

  & img {
    max-width: 100%;
    height: auto;
  }
`;

export const DayPictureWrapper = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  & > div {
    max-width: 80%;
    padding: 10px 0;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    & p {
      max-width: 22%;
      margin: 0;
      text-align: justify;
    }
  }
`;
