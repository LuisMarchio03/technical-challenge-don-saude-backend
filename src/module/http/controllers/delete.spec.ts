import { prisma } from '../../lib/prisma'
import { app } from '../../../app'
import request from 'supertest'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { Associate } from '@prisma/client'

let associate: Associate

describe('Delete Associate (e2e)', () => {
  beforeAll(async () => {
      await prisma.associate.create({
        data: {
          name: "any07",
          email: "any07@gmail.com",
          cnpj: "123123123",
          phone: "(64) 9 99991-8525",
          cellphone: "(64) 9 99991-8525",
          responsible_clinic: "any 01",
          responsible_finance: "any 02",
          category: "any 07",
          password: "123456"
        }
      })

      associate = await prisma.associate.findUnique({
        where: {
          email: "any07@gmail.com"
        }
      }) as Associate
  })

  afterAll(async () => {
    const existingAssociate = await prisma.associate.findUnique({
      where: {
        email: "any07@gmail.com",
      },
    });

    if (existingAssociate) {
      await prisma.associate.delete({
        where: {
          email: "any07@gmail.com",
        },
      });
    }
  });


  it('should be able to delete associate', async () => {
    const profileResponse = await request(app)
      .delete(`/associate/delete/${associate.id}`)
      .send()

    expect(profileResponse.statusCode).toEqual(200)
  })
})