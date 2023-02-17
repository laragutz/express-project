import { Router } from "express";
import {
  getUsers,
  getUsersById
} from '../controllers/usersController'

const router = Router()

router.get('/users', getUsers)
router.get('/users/:id', getUsersById)

export default router
