import { Request, Response } from 'express'

import { makeListAssociateUseCase } from '../../../use-cases/factories/make-list-associate-use-case' 

export class ListAssociateController {

  async handler(req: Request, res: Response) {
    try {
      const { id } = req.params

      const listAssociateUseCase = makeListAssociateUseCase()
      const associates = await listAssociateUseCase.execute(id)
    
      return res.status(200).json(associates)
    } catch (err: any) {
      return res.status(400).json({ error: err.message })
    }
  }

}