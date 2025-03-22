import { findAllCompetition } from "../repositories/competition.js";

export async function getAllCompetition(){
    return await findAllCompetition()
}