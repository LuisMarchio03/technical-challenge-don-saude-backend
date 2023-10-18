import { AssociateAddress } from '@prisma/client'

import { prisma } from "../../lib/prisma"
import { AssociatesAddressRepository } from '../associate-address-repository'

interface Input {
  associate_id: string
  cep: string
  address: string
  number: string
  complement: string
  neighborhood: string
}

export class PrismaAssociatesAddressRepository implements AssociatesAddressRepository {
  async create(data: Input): Promise<AssociateAddress> {
    return await prisma.associateAddress.create({
      data: {
        ...data,
      }
    });
  }
  async list(associate_id: string): Promise<AssociateAddress[]> {
    return await prisma.associateAddress.findMany({
      where: { associate_id },
    }) as AssociateAddress[]
  }
  async findByCep(cep: string): Promise<AssociateAddress> {
    return await prisma.associateAddress.findFirst({
      where: { cep },
    }) as AssociateAddress
  }
  async delete(id: string): Promise<void> {
    await prisma.associateAddress.delete({
      where: { id },
    })
  }
}