import { PrismaAssociatesRepository } from '../../repositories/prisma/prisma-associates-repository'
import { DeleteAssociateUseCase } from '../delete-associate'

export function makeDeleteAssociateUseCase() {
  const repository = new PrismaAssociatesRepository()
  const useCase = new DeleteAssociateUseCase(repository)

  return useCase
}