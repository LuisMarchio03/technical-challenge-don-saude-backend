import { PrismaAssociatesAddressRepository } from '../../repositories/prisma/prisma-associate-address'
import { DeleteAssociateAddressUseCase } from '../delete-associate-address'

export function makeDeleteAssociateAddressUseCase() {
  const repository = new PrismaAssociatesAddressRepository()
  const useCase = new DeleteAssociateAddressUseCase(repository)

  return useCase
}