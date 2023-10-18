import { Request, Response } from 'express'

import { makeDeleteAssociateUseCase } from '../../../use-cases/factories/make-delete-associate-use-case'

export class DeleteAssociateController {

  async handler(req: Request, res: Response) {
    try {
      const { id } = req.params

      const deleteAssociateUseCase = makeDeleteAssociateUseCase()
      const associates = await deleteAssociateUseCase.execute(id)
    
      return res.status(200).json(associates)
    } catch (err: any) {
      return res.status(400).json({ error: err.message })
    }
  }

}