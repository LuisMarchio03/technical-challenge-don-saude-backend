import { Associate } from '@prisma/client'
import { AssociatesRepository } from '../repositories/associates-repository'

export class ListAssociatesUseCase {
  constructor(private AssociatesRepository: AssociatesRepository) {}
  
  async execute(): Promise<Associate[]> {
    return await this.AssociatesRepository.listAssociates()
  }
}