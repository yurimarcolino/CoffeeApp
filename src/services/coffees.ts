import db from './db.json'
import { Coffees } from './model'

export function getCoffees(): Promise<Coffees> {
  return new Promise((resolve) => {
    return resolve(db)
  })
}
