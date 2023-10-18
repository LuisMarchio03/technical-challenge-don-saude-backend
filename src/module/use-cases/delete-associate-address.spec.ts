import { describe, it, expect, beforeEach } from 'vitest'

import { InMemoryAssociateAddressRepository } from '../repositories/in-memory/in-memory-associate-address-repository'
import { DeleteAssociateAddressUseCase } from './delete-associate-address'
import { InMemoryAssociatesRepository } from '../repositories/in-memory/in-memory-associates-repository'
    
let sut: DeleteAssociateAddressUseCase
let associateAddressRepository: InMemoryAssociateAddressRepository
let associatesRepository: InMemoryAssociatesRepository

describe('Delete Associate Address Use Case', () => {
  beforeEach(() => {
    associateAddressRepository = new InMemoryAssociateAddressRepository()
    associatesRepository = new InMemoryAssociatesRepository()
    sut = new DeleteAssociateAddressUseCase(associateAddressRepository)
  })

  it('should be able to Delete one Associate Address', async () => {
    await associatesRepository.create({
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
      updatedAt: new Date(),
      id: '1',
    })

    const associates = await associateAddressRepository.list('1')
    associates.find(async associate => {
      expect(await sut.execute(associate.id)).toBeUndefined()
    })
  })
})