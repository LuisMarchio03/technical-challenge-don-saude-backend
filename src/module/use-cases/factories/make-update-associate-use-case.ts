import { UpdateAssociateUseCase } from '../update-associate'
import { PrismaAssociatesRepository } from '../../repositories/prisma/prisma-associates-repository'

export function makeUpdateAssociateUseCase() {
  const repository = new PrismaAssociatesRepository()
  const useCase = new UpdateAssociateUseCase(repository)

  return useCase
}