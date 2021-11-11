import { DateTime, NumberingSystem } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Gombal extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public gombal: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
