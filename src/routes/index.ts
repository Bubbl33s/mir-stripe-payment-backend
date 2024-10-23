import { Application } from "express";
import paymentRoutes from "./transaction.routes";
import userRoutes from "./user.routes";

export default function setupRoutes(app: Application) {
  const API_PREFIX = "/api";

  app.use(API_PREFIX, paymentRoutes);
  app.use(API_PREFIX, userRoutes);
}
