import { describe, it, expect, beforeEach } from 'vitest'

import { ListAssociateUseCase } from './list-associate'
import { InMemoryAssociatesRepository } from '../../repositories/in-memory/in-memory-associates-repository'
import { ListAssociatesUseCase } from './list-associates'
    
let sut: ListAssociateUseCase
let listAssociatesUseCase: ListAssociatesUseCase
let associatesRepository: InMemoryAssociatesRepository

describe('List Associate Use Case', () => {
  beforeEach(() => {
    associatesRepository = new InMemoryAssociatesRepository()
    sut = new ListAssociateUseCase(associatesRepository)
    listAssociatesUseCase = new ListAssociatesUseCase(associatesRepository)
  })

  it('should be able to List one Associate', async () => {
    const associates = await listAssociatesUseCase.execute()
    associates.find(async associate => {
      expect(await sut.execute(associate.id)).toEqual(expect.any(Object))
    })
  })
})