import { describe, it, expect, beforeEach } from 'vitest'

import { InMemoryAssociatesRepository } from '../repositories/in-memory/in-memory-associates-repository'
import { DeleteAssociateUseCase } from './delete-associate'
    
let sut: DeleteAssociateUseCase
let associatesRepository: InMemoryAssociatesRepository

describe('Delete Associate Use Case', () => {
  beforeEach(() => {
    associatesRepository = new InMemoryAssociatesRepository()
    sut = new DeleteAssociateUseCase(associatesRepository)
  })

  it('should be able to Delete one Associate', async () => {
    const associates = await associatesRepository.listAssociates()
    associates.find(async associate => {
      expect(await sut.execute(associate.id)).toBeUndefined()
    })
  })

  it('should not be able to Delete one Associate with invalid id', async () => {
    expect(async () => {
      await sut.execute(23323 as any)
    }).rejects.toThrow()
  })

  it ('should not be able to Delete one Associate with associate not exists', async () => {
    expect(async () => {
      await sut.execute('123123123123123123123123')
    }).rejects.toThrow()
  })
})