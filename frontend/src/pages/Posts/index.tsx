import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";

import api from "../../services/api";

import {
  Container,
  BackContainer,
  Title,
  UserContainer,
  PostsList,
} from "./styles";

interface IUser {
  id: number;
  name: string;
  email: string;
  company: {
    name: string;
  };
}

interface IPosts {
  id: number;
  title: string;
  body: string;
}

const Posts: React.FC = () => {
  const { id } = useParams();
  const [user, setUser] = useState({} as IUser);
  const [posts, setPosts] = useState<IPosts[]>([]);

  useEffect(() => {
    api.get(`user/${id}/posts`).then((response) => {
      setUser(response.data.user);
      setPosts(response.data.userPosts);
    });
  }, [id]);

  return (
    <>
      <Container>
        <Link to="/">
          <FiChevronLeft size={20} />
          <Title>Usuário</Title>
        </Link>

        {user.id && (
          <UserContainer>
            <img
              src="https://api.adorable.io/avatars/190/abott@adorable.png"
              alt="avatar"
            />

            <div>
              <h3>{user.name}</h3>
              <strong>{user.email}</strong>
              <p>trabalha na empresa {user.company.name}</p>
            </div>
          </UserContainer>
        )}

        <Title>Posts</Title>

        <PostsList>
          {posts.map((post) => (
            <div key={post.id}>
              <strong>{post.title}</strong>
              <p>{post.body}</p>
            </div>
          ))}
        </PostsList>
      </Container>
    </>
  );
};

export default Posts;
