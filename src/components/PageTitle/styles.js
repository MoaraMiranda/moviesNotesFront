import styled from "styled-components";

export const Container = styled.section`
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
    color: ${({ theme, bgPink }) =>
      bgPink ? theme.COLORS.GRAY_300 : theme.COLORS.PINK_300};
    background-color: ${({ theme, bgPink }) =>
      bgPink ? theme.COLORS.PINK_300 : theme.COLORS.GRAY_300};
    border: none;
    padding: 14px;
    font-size: 16px;

    > svg {
      color: ${({ theme }) => theme.COLORS.PINK_300};
      margin-right: 8px;
    }
  }
  /* TODO - checar se esse flex 1 era necessario realmente */
  /* > div {
    flex: 1;
  } */
`;
