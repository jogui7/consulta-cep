import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateCeps1614188337590 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'ceps',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            generationStrategy: 'increment'
          },
          {
            name: 'cep',
            type: 'varchar',
            isNullable: false,
            isUnique: true
          },
          {
            name: 'logradouro',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'complemento',
            type: 'varchar',
            isNullable: true
          },
          {
            name: 'bairro',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'localidade',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'uf',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'ibge',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'gia',
            type: 'varchar',
            isNullable: true
          },
          {
            name: 'ddd',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'siafi',
            type: 'varchar',
            isNullable: false
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('ceps')
  }
}
