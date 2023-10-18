import { AssociatesRepository } from '../../repositories/associates-repository'

interface CreateAssociateUseCaseRequest {
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

interface CreateAssociateUseCaseResponse {
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

export class CreateAssociateUseCase {
  constructor(private AssociatesRepository: AssociatesRepository) {}
  
  async execute({
    name,
    email,
    cnpj,
    phone,
    cellphone,
    responsible_clinic,
    responsible_finance,
    category,
    password,
  }: CreateAssociateUseCaseRequest): Promise<CreateAssociateUseCaseResponse> {
    const associatesAlreadyExists = await this.AssociatesRepository.findByEmail(email)

    if (associatesAlreadyExists) {
      throw new Error('Associate already exists')
    }

    const associate = await this.AssociatesRepository.create({
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
    return associate
  }
}