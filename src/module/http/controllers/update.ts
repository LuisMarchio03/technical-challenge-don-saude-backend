import { Request, Response } from 'express'
import z from 'zod'

import { makeUpdateAssociateUseCase } from '../../use-cases/factories/make-update-associate-use-case' 

export class UpdateController {
  async handler(req: Request, res: Response) {
    try {
      const updateBodySchema = z.object({
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
      
      const { id } = req.params
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
       } = updateBodySchema.parse(req.body)
    
      const updateAssociateUseCase = makeUpdateAssociateUseCase()
    
      await updateAssociateUseCase.execute(
        id,
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
        }
      )
    
      return res.status(200).send()
    } catch (err: any) {
      return res.status(400).json({ error: err.message })
    }
  }

}