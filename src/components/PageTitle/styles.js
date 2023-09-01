import styled from "styled-components";

export const Container = styled.section`
  margin: 24px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > h2 {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 36px;
    font-weight: 500;
    margin-right: 20px;
  }

  > button {
    color: ${({ theme }) => theme.COLORS.PINK_300};
    background-color: ${({ theme }) => theme.COLORS.GRAY_300};
    border:  none;
    padding:  14px;
    font-size: 16px;

    > svg {
      color: ${({ theme }) => theme.COLORS.PINK_300};
      margin-right: 8px;
    }
  }

  > div{
    flex:1;
  }
`;
