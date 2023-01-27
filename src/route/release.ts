import { ReleaseController } from "../controller/ReleaseController"
import { Router } from "express"
import { UserController } from "../controller/UserController"
import { Release } from "../entity/Release"

export const routerRelease = Router()
const releaseCtrl = new ReleaseController()
const userCtrl = new UserController()

//Rota para salvar um lançamento
routerRelease.post('/', async (req, res) => {
    const { idUser, value, description, date } = req.body
    if (Number(idUser) && Number.isInteger(idUser)) {
        const user = await userCtrl.getUserId(idUser)
        if (user) {
            const release = new Release(value, description, date, user)
            const releaseSaved = await releaseCtrl.save(release)
            res.json(releaseSaved)
        } else {
            res.status(404).json({ mensagem: "User not foud" })
        }
    } else {
        res.status(404).json({ mensagem: "User not foud" })
    }

})