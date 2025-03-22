import { prisma } from "../utils/database.js"

export async function findAllCompetition(){
    return await prisma.competition.findMany()
}