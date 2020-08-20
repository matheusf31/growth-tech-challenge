import styled from "styled-components";

export const Container = styled.div``;

export const Title = styled.h1``;

export const UsersList = styled.div`
  margin-top: 40px;
  margin-bottom: 80px;

  a {
    background: #fff;
    border-radius: 10px;
    width: 100%;
    padding: 24px;
    display: block;

    text-decoration: none;

    display: flex;
    align-items: center;

    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
    }

    img {
      width: 70px;
      height: 70px;
      border-radius: 35px;
    }

    div {
      margin-left: 16px;

      h3 {
        color: #17181d;
      }

      strong {
        display: block;
        margin-top: 5px;
        color: #17181d;
      }

      p {
        font-size: 18px;
        color: #a8abb3;
        margin-top: 10px;
      }
    }

    svg {
      margin-left: auto;
      color: #a8abb3;
    }
  }
`;
