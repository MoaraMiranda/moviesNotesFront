import styled from "styled-components";

export const Container = styled.section`
  margin: 24px 0;
  display: flex;
  align-items: center;

  > h2 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 36px;
    font-weight: 500;
    margin-right: 20px;
  }
  svg {
    color: ${({ theme }) => theme.COLORS.PINK_300};
    margin-right: 10px;
  }
`;
