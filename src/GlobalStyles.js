import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

html {
  box-sizing: border-box;
}

*,
::before,
::after {
  box-sizing: inherit;
}

body {
  font-family: "Lato", sans-serif;
  background-image: url("../public/background.jpg");
  background-size: cover;
  background-position: center;
}
`;
