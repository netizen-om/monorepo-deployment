import express, { Request, Response } from "express";
import { client } from "@repo/db/client";

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello");
});

app.post("/signup", async (req: Request, res: Response) => {
  const username = req.body.username;
  const password = req.body.password;

  if (!username || !password) {
    res.json({
      Error: "username or passowrd not found!!!!!!!!!!!!!!",
    });
  }

  const user = await client.user.create({
    data: {
      username,
      password,
    },
  });

  res.json({
    message: "Signup Successfull",
    id : user.id
  });
});

app.listen(3002, () => {
  console.log("Server running on port 3002");
});
 