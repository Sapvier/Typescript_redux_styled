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
  display: flex;
  max-width: 100%;
  flex-direction: column;
  justify-content: flex-start;

  & > div {
    display: flex;
    max-width: 80%;
    flex-direction: row;
    justify-content: space-around;

    padding: 10px 0;
    & p {
      max-width: 22%;
      margin: 0;
      text-align: justify;
    }
  }
`;
