import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { RegistrationRoute } from "./routes/registration.js"
import { CompetitionRoute } from "./routes/competition.js"
import { AuthRoute } from "./routes/auth.js"

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/registration", RegistrationRoute)
app.use("/api/competition", CompetitionRoute)
app.use("/api/auth", AuthRoute)

app.listen(process.env.PORT || 1000, () => console.log(`Server start on ${process.env.PORT || 1000}`))