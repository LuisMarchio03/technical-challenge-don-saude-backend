import { describe, it, expect, beforeEach } from 'vitest'

import { ListAssociatesUseCase } from './list-associates'
import { InMemoryAssociatesRepository } from '../../repositories/in-memory/in-memory-associates-repository'
    
let sut: ListAssociatesUseCase
let associatesRepository: InMemoryAssociatesRepository

describe('List Associate Use Case', () => {
  beforeEach(() => {
    associatesRepository = new InMemoryAssociatesRepository()
    sut = new ListAssociatesUseCase(associatesRepository)
  })

  it('should be able to List Associate', async () => {
    expect(await sut.execute()).toEqual(expect.any(Array))
  })
})