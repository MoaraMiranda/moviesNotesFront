import styled from "styled-components";
import { Link } from "react-router-dom";

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

  /* Flex 1 - necessary for Rating component position */
  > div {
    flex: 1;
  }
`;

export const Button = styled(Link)`
  color: ${({ theme, $bgPink }) =>
    $bgPink ? theme.COLORS.GRAY_300 : theme.COLORS.PINK_300};
  background-color: ${({ theme, $bgPink }) =>
    $bgPink ? theme.COLORS.PINK_300 : theme.COLORS.GRAY_300};
  border: none;
  padding: 14px;
  font-size: 16px;
  border-radius: ${({ theme }) => theme.RADIUS.MD};

  > svg {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    margin-right: 8px;
  }
`;
