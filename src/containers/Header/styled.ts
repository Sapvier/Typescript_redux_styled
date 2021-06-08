import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${(props) => props.theme.secondaryColor};
  color: ${(props) => props.theme.primaryColor};
  border-bottom: 1px solid black;
  padding: 5px 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  & > div:first-child {
    width: 80%;
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    column-gap: 20px;
    & h2 {
      cursor: pointer;
      margin: 0;
      &:hover {
        color: ${(props) => props.theme.hoverTextColor};
      }
    }
  }
`;
