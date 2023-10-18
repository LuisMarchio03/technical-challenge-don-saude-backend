import { Prisma, Associate } from '@prisma/client'

interface AssociateCreateInput {
  name: string
  email: string
  cnpj: string
  phone: string
  cellphone: string
  responsible_clinic: string
  responsible_finance: string
  password: string
}

interface AssociateUpdateInput {
  name: string
  email: string
  cnpj: string
  phone: string
  cellphone: string
  responsible_clinic: string
  responsible_finance: string
  password: string
}

export interface AssociatesRepository {
  create(data: AssociateCreateInput): Promise<Associate>
  listAssociates(): Promise<Associate[]>
  listAssociate(): Promise<Associate>
  findByEmail(email: string): Promise<Associate>
  update(id: string, data: AssociateUpdateInput): Promise<void> 
  delete(id: string): Promise<void>
}