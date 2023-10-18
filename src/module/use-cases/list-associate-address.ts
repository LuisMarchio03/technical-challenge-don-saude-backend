import { AssociateAddress } from '@prisma/client'
import { AssociatesAddressRepository } from '../repositories/associate-address-repository'

export class ListAssociateAddressUseCase {
  constructor(private AssociatesAddressRepository: AssociatesAddressRepository) {}
  
  async execute(associate_id: string): Promise<AssociateAddress[]> {
    return await this.AssociatesAddressRepository.list(associate_id)
  }
}