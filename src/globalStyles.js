import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
    --dark:#000;
    --light:#fff;
    --warm:#FEFCAB;
    --cream:#F4EDE9;
}

body{
  background:var(--cream);
}

*{
    box-sizing:border-box;
    margin:0;
    padding:0;
    font-family:-apple-system, system-ui, BlinkMacSystemFont;
}`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 0px 20px;
  display: flex;

  @media screen and (max-width: 768px) {
    padding: 0px 10px;
  }
`;

export const Button = styled.button`
  padding: 8px 50px;
  border-radius: 50px;
  outline: none;
  border: 1px solid var(--dark);
  background-color: ${({ background }) =>
    background ? "var(--warm)" : "var(--light)"};
`;
export default GlobalStyle;
