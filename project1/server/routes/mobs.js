import express from "express"
import path from "path"
import MobController from "../controllers/mobs.js"

import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()

router.get('/', MobController.getMobs)

router.get('/:mobId', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../public/mob.html'))
})

export default router