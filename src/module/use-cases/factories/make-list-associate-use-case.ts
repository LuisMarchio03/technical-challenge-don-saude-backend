import { ListAssociateUseCase } from '../associate/list-associate'
import { PrismaAssociatesRepository } from '../../repositories/prisma/prisma-associates-repository'

export function makeListAssociateUseCase() {
  const repository = new PrismaAssociatesRepository()
  const useCase = new ListAssociateUseCase(repository)

  return useCase
}