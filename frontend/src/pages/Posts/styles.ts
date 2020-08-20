import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  a {
    text-decoration: none;
    color: #17181d;

    display: flex;
    align-items: center;
  }

  h1 {
    margin-left: 10px;
  }
`;

export const BackContainer = styled.div`
  margin-bottom: 20px;
`;

export const Title = styled.h1``;

export const UserContainer = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;

  background: #fff;
  border-radius: 10px;
  width: 100%;
  padding: 24px;
  display: block;

  text-decoration: none;

  display: flex;
  align-items: center;

  transition: transform 0.2s;

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
`;

export const PostsList = styled.div`
  margin-top: 40px;
  margin-bottom: 80px;

  div {
    background: #fff;
    border-radius: 10px;
    width: 100%;
    padding: 24px;

    & + div {
      margin-top: 16px;
    }

    text-decoration: none;

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
`;
