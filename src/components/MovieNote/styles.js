import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.PINK_100};
  border-radius: 10px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  > h2 {
    font-size: 24px;
  }

  > p {
    text-align: justify;
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }
`;
