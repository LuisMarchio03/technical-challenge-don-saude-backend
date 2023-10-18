import { Request, Response } from 'express'

import { makeDeleteAssociateAddressUseCase } from '../../../use-cases/factories/make-delete-associate-address-use-case'

export class DeleteAssociateAddressController {

  async handler(req: Request, res: Response) {
    try {
      const { id } = req.params

      const deleteAssociateAddressUseCase = makeDeleteAssociateAddressUseCase()
      const associates = await deleteAssociateAddressUseCase.execute(id)
    
      return res.status(200).json(associates)
    } catch (err: any) {
      return res.status(400).json({ error: err.message })
    }
  }

}