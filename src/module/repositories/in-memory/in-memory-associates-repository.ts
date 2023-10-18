import { randomUUID } from 'node:crypto'
import { AssociatesRepository } from '../associates-repository'

interface Associate {
  id: string
  name: string
  email: string
  cnpj: string
  phone: string
  cellphone: string
  responsible_clinic: string
  responsible_finance: string
  password: string,
  category: string,
  createdAt: Date
  updatedAt: Date
}

interface AssociateCreateInput extends Associate {}

interface AssociateUpdateInput extends Associate {}

export class InMemoryAssociatesRepository implements AssociatesRepository {
  public items: Associate[] = []

  async create(data: AssociateCreateInput): Promise<Associate> {
    const associate = {
      id: randomUUID(),
      name: data.name,
      email: data.email,
      password: data.password,
      cellphone: data.cellphone,
      cnpj: data.cnpj,
      phone: data.phone,
      category: data.category,
      responsible_clinic: data.responsible_clinic,
      responsible_finance: data.responsible_finance,
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    await this.items.push(associate)
    return associate
  }
  async listAssociates(): Promise<Associate[]> {
    return this.items
  }
  async listAssociate(id: string): Promise<Associate> {
    const associate = this.items.find((associate) => associate.id === id)
    return associate as Associate
  }
  async findByEmail(email: string): Promise<Associate> {
    const associate = this.items.find((associate) => associate.email === email)
    return associate as Associate
  }
  async update(id: string, data: AssociateUpdateInput): Promise<void> {
    const associate = this.items.find((associate) => associate.id === id) as AssociateUpdateInput
    associate.name = data.name
    associate.email = data.email
    associate.password = data.password
    associate.cellphone = data.cellphone
    associate.cnpj = data.cnpj
    associate.phone = data.phone
    associate.responsible_clinic = data.responsible_clinic
    associate.responsible_finance = data.responsible_finance
    associate.updatedAt = new Date()
  }
  async delete(id: string): Promise<void> {
    this.items = this.items.filter((associate) => associate.id !== id)
  }
}