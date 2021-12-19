import { User } from '../../entities/User'
import { UsersRepository } from '../../repositories/UsersRepository'
import { UserDTO } from './UserDTO'

export class CreateUserUseCase {
  constructor(private usersRepositories: UsersRepository) {}

  async execute(userDTO: UserDTO) {
    const userExists = await this.usersRepositories.findByEmail(userDTO.email)
    if (userExists) throw new Error('User alredy exists!')
    const user = new User(userDTO)
    await this.usersRepositories.create(user)
  }
}
