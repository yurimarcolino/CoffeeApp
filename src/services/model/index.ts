export interface Coffee {
  id: string
  imagePath: string
  tag: string[]
  name: string
  description: string
  price: string
}

export interface Coffees {
  coffees: Coffee[]
}
