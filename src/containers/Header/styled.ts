import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: space-between;
  padding: 5px 20px;

  border-bottom: 1px solid black;
  background-color: ${(props) => props.theme.secondaryColor};
  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
  color: ${(props) => props.theme.primaryColor};

  & > div:first-child {
    display: flex;
    width: 80%;
    flex-direction: row;
    justify-content: flex-start;
    column-gap: 20px;
    & h2 {
      margin: 0;
      cursor: pointer;
      &:hover {
        color: ${(props) => props.theme.hoverTextColor};
      }
    }
  }
`;
