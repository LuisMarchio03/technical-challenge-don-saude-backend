import { describe, it, expect, beforeEach } from 'vitest'

import { CreateAssociateAddressUseCase } from './create-associate-address'
import { InMemoryAssociateAddressRepository } from '../../repositories/in-memory/in-memory-associate-address-repository'
    
let sut: CreateAssociateAddressUseCase
let associatesRepository: InMemoryAssociateAddressRepository

describe('Create AssociateAddress Use Case', () => {
  beforeEach(() => {
    associatesRepository = new InMemoryAssociateAddressRepository()
    sut = new CreateAssociateAddressUseCase(associatesRepository)
  })

  it('should be able to create Associate Address', async () => {
    const { address, associate_id } = await sut.execute({
        address: 'any_address',
        associate_id: 'any_associate_id',
        cep: 'any_cep',
        complement: 'any_complement',
        neighborhood: 'any_neighborhood',
        number: 'any_number',
    })

    expect(address).toEqual(expect.any(String))
    expect(associate_id).toEqual(expect.any(String))
  })

  it('should be able to not create Associate Address if it already exists', async () => {
    const associate = await sut.execute({
      address: 'any_address',
      associate_id: 'any_associate_id',
      cep: 'any_cep',
      complement: 'any_complement',
      neighborhood: 'any_neighborhood',
      number: 'any_number',
    })

    expect(associate).toBeTruthy()
})
})