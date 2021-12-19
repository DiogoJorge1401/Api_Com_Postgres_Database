import { Request, Response } from 'express'
import { FindUserByIdUseCase } from './FindUserByIdUseCase'

export class FindUserByIdController {
  constructor(private findUserByIdUseCase: FindUserByIdUseCase) {}

  async handle(req: Request, res: Response) {
    const { id } = req.params
    try {
      const user = await this.findUserByIdUseCase.execute(id)
      return res.json(user)
    } catch (err) {
      return res.status(400).json({
        message: 'User not exists!',
      })
    }
  }
}
