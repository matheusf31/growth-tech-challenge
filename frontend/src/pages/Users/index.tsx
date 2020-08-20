import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";

import { Container, Title, UsersList } from "./styles";

import api from "../../services/api";

interface IUsers {
  id: number;
  name: string;
  email: string;
  company: {
    name: string;
  };
}

const Users: React.FC = () => {
  const [users, setUsers] = useState<IUsers[]>([]);

  useEffect(() => {
    api.get("/users").then((resp) => setUsers(resp.data));
  }, []);

  return (
    <Container>
      <Title>Usuários</Title>

      <UsersList>
        {users.map((user) => (
          <Link to={`user/${user.id}/posts`} key={user.id}>
            <img
              src="https://api.adorable.io/avatars/190/abott@adorable.png"
              alt="avatar"
            />

            <div>
              <h3>{user.name}</h3>
              <strong>{user.email}</strong>
              <p>trabalha na empresa {user.company.name}</p>
            </div>

            <FiChevronRight size={20} />
          </Link>
        ))}
      </UsersList>
    </Container>
  );
};

export default Users;
