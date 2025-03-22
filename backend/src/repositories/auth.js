import { prisma } from "../utils/database.js"

export async function findUser(username, password){
    return await prisma.admin.findFirst({
        where: {
            username,
            password
        }
    })
}