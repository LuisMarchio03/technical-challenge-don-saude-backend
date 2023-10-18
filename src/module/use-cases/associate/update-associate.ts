import { AssociatesRepository } from '../../repositories/associates-repository'

interface UpdateAssociateUseCaseRequest {
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

export class UpdateAssociateUseCase {
  constructor(private AssociatesRepository: AssociatesRepository) {}
  
  async execute(
    id: string,
    {
      name,
      email,
      cnpj,
      phone,
      cellphone,
      responsible_clinic,
      responsible_finance,
      category,
      password,
    }: UpdateAssociateUseCaseRequest): Promise<void> {
      const associateExits = await this.AssociatesRepository.listAssociate(id)

      if (!associateExits) {
        throw new Error('Associate not found')
      }

      await this.AssociatesRepository.update(id, {
        name,
        email,
        cnpj,
        phone,
        cellphone,
        responsible_clinic,
        responsible_finance,
        category,
        password,
      })
    
  }
}