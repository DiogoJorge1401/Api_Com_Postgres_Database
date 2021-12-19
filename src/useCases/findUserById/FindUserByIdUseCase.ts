import { UsersRepository } from '../../repositories/UsersRepository';

export class FindUserByIdUseCase {
  constructor(
    private userRepository:UsersRepository
  ){}

  async execute(id:string){
    return await this.userRepository.findById(id)
  }

}