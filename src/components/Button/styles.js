import styled from "styled-components";

export const Container = styled.div`
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  background-color: ${({ theme }) => theme.COLORS.PINK_300};
  border-radius: 10px;
  padding: 16px;
  text-align: center;

  > button {
    font-size: 16px;
    border: none;
    background: transparent;
    font-weight: 500;
  }
`;
