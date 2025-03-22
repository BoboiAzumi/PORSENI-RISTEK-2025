import { Router } from "express";
import { CountRegistration, GetAllApprovedRegistration, GetAllPendingRegistration, GetRegistrationById, PatchRegistration, PostRegistrationHandler } from "../controller/registration.js";

export const RegistrationRoute = Router()

RegistrationRoute.post("/", PostRegistrationHandler)
RegistrationRoute.get("/count", CountRegistration)
RegistrationRoute.get("/pending", GetAllPendingRegistration)
RegistrationRoute.get("/approved", GetAllApprovedRegistration)
RegistrationRoute.patch("/", PatchRegistration)
RegistrationRoute.get("/:id", GetRegistrationById)