import { CreateAssociateAddressUseCase } from '../associate-address/create-associate-address'
import { PrismaAssociatesAddressRepository } from '../../repositories/prisma/prisma-associate-address'

export function makeCreateAssociateAddressUseCase() {
  const repository = new PrismaAssociatesAddressRepository()
  const useCase = new CreateAssociateAddressUseCase(repository)

  return useCase
}