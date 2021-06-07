import styled from "styled-components";

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 50px;
  background-color: ${(props) => props.theme.secondaryColor};
  color: ${(props) => props.theme.primaryColor};
  border-bottom: 1px solid black;
  padding: 10px 20px;
`;
