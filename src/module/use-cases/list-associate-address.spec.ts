import { describe, it, expect, beforeEach } from 'vitest'

import { ListAssociateAddressUseCase } from './list-associate-address'
import { InMemoryAssociateAddressRepository } from '../repositories/in-memory/in-memory-associate-address-repository'
import { InMemoryAssociatesRepository } from '../repositories/in-memory/in-memory-associates-repository'
    
let sut: ListAssociateAddressUseCase
let associateAddressRepository: InMemoryAssociateAddressRepository
let associatesRepository: InMemoryAssociatesRepository

describe('List Associate Use Case', () => {
  beforeEach(() => {
    associateAddressRepository = new InMemoryAssociateAddressRepository()
    associatesRepository = new InMemoryAssociatesRepository()
    sut = new ListAssociateAddressUseCase(associateAddressRepository)
  })

  it('should be able to List Associate Address', async () => {
    await associatesRepository.create({
      name: 'any_name09',
      cellphone: '(64) 9 9991-8525',
      cnpj: '0',
      email: 'any_email09@example.com',
      password: 'any_password',
      phone: '(64) 9 9991-8525',
      responsible_clinic: 'any_responsible_clinic',
      responsible_finance: 'any_responsible_finance',
      category: 'any_category',
      createdAt: new Date(),
      updatedAt: new Date(),
      id: '1',
    })

    expect(await sut.execute('1')).toEqual(expect.any(Array))
  })
})