import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  overflow-y: auto;

  > header {
    width: 100%;
    height: 144px;
    background: ${({ theme }) => theme.COLORS.PINK_100};
    display: flex;
    align-items: center;
    padding: 0 124px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 64px;

  .input-wrapper {
    display: grid;
    gap: 8px;
    width: 340px;
  }

  .input-wrapper > :nth-child(2) {
    margin-bottom: 16px;
  }
`;

export const Avatar = styled.div`
  position: relative;
  margin: -80px auto 0;
  width: 186px;
  height: 186px;

  > img {
    min-width: 186px;
    height: 186px;
    object-fit: cover;
    border-radius: ${({ theme }) => theme.RADIUS.FULL};
  }

  > label {
    width: 48px;
    height: 48px;
    background-color: ${({ theme }) => theme.COLORS.PINK_300};
    border-radius: ${({ theme }) => theme.RADIUS.FULL};
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 7px;
    right: 7px;
    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`;
