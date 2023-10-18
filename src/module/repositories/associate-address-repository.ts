import { AssociateAddress } from '@prisma/client'

interface Input {
  associate_id: string
  cep: string
  address: string
  number: string
  complement: string
  neighborhood: string
}

interface AssociateAddressCreateInput extends Input {}

export interface AssociatesAddressRepository {
  create(data: AssociateAddressCreateInput): Promise<AssociateAddress>
  list(associate_id: string): Promise<AssociateAddress[]>
  findByCep(cep: string): Promise<AssociateAddress>
  delete(id: string): Promise<void>
}