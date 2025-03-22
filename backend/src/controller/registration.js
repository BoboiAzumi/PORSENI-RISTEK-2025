import { CountRegistrationService, GetApprovedRegistrationService, GetPendingRegistrationService, GetRegistrationByIdService, PatchRegistrationService, RegistrationProcess } from "../services/registration.js"
import { sendApprovedNotification, sendRejectedNotification } from "../utils/email.js"

/**
 * 
 * @param {import ("express").Request} req 
 * @param {import ("express").Response} res 
 * @returns 
 */
export async function PostRegistrationHandler (req, res) {
    try{
        await RegistrationProcess(req.body)
        return res.json({status: "OK"})
    }
    catch (error){
        console.log(error)
        return res.json(
            {
                status: "ERROR",
                data: []
            }
        )
    }
}

/**
 * 
 * @param {import ("express").Request} req 
 * @param {import ("express").Response} res 
 * @returns 
 */
export async function CountRegistration(req, res) {
    try{
        const count = await CountRegistrationService()
        return res.json({
            status: "OK",
            data: count
        })
    }
    catch (error){
        return res.json(
            {
                status: "ERROR",
                data: []
            }
        )
    }
}

/**
 * 
 * @param {import ("express").Request} req 
 * @param {import ("express").Response} res 
 * @returns 
 */
export async function GetAllPendingRegistration (req, res) {
    try{
        const pendingRegistration = await GetPendingRegistrationService()
        return res.json({
            status: "OK",
            data: pendingRegistration
        })
    }

    catch (error){
        return res.json(
            {
                status: "ERROR",
                data: []
            }
        )
    }
}

/**
 * 
 * @param {import ("express").Request} req 
 * @param {import ("express").Response} res 
 * @returns 
 */
export async function GetAllApprovedRegistration (req, res) {
    try{
        const pendingRegistration = await GetApprovedRegistrationService()
        return res.json({
            status: "OK",
            data: pendingRegistration
        })
    }

    catch (error){
        return res.json(
            {
                status: "ERROR",
                data: []
            }
        )
    }
}

/**
 * 
 * @param {import ("express").Request} req 
 * @param {import ("express").Response} res 
 * @returns 
 */
export async function PatchRegistration (req, res) {
    try{
        const { id, status } = req.body
        const patch = await PatchRegistrationService(id, status)

        if(status == "REJECT"){
            sendRejectedNotification(patch.email, patch.classLeader, patch.classroom)
            .catch((err) => console.log(err))
        }
        if(status == "APPROVED"){
            sendApprovedNotification(patch.email, patch.classLeader, patch.classroom, patch.id)
            .catch((err) => console.log(err))
        }

        return res.json({
            status: "OK",
            data: patch
        })
    }
    
    catch (error){
        console.log(error)
        return res.json(
            {
                status: "ERROR",
                data: []
            }
        )
    }
}

/**
 * 
 * @param {import ("express").Request} req 
 * @param {import ("express").Response} res 
 * @returns 
 */
export async function GetRegistrationById (req, res) {
    try{
        const { id } = req.params
        const detail = await GetRegistrationByIdService(id)
        return res.json({
            status: "OK",
            data: detail
        })
    }
    
    catch (error){
        console.log(error)
        return res.json(
            {
                status: "ERROR",
                data: []
            }
        )
    }
}