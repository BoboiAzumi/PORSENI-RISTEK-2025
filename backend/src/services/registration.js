import { CreateRegistrationMany } from "../repositories/participant.js";
import { CountAllRegistration, CountApprovedRegistration, CreateRegistration, FindApprovedRegistration, FindById, FindPendingRegistration, UpdateRegistration } from "../repositories/registration.js";
import { sendRegistrationNotification } from "../utils/email.js";

export async function RegistrationProcess(data){
    const registration = await CreateRegistration({
        classroom: data.classroom,
        classLeader: data.classLeader,
        nim: data.nim,
        contact: data.contact,
        email: data.email
    })
    
    const participant = []

    for(let i = 0; i < data.competitionGroup.length; i++){
        for(let j = 0; j < data.competitionGroup[i].participant.length; j++){
            participant.push({
                registrationId: registration.id,
                name: data.competitionGroup[i].participant[j].name,
                nim: data.competitionGroup[i].participant[j].nim,
                contact: data.competitionGroup[i].participant[j].contact,
                name: data.competitionGroup[i].participant[j].name,
                competitionId: parseInt(data.competitionGroup[i].type)
            })
        }
    }

    await CreateRegistrationMany(participant)
    await sendRegistrationNotification(registration.email, registration.classLeader, registration.classroom)
}

export async function CountRegistrationService(){
    const all = await CountAllRegistration()
    const approved = await CountApprovedRegistration()

    return {
        all,
        approved
    }
}

export async function GetPendingRegistrationService(){
    const registration = await FindPendingRegistration()

    return registration
}

export async function GetApprovedRegistrationService(){
    const registration = await FindApprovedRegistration()

    return registration
}

export async function PatchRegistrationService(id, status){
    return await UpdateRegistration(id, status)
}

export async function GetRegistrationByIdService(id){
    const registration = await FindById(id)
    
    const participant = {}

    registration.Participant.map((v) => {
        if(!(v.Competition.name in participant)){
            participant[v.Competition.name] = []
        }

        participant[v.Competition.name].push(
            {
                name: v.name,
                nim: v.nim,
                contact: v.contact
            }
        )
    })

    return {
        id: registration.id,
        classroom: registration.classroom,
        classLeader: registration.classLeader,
        nim: registration.nim,
        contact: registration.contact,
        status: registration.status,
        participant
    }
}