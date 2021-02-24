import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('ceps')
class Cep {
  @PrimaryGeneratedColumn('increment')
  id: string

  @Column()
  cep: string

  @Column()
  logradouro: string

  @Column()
  complemento: string

  @Column()
  bairro: string

  @Column()
  localidade: string

  @Column()
  uf: string

  @Column()
  ibge: string

  @Column()
  gia: string

  @Column()
  ddd: string

  @Column()
  siafi: string
}

export default Cep
