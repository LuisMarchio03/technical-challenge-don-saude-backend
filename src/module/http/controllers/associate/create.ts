import { Request, Response } from 'express'
import z from 'zod'

import { makeCreateAssociateUseCase } from '../../../use-cases/factories/make-create-associate-use-case' 

export class CreateController {
  async handler(req: Request, res: Response) {
    try {
      const createBodySchema = z.object({
        name: z.string(),
        email: z.string(),
        cnpj: z.string(),
        phone: z.string(),
        cellphone: z.string(),
        responsible_clinic: z.string(),
        responsible_finance: z.string(),
        category: z.string(),
        password: z.string(),
      })
    
      const { 
        name,
        email,
        cnpj,
        phone,
        cellphone,
        responsible_clinic,
        responsible_finance,
        category,
        password,
       } = createBodySchema.parse(req.body)
    
      const createAssociateUseCase = makeCreateAssociateUseCase()
    
      await createAssociateUseCase.execute({
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
    
      return res.status(201).send()
    } catch (err: any) {
      return res.status(400).json({ error: err.message })
    }
  }

}