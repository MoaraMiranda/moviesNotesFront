import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.COLORS.PINK_100};
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.GRAY_200}` : "none"};
  border-radius: 10px;

  > button {
    border: none;
    background: none;
    text-align: center;

    svg {
      color: ${({ theme }) => theme.COLORS.PINK_300};
      font-size: 22px;
    }
  }

  > input {
    height: 56px;
    width: 100%;
    padding: 12px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    background: transparent;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
  }
`;
