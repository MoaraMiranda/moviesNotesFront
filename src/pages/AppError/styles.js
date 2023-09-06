import styled from "styled-components";
// import notFoundImg from "../../assets/notFoundImg.png";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
  color: ${({ theme }) => theme.COLORS.PINK_300};
  display: flex;
  justify-content: center;
  align-items: center;

  > section {
    max-width: 400px;
    max-height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    > img {
      width: 401px;
      height: 294px;
      opacity: 0.5;
    }
    h1 {
      font-size: 60px;
      text-align: left;
      margin-bottom: -25px;
    }

    p {
      font-size: 35px;
      text-align: end;
    }
  }
`;
