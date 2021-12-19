import e from 'express'
import { Pool } from 'pg'
import { createConnection } from '../../database/connection'
import { User } from '../../entities/User'
import { UsersRepository } from '../UsersRepository'

export class UsersPostgresRepositories implements UsersRepository {
  private client: Pool

  constructor() {
    createConnection().then((r) => {
      this.client = r.client
    })
  }
  async findById(id: string): Promise<User> {
    const user = (
      await this.client.query('SELECT * FROM USERS WHERE ID=$1', [id])
    ).rows[0]
    return user
  }
  async findByEmail(email: string): Promise<User> {
    const user = (
      await this.client.query('SELECT * FROM USERS WHERE EMAIL=$1', [email])
    ).rows[0]
    return user
  }

  async create({ id, name, email }: User): Promise<void> {
    await this.client.query(
      'INSERT INTO USERS(ID,NAME,EMAIL)VALUES($1,$2,$3)',
      [id, name, email]
    )
  }
}
