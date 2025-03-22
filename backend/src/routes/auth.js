import { Router } from "express";
import { Authentication } from "../controller/auth.js";

export const AuthRoute = Router()

AuthRoute.post("/", Authentication)