import { CreateAssociateUseCase } from '../associate/create-associate'
import { PrismaAssociatesRepository } from '../../repositories/prisma/prisma-associates-repository'

export function makeCreateAssociateUseCase() {
  const repository = new PrismaAssociatesRepository()
  const useCase = new CreateAssociateUseCase(repository)

  return useCase
}