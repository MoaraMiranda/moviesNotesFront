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
    padding: 0 120px;
    margin-top: 40px;
  }
  `;

export const Content = styled.div`
  width: 100%;
  overflow-y: auto;
  scrollbar-color: ${({ theme }) => theme.COLORS.PINK_300};
  scrollbar-width: thin;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  > svg {
    color: ${({ theme }) => theme.COLORS.PINK_300};
  }

  > div {
    display: flex;
    align-items: center;
    gap: 8px;

    svg {
      color: ${({ theme }) => theme.COLORS.PINK_300};
      text-align: center;
    }

    > img {
      width: 16px;
      height: 16px;
      border-radius: 50%;
    }
  }

  > section {
    margin: 40px 0;
  }

  p {
    font-size: 16px;
    text-align: justify;
  }
`;
