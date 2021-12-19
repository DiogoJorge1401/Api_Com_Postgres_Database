import { v4 as uuid } from 'uuid'
import { UserDTO } from '../useCases/createUser/UserDTO'

export class User {
  id: string
  name: string
  email: string
  constructor(userDto: UserDTO, id?: string) {
    Object.assign(this, userDto)
    if (!id) this.id = uuid()
    else this.id = id
  }
}
