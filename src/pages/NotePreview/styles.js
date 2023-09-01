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
    overflow-y: scroll;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  > svg {
    color: ${({ theme }) => theme.COLORS.PINK_300};
  }

  p {
    font-size: 16px;
    text-align: justify;
    margin-bottom: 20px;
    line-height: 28px;
  }
`;

export const PostInfo = styled.div`
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
`;
