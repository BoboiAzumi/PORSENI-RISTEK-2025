import { getAllCompetition } from "../services/competition.js"

/**
 * 
 * @param {import ("express").Request} req 
 * @param {import ("express").Response} res 
 * @returns 
 */
export async function GetCompetition(req, res) {
    try{
        const competition = await getAllCompetition()
        return res.json({
            status: "OK",
            data: competition
        })
    }
    catch{
        return res.json(
            {
                status: "ERROR",
                data: []
            }
        )
    }
}