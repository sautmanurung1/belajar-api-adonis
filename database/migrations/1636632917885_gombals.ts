import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Gombals extends BaseSchema {
  protected tableName = 'gombals'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('gombal')
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: false })
      table.timestamp('updated_at', { useTz: false })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
