import { prisma } from '../../../lib/prisma'
import { app } from '../../../../app'
import request from 'supertest'
import { afterAll, describe, expect, it } from 'vitest'

describe('List Associates (e2e)', () => {
  afterAll(async () => {
    const existingAssociate = await prisma.associate.findUnique({
      where: {
        email: "any02@gmail.com",
      },
    });

    if (existingAssociate) {
      await prisma.associate.delete({
        where: {
          email: "any02@gmail.com",
        },
      });
    }
  });


  it('should be able to list all associates', async () => {
    await request(app)
      .post('/associate/create')
      .send({
        name: "any02",
        email: "any02@gmail.com",
        cnpj: "123123123",
        phone: "(64) 9 99991-8525",
        cellphone: "(64) 9 99991-8525",
        responsible_clinic: "any 01",
        responsible_finance: "any 02",
        category: "any 03",
        password: "123456"
      })

    const profileResponse = await request(app)
      .get('/list/associates')
      .send()

    expect(profileResponse.statusCode).toEqual(200)
  })
})