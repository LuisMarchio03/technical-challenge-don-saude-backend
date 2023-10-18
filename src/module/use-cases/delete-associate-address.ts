import { AssociatesAddressRepository } from '../repositories/associate-address-repository'

export class DeleteAssociateAddressUseCase {
  constructor(private AssociatesAddressRepository: AssociatesAddressRepository) {}
  
  async execute(id: string): Promise<void> {
    const associate = await this.AssociatesAddressRepository.list(id)

    if (!associate) {
      throw new Error('Associate not found')
    }

    await this.AssociatesAddressRepository.delete(id)
  }
}