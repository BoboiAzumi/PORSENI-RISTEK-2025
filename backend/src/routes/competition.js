import { Router } from "express";
import { GetCompetition } from "../controller/competition.js";

export const CompetitionRoute = Router()

CompetitionRoute.get("/", GetCompetition)