import { Request, Response, Router } from 'express'
import { createUserController } from './useCases/createUser'
import { findUserByIdController } from './useCases/findUserById'

const router = Router()

router.post('/users', async (req: Request, res: Response) => {
  return await createUserController.handle(req, res)
})

router.get('/users/:id', async (req: Request, res: Response) => {
  return await findUserByIdController.handle(req, res)
})

export { router }
