import styled from "styled-components";

export const Container = styled.button`
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  background-color: ${({ theme }) => theme.COLORS.PINK_300};
  border-radius: ${({ theme }) => theme.RADIUS.MD};
  padding: 16px;
  text-align: center;
  border: none;
  font-size: 16px;
  font-weight: 500;
`;
