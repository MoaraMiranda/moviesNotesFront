import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    "header"
    "content";
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};

  > main {
    grid-area: content;
    padding: 40px 120px 0;
    overflow-y: auto;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 40px;
`;
