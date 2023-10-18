import { prisma } from '../../lib/prisma'
import { app } from '../../../app'
import request from 'supertest'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'


describe('Create Associate (e2e)', () => {
  afterAll(async () => {
    const existingAssociate = await prisma.associate.findUnique({
      where: {
        email: "any@gmail.com",
      },
    });

    if (existingAssociate) {
      await prisma.associate.delete({
        where: {
          email: "any@gmail.com",
        },
      });
    }
  });

  it('should be able to create a associate', async () => {
    const profileResponse = await request(app)
      .post('/associate/create')
      .send({
        name: "any",
        email: "any@gmail.com",
        cnpj: "123123123",
        phone: "(64) 9 99991-8525",
        cellphone: "(64) 9 99991-8525",
        responsible_clinic: "any 01",
        responsible_finance: "any 02",
        category: "any 03",
        password: "123456"
      })

    expect(profileResponse.statusCode).toEqual(201)
  })
})