import styled from "styled-components";

export const Container = styled.span`
  font-size: 12px;
  padding: 8px 16px;
  border-radius: ${({ theme }) => theme.RADIUS.SM};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  background-color: ${({ theme }) => theme.COLORS.PINK_100};
`;
