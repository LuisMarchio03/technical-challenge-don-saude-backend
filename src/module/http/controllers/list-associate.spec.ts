import { prisma } from '../../lib/prisma'
import { app } from '../../../app'
import request from 'supertest'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { Associate } from '@prisma/client'

let associate: Associate

describe('List Associate (e2e)', () => {
  beforeAll(async () => {
      await prisma.associate.create({
        data: {
          name: "any03",
          email: "any03@gmail.com",
          cnpj: "123123123",
          phone: "(64) 9 99991-8525",
          cellphone: "(64) 9 99991-8525",
          responsible_clinic: "any 01",
          responsible_finance: "any 02",
          category: "any 03",
          password: "123456"
        }
      })

      associate = await prisma.associate.findUnique({
        where: {
          email: "any03@gmail.com"
        }
      }) as Associate
  })

  afterAll(async () => {
    const existingAssociate = await prisma.associate.findUnique({
      where: {
        email: "any03@gmail.com",
      },
    });

    if (existingAssociate) {
      await prisma.associate.delete({
        where: {
          email: "any03@gmail.com",
        },
      });
    }
  });


  it('should be able to list one associate', async () => {
    const profileResponse = await request(app)
      .get(`/list/associate/${associate.id}`)
      .send()

    expect(profileResponse.statusCode).toEqual(200)
  })
})