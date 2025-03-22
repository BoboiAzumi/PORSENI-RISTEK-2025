import { prisma } from "../utils/database.js";

export async function CreateRegistrationMany(data){
    return await prisma.participant.createMany({
        data
    })
}