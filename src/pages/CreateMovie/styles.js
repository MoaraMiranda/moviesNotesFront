import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    "header"
    "content";
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};

  .tags {
    display: flex;
    justify-content: start;
    gap: 24px;
    flex-wrap: wrap;
    background-color: ${({ theme }) => theme.COLORS.BLACK};
    padding: 16px;
    border-radius: ${({ theme }) => theme.RADIUS.MD};
  }

  .input-wrapper {
    flex: 1;
  }

  > main {
    grid-area: content;
    padding: 40px 120px 0;
    overflow-y: auto;

    h2 {
      margin-top: 24px;
      margin-bottom: 40px;
      font-size: 36px;
    }
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 270px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  border: none;
  resize: none;
  margin-bottom: 40px;
  border-radius: ${({ theme }) => theme.RADIUS.MD};

  padding: 16px;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }
`;

export const Fieldset = styled.fieldset`
  border: none;
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: space-between;
  width: 100%;

  > legend {
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 24px;
  }

  > div {
    display: flex;
    gap: 40px;
  }
`;

export const Button = styled.button`
  display: flex;
  flex: 1;
  justify-content: center;
  width: 100%;
  height: 56px;
  font-size: 20px;
  font-weight: 500;
  padding: 12px;
  background-color: ${({ theme }) => theme.COLORS.PINK_300};
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  border: none;
`;
