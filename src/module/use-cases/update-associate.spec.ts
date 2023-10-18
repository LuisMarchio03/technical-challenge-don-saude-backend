import { describe, it, expect, beforeEach } from 'vitest'

import { UpdateAssociateUseCase } from './update-associate'
import { InMemoryAssociatesRepository } from '../repositories/in-memory/in-memory-associates-repository'
    
let sut: UpdateAssociateUseCase
let associatesRepository: InMemoryAssociatesRepository

describe('Update Associate Use Case', () => {
  beforeEach(() => {
    associatesRepository = new InMemoryAssociatesRepository()
    sut = new UpdateAssociateUseCase(associatesRepository)
  })

  it('should be able to update Associate', async () => {
    const associates = await associatesRepository.create({
      name: 'any_name',
      cellphone: '(64) 9 9991-8525',
      cnpj: '0',
      email: 'any_email@example.com',
      password: 'any_password',
      phone: '(64) 9 9991-8525',
      responsible_clinic: 'any_responsible_clinic',
      responsible_finance: 'any_responsible_finance',
      category: 'any_category',
      createdAt: new Date(),
      id: 'any_id',
      updatedAt: new Date(),
    })

    await sut.execute(
      associates.id,
      {
        name: 'any_name_update',
        cellphone: '(64) 9 9991-8525',
        cnpj: '0',
        email: 'any_email_update@example.com',
        password: 'any_password',
        phone: '(64) 9 9991-8525',
        responsible_clinic: 'any_responsible_clinic',
        responsible_finance: 'any_responsible_finance',
        category: 'any_category',
      }
    )

    const associate = await associatesRepository.listAssociate(associates.id)

    expect(associate.name).toEqual('any_name_update')
    expect(associate.email).toEqual('any_email_update@example.com')
  })
})