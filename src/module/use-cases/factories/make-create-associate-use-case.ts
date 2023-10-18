import { CreateAssociateUseCase } from '../create-associate'
import { PrismaAssociatesRepository } from '../../repositories/prisma/prisma-associates-repository'

export function makeCreateAssociateUseCase() {
  const gymsRepository = new PrismaAssociatesRepository()
  const useCase = new CreateAssociateUseCase(gymsRepository)

  return useCase
}