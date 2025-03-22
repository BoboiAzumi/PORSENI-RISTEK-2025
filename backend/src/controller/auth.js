import { AuthService } from "../services/auth.js"
import { JWT } from "../utils/jwt.js"

/**
 *
 * @param {import ("express").Request} req
 * @param {import ("express").Response} res
 * @returns
 */
export async function Authentication(req, res) {
    try{
        const { username, password } = req.body
        const user = await AuthService(username, password)

        if(user == null){
            return res.json(
                {
                    status: "NOT_FOUND",
                    data: []
                }
            )
        }

        return res.json({
            token: JWT.sign(user.id)
        })
    }
    catch (err){
        console.log(err)
        return res.json({
            status: "ERROR",
            data: []
        })
    }
}
