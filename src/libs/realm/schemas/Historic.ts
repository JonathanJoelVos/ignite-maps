/* eslint-disable camelcase */
import { Realm } from '@realm/react'

type GenerateProps = {
  user_id: string
  license_plate: string
  description: string
}

// eslint-disable-next-line no-use-before-define
export class Historic extends Realm.Object<Historic> {
  _id!: string
  user_id!: string
  license_plate!: string
  description!: string
  status!: string
  created_at!: Date
  updated_at!: Date

  static generated({ description, license_plate, user_id }: GenerateProps) {
    return {
      _id: new Realm.BSON.UUID(),
      user_id,
      license_plate,
      description,
      status: 'departure',
      created_at: new Date(),
      updated_at: new Date(),
    }
  }

  static schema = {
    name: 'Historic',
    primaryKey: '_id',

    properties: {
      _id: 'uuid',
      user_id: {
        type: 'string',
        indexed: true, // cria um indice para essa coluna (para pesquisas mais rapidas)
      },
      license_plate: 'string',
      description: 'string',
      status: 'string',
      created_at: 'date',
      updated_at: 'date',
    },
  }
}
