import { Button } from '../../../../components/Button'
import { CoffeeSelected } from '../../../../components/CoffeeSelected'
import { CoffeeOrderContainerStyled } from './styles'
import { TotalPrice } from './TotalPrice'

export function CoffeeOrder() {
  return (
    <CoffeeOrderContainerStyled>
      <CoffeeSelected />
      <CoffeeSelected />
      <TotalPrice />
      <Button />
    </CoffeeOrderContainerStyled>
  )
}
