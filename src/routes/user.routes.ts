import { Router } from "express";
import { UserController } from "../controller/user.controller";
import { validateUser } from "../middlewares/validations";

const router = Router();
const PREFIX = "/user";

router.get(`${PREFIX}/:id`, UserController.getUsers);
router.get(`${PREFIX}/:id`, UserController.getUserById);
router.post(`${PREFIX}/create`, validateUser, UserController.createUser);

export default router;
