import { AssociatesRepository } from '../repositories/associates-repository'

export class DeleteAssociateUseCase {
  constructor(private AssociatesRepository: AssociatesRepository) {}
  
  async execute(id: string): Promise<void> {
    const associate = await this.AssociatesRepository.listAssociate(id)

    if (!associate) {
      throw new Error('Associate not found')
    }

    await this.AssociatesRepository.delete(id)
  }
}