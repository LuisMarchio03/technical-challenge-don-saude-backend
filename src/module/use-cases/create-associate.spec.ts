import { describe, it, expect, beforeEach } from 'vitest'

import { CreateAssociateUseCase } from './create-associate'
import { InMemoryAssociatesRepository } from '../repositories/in-memory/in-memory-associates-repository'
    
let sut: CreateAssociateUseCase
let associatesRepository: InMemoryAssociatesRepository

describe('Create Associate Use Case', () => {
  beforeEach(() => {
    associatesRepository = new InMemoryAssociatesRepository()
    sut = new CreateAssociateUseCase(associatesRepository)
  })

  it('should be able to create Associate', async () => {
    const { email, cnpj } = await sut.execute({
        name: 'any_name',
        cellphone: '(64) 9 9991-8525',
        cnpj: '0',
        email: 'any_email@example.com',
        password: 'any_password',
        phone: '(64) 9 9991-8525',
        responsible_clinic: 'any_responsible_clinic',
        responsible_finance: 'any_responsible_finance',
        category: 'any_category',
    })

    expect(email).toEqual(expect.any(String))
    expect(cnpj).toEqual(expect.any(String))
  })

  it('should be able to not create Associate if it already exists', async () => {
    const associate = await sut.execute({
        name: 'any_name',
        cellphone: '(64) 9 9991-8525',
        cnpj: '0',
        email: 'any_email@example.com',
        password: 'any_password',
        phone: '(64) 9 9991-8525',
        responsible_clinic: 'any_responsible_clinic',
        responsible_finance: 'any_responsible_finance',
        category: 'any_category',
    })

    expect(associate).toBeTruthy()
})
})