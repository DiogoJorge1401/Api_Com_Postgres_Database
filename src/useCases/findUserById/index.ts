import { UsersPostgresRepositories } from '../../repositories/implementations/UsersPostgresRepositories'
import { FindUserByIdController } from './FindUserByIdController'
import { FindUserByIdUseCase } from './FindUserByIdUseCase'

const usersPostgresRepositories = new UsersPostgresRepositories()

const findUserByIdUseCase = new FindUserByIdUseCase(usersPostgresRepositories)

const findUserByIdController = new FindUserByIdController(findUserByIdUseCase)

export { findUserByIdController }
