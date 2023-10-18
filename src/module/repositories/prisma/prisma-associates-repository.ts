import { Associate, Prisma } from '@prisma/client'

import { prisma } from "../../lib/prisma"
import { AssociatesRepository } from '../associates-repository'

import bcrypt from 'bcrypt'

export class PrismaAssociatesRepository implements AssociatesRepository {
  async create(data: Prisma.AssociateCreateInput): Promise<Associate> {
    const passwordHash = await bcrypt.hash(data.password, 8)
    return await prisma.associate.create({
      data: {
        ...data,
        password: passwordHash,
      }
    })
  }
  async listAssociates(): Promise<Associate[]> {
    return await prisma.associate.findMany()
  }
  async listAssociate(id: string): Promise<Associate> {
    const associate = await prisma.associate.findFirst({
      where: {
        id,
      },
    })
    return associate as Associate
  }
  async findByEmail(email: string): Promise<Associate> {
    const associate = await prisma.associate.findUnique({
      where: {
        email,
      },
    })
    return associate as Associate
  }
  async update(id: string, data: Prisma.AssociateUpdateInput): Promise<void> {
    await prisma.associate.update({
      where: { id },
      data,
    })
  }
  async delete(id: string): Promise<void> {
    await prisma.associate.delete({
      where: { id },
    })
  }
}