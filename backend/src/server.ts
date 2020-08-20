import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

interface IUser {
  id: number;
  name: string;
  company: {
    name: string;
  };
}

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

app.get("/users", async (request, response) => {
  const resp = await fetch("http://jsonplaceholder.typicode.com/users");

  const users: IUser[] = await resp.json();

  return response.json(users);
});

app.get("/user/:id/posts", async (request, response) => {
  const { id } = request.params;

  let resp = await fetch("http://jsonplaceholder.typicode.com/posts");

  const posts: IPost[] = await resp.json();

  resp = await fetch("http://jsonplaceholder.typicode.com/users");

  const users: IUser[] = await resp.json();

  const user = users.find((user) => user.id === Number(id));

  const userPosts = posts.filter((post) => post.userId === Number(id));

  if (userPosts.length === 0) {
    return response.json({
      message: "Nenhum post encontrado para esse usuário",
    });
  }

  return response.json({ userPosts, user });
});

app.listen(3333, () => {
  console.log("🚀 Server started on port 3333!");
});
