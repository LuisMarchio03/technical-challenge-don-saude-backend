import { Request, Response } from 'express'

import { makeListAssociateAddressUseCase } from '../../use-cases/factories/make-list-associate-address-use-case' 

export class ListAssociateAddressController {

  async handler(req: Request, res: Response) {
    try {
      const { id } = req.params

      const listAssociateAddressUseCase = makeListAssociateAddressUseCase()
      const associates = await listAssociateAddressUseCase.execute(id)
    
      return res.status(200).json(associates)
    } catch (err: any) {
      return res.status(400).json({ error: err.message })
    }
  }

}