import { Request, Response } from 'express'

import { makeListAssociatesUseCase } from '../../use-cases/factories/make-list-associates-use-case' 

export class ListAssociatesController {

  async handler(req: Request, res: Response) {
    try {
      const listAssociateUseCase = makeListAssociatesUseCase()
      const associates = await listAssociateUseCase.execute()
    
      return res.status(200).json(associates)
    } catch (err: any) {
      return res.status(400).json({ error: err.message })
    }
  }

}