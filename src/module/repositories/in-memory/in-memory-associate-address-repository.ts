import { randomUUID } from 'node:crypto'
import { AssociatesAddressRepository } from '../associate-address-repository'

interface AssociateAddress {
  associate_id: string
  cep: string
  address: string
  number: string
  complement: string
  neighborhood: string
  id: string
  createdAt: Date
  updatedAt: Date
}

interface AssociateAddressCreateInput extends AssociateAddress {}

export class InMemoryAssociateAddressRepository implements AssociatesAddressRepository {
  public items: AssociateAddress[] = []

  async create(data: AssociateAddressCreateInput): Promise<AssociateAddress> {
    const associateAddress: AssociateAddress = {
      ...data,
      id: randomUUID(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    await this.items.push(associateAddress);
    return associateAddress;
  }
  async list(associate_id: string): Promise<AssociateAddress[]> {
    return this.items.filter((associateAddress) => associateAddress.associate_id === associate_id)
  }
  async findByCep(cep: string): Promise<AssociateAddress> {
    const associateAddress = this.items.find((associateAddress) => associateAddress.cep === cep)
    return associateAddress as AssociateAddress
  }
  async delete(id: string): Promise<void> {
    this.items = this.items.filter((associateAddress) => associateAddress.id !== id)
  }
}