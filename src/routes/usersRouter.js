import { Router } from "express";
import {
  getUsers,
  getUsersJson
} from '../controllers/usersController'

const router = Router()

router.get('/', getUsers)
router.get('/json', getUsersJson)


export default router
