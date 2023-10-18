import { ListAssociatesUseCase } from '../associate/list-associates'
import { PrismaAssociatesRepository } from '../../repositories/prisma/prisma-associates-repository'

export function makeListAssociatesUseCase() {
  const repository = new PrismaAssociatesRepository()
  const useCase = new ListAssociatesUseCase(repository)

  return useCase
}