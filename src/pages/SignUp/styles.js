import styled from "styled-components";
import backgroundImg from "../../assets/backgroundImg.png";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  overflow-y: auto;
`;

export const Form = styled.form`
  padding: 0 136px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 48px;

  > h2 {
    font-size: 24px;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > a {
    margin-top: 48px;
    color: ${({ theme }) => theme.COLORS.PINK_300};
    text-align: center;
  }

  .logo {
    > h1 {
      font-size: 48px;
      font-weight: 700;
      color: ${({ theme }) => theme.COLORS.PINK_300};
    }

    > p {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }

  .input-wrapper {
    display: grid;
    gap: 8px;
    width: 340px;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
  opacity: 50%;
`;
