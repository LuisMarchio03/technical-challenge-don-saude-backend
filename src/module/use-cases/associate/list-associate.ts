import { Associate } from '@prisma/client'
import { AssociatesRepository } from '../../repositories/associates-repository'

export class ListAssociateUseCase {
  constructor(private AssociatesRepository: AssociatesRepository) {}
  
  async execute(id: string): Promise<Associate> {
    return await this.AssociatesRepository.listAssociate(id)
  }
}