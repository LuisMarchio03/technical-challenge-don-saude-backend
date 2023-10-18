import { Request, Response } from 'express'
import z from 'zod'

import { makeCreateAssociateAddressUseCase } from '../../../use-cases/factories/make-create-associate-address-use-case' 

export class CreateAddressController {
  async handler(req: Request, res: Response) {
    try {
      const createAddressBodySchema = z.object({
        address: z.string().min(1).max(255),
        associate_id: z.string().uuid().min(1).max(255),
        cep: z.string().min(1).max(255),
        complement: z.string().min(1).max(255),
        neighborhood: z.string().min(1).max(255),
        number: z.string().min(1).max(255),
      })
    
      const { 
        address,
        associate_id,
        cep,
        complement,
        neighborhood,
        number,
       } = createAddressBodySchema.parse(req.body)
    
      const createAddressAssociateUseCase = makeCreateAssociateAddressUseCase()
    
      await createAddressAssociateUseCase.execute({
        address,
        associate_id,
        cep,
        complement,
        neighborhood,
        number,
      })
    
      return res.status(201).send()
    } catch (err: any) {
      return res.status(400).json({ error: err.message })
    }
  }

}