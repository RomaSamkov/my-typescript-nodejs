import { Request, Response } from "express";
import { User } from "../types/response";

export const getUsers = async (req: Request, res: Response) => {
  res.send({ message: "Hello Typescript users." });
};

export const getUserById = async (req: Request, res: Response) => {
  res.send({});
};

export const createUser = async (req: Request, res: Response) => {
  res.send({
    id: 1,
    name: "Kevin",
    email: "kevin@mail.com",
  });
};
