import { useEffect, useState } from 'react'
import { getCoffees } from '../../services/coffees'
import { Coffee } from '../../services/model'
import { CoffeeCard } from '../CoffeeCard'
import { CoffeeCardListStyled } from './styles'

export function CoffeeCardList() {
  const [data, setData] = useState<Coffee[]>([])

  useEffect(() => {
    async function loadCoffees() {
      const { coffees } = await getCoffees()
      setData(coffees)
    }
    loadCoffees()
  }, [])

  return (
    <CoffeeCardListStyled>
      {data?.map((coffee) => {
        return (
          <div key={coffee.name}>
            <CoffeeCard
              imagePath={coffee.imagePath}
              tag={coffee.tag}
              name={coffee.name}
              description={coffee.description}
              price={coffee.price}
            />
          </div>
        )
      })}
    </CoffeeCardListStyled>
  )
}
