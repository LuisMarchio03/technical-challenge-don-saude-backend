import { ListAssociateAddressUseCase } from '../list-associate-address'
import { PrismaAssociatesAddressRepository } from '../../repositories/prisma/prisma-associate-address'

export function makeListAssociateAddressUseCase() {
  const repository = new PrismaAssociatesAddressRepository()
  const useCase = new ListAssociateAddressUseCase(repository)

  return useCase
}