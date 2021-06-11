import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100%;
  padding: 20px;
  margin: 0 auto;

  background-color: ${(props) => props.theme.secondaryColor};
  color: ${(props) => props.theme.primaryColor};

  & h1 {
    font-size: 62px;
  }
`;
