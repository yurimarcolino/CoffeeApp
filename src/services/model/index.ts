export interface Coffee {
  imagePath: string
  tag: string[]
  name: string
  description: string
  price: string
}

export interface Coffees {
  coffees: Coffee[]
}
