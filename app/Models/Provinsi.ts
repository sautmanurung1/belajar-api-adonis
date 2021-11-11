import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Provinsi extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nama: string
}
