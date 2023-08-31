import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 64px;
  justify-content: center;
  align-items: center;
  padding: 24px;

  > h1 {
    color: ${({ theme }) => theme.COLORS.PINK_300};
  }

  > section {
    display: flex;
    gap: 9px;
    align-items: center;

    > div {
      display: flex;
      flex-direction: column;
      align-items: end;

      h3 {
        font-size: 14px;
        font-weight: 700;
        text-align: right;
      }

      p {
        font-size: 14px;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.GRAY_200};
      }
    }
    > img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }
  }
`;
