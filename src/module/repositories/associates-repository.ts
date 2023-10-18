import { Prisma, Associate } from '@prisma/client'

interface Input {
  name: string
  email: string
  cnpj: string
  phone: string
  cellphone: string
  responsible_clinic: string
  responsible_finance: string
  category: string
  password: string
}

interface AssociateCreateInput extends Input {}

interface AssociateUpdateInput extends Input  {}

export interface AssociatesRepository {
  create(data: AssociateCreateInput): Promise<Associate>
  listAssociates(): Promise<Associate[]>
  listAssociate(id: string): Promise<Associate>
  findByEmail(email: string): Promise<Associate>
  update(id: string, data: AssociateUpdateInput): Promise<void> 
  delete(id: string): Promise<void>
}