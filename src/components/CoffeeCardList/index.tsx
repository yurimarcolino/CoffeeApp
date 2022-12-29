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
          <div key={coffee.id}>
            <CoffeeCard coffee={coffee} />
          </div>
        )
      })}
    </CoffeeCardListStyled>
  )
}
