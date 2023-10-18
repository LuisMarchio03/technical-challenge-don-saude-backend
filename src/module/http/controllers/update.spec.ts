import { prisma } from '../../lib/prisma'
import { app } from '../../../app'
import request from 'supertest'
import { afterAll, describe, expect, it } from 'vitest'
import { CreateAssociateUseCase } from '../../use-cases/create-associate'
import { PrismaAssociatesRepository } from '../../repositories/prisma/prisma-associates-repository'

let repository = new PrismaAssociatesRepository()
let createAssociateUseCase = new CreateAssociateUseCase(repository)

describe('Update Associate (e2e)', () => {
  afterAll(async () => {
    const existingAssociate = await prisma.associate.findUnique({
      where: {
        email: "any05@gmail.com",
      },
    });

    if (existingAssociate) {
      await prisma.associate.delete({
        where: {
          email: "any05@gmail.com",
        },
      });
    }
  });

  it('should be able to update a associate', async () => {
    await createAssociateUseCase.execute({
      name: "any05",
      email: "any05@gmail.com",
      cnpj: "123123123",
      phone: "(64) 9 99991-8525",
      cellphone: "(64) 9 99991-8525",
      responsible_clinic: "any 01",
      responsible_finance: "any 02",
      category: "any 03",
      password: "123456"
    })

    const associate = await prisma.associate.findUnique({
      where: {
        email: "any05@gmail.com",
      }
    })

    const profileResponse = await request(app)
      .put(`/associate/update/${associate?.id}`)
      .send({
        name: "any_update",
        email: "any_update@gmail.com",
        cnpj: "123123123",
        phone: "(64) 9 99991-8525",
        cellphone: "(64) 9 99991-8525",
        responsible_clinic: "any 01",
        responsible_finance: "any 02",
        category: "any 03",
        password: "123456"
      })

    expect(profileResponse.statusCode).toEqual(200)
  })
})