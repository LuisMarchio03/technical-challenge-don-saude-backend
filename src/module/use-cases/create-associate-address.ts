import { AssociatesAddressRepository } from '../repositories/associate-address-repository'

interface CreateAssociateAddressUseCaseRequest {
  address: string,
  associate_id: string,
  cep: string,
  complement: string,
  neighborhood: string,
  number: string,
}

interface CreateAssociateAddressUseCaseResponse {
  address: string,
  associate_id: string,
  cep: string,
  complement: string,
  neighborhood: string,
  number: string,
}

export class CreateAssociateAddressUseCase {
  constructor(private AssociatesAddressRepository: AssociatesAddressRepository) {}
  
  async execute({
    address,
    associate_id,
    cep,
    complement,
    neighborhood,
    number,
  }: CreateAssociateAddressUseCaseRequest): Promise<CreateAssociateAddressUseCaseResponse> {
    const associateAddressAlreadyExists = await this.AssociatesAddressRepository.findByCep(cep)

    const associateAddress = await this.AssociatesAddressRepository.create({
      address,
      associate_id,
      cep,
      complement,
      neighborhood,
      number,
    })
    return associateAddress
  }
}