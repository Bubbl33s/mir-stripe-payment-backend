import { Request, Response, NextFunction } from "express";
import { UserService } from "../services/user.service";

export class UserController {
  static async getUsers(_: Request, res: Response, next: NextFunction) {
    try {
      const users = await UserService.getUsers();

      if (!users) {
        throw new Error("No users found");
      }

      res.json(users);
    } catch (error) {
      next(error);
    }
  }

  static async getUserById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const user = await UserService.getUserById(id);

      if (!user) {
        throw new Error("User not found");
      }

      res.json(user);
    } catch (error) {
      next(error);
    }
  }

  static async createUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, name } = req.body;
      const user = await UserService.createUser({ email, name });
      res.json(user);
    } catch (error) {
      next(error);
    }
  }
}
