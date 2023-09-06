import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  margin: 0;
  padding:0;
  box-sizing: border-box;
}

body{
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  -webkit-font-smoothing: antialiased;
  overflow-y: hidden;
}

body, button, input, textarea {
  font-family: 'Roboto Slab', serif;
  font-size: 14px;
  outline: none;
}

button, input {
  border-radius: ${({ theme }) => theme.RADIUS.MD};

}

a{
  text-decoration: none;
}

button, a {
  cursor: pointer;
  transition: filter 0.2s;
}

button:hover, a:hover {
  filter: brightness(0.9);
}


/* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    scrollbar-width: auto;
    scrollbar-color: ${({ theme }) => theme.COLORS.PINK_300} #ffffff;
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 12px;
  }

  *::-webkit-scrollbar-track {
    background: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background-color:${({ theme }) => theme.COLORS.PINK_300};
    border-radius: 10px;

  }
`;
