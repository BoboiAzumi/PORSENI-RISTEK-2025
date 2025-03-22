import { RegistrationStatus } from "@prisma/client";
import { prisma } from "../utils/database.js";

export async function CreateRegistration(data){
    return await prisma.registration.create({
        data
    })
}

export async function CountAllRegistration(){
    return await prisma.registration.count()
}

export async function CountApprovedRegistration(){
    return await prisma.registration.count({
        where: {
            status: RegistrationStatus.APPROVED
        }
    })
}

export async function FindPendingRegistration(){
    return await prisma.registration.findMany({
        where: {
            status: RegistrationStatus.PENDING
        },
        include: {
            Participant: {
                include: {
                    Competition: true
                }
            }
        }
    })
}

export async function FindApprovedRegistration(){
    return await prisma.registration.findMany({
        where: {
            status: RegistrationStatus.APPROVED
        },
        include: {
            Participant: {
                include: {
                    Competition: true
                }
            }
        }
    })
}

export async function UpdateRegistration(id, status){
    return await prisma.registration.update({
        data: {
            status
        },
        where: {
            id
        }
    })
}

export async function FindById(id){
    return await prisma.registration.findFirst({
        where: {
            id: parseInt(id)
        },
        include: {
            Participant: {
                include: {
                    Competition: true
                }
            }
        }
    })
}