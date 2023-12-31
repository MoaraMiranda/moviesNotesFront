import styled from "styled-components";

export const Container = styled.div`
  border-radius: ${({ theme }) => theme.RADIUS.MD};
  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  display: flex;
  align-items: center;
  flex: 1;

  > input {
    height: 56px;
    width: 100%;
    padding: 20px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: transparent;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
  }

  > SVG {
    margin-left: 24px;
  }
`;
