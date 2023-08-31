import styled from "styled-components";

export const Container = styled.div`
  font-size: 16px;

  > a {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.COLORS.PINK_300};
    svg {
      margin-right: 8px;
    }
  }
`;
