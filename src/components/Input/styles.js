import styled from "styled-components";

export const Container = styled.div`
  /* width: 630px; */
  border-radius: 10px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  display: flex;
  align-items: center;
  flex: 1;

  > input {
    width: 100%;
    height: 100%;
    padding: 20px;
    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.WHITE};
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
  }

  > SVG {
    margin-left: 24px;
  }
`;
