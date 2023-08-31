import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px 124px;
  
  > h1 {
    color: ${({ theme }) => theme.COLORS.PINK_300};
  }

  > section {
    display: flex;
    gap: 9px;
    align-items: center;
    justify-items: right;

    > div {
      display: flex;
      flex-direction: column;
      align-items: end;

      h3 {
        font-size: 14px;
        font-weight: 700;
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
