import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  grid-area: header;
  height: 105px;
  width: 100%;
  display: flex;
  gap: 64px;
  justify-content: space-between;
  padding: 0 120px 0;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};

  > form {
    flex: 1;
  }
`;

export const Profile = styled.div`
  display: flex;
  gap: 9px;
  align-items: center;
  cursor: pointer;

  > a {
    display: flex;
    flex-direction: column;
    align-items: end;
    color: ${({ theme }) => theme.COLORS.GRAY_100};

    h3 {
      font-size: 14px;
      font-weight: 700;
      text-align: right;
    }

    p {
      font-size: 14px;
      font-weight: 400;
    }

    > img {
      width: 64px;
      height: 64px;
      border-radius: ${({ theme }) => theme.RADIUS.FULL};
      object-fit: cover;
    }
  }
`;
export const Brand = styled(Link)`
  > h1 {
    font-size: 30px;
    color: ${({ theme }) => theme.COLORS.PINK_300};
  }
`;
