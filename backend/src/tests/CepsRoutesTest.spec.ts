import request from 'supertest'
import app from '../app'

describe('Consulta o CEP', () => {
  it('should return CEP data', async done => {
    const response = await request(app).get('/ceps/81540300')

    expect(response.body).toMatchObject({
      id: expect.any(String),
      bairro: 'Jardim das Américas',
      cep: '81540300',
      complemento: '',
      ddd: '41',
      gia: '',
      ibge: '4106902',
      localidade: 'Curitiba',
      logradouro: 'Rua Comendador Correia Júnior',
      siafi: '7535',
      uf: 'PR'
    })

    done()
  })
})
