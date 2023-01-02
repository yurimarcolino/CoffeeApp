import { Button } from '../../../../components/Button'
import { CoffeeSelected } from '../../../../components/CoffeeSelected'
import { useCartContext } from '../../../../context/CartContext'
import { CoffeeOrderContainerStyled } from './styles'
import { TotalPrice } from './TotalPrice'

export function CoffeeOrder() {
  const { cart } = useCartContext()

  return (
    <CoffeeOrderContainerStyled>
      {cart.map((coffee) => {
        return <CoffeeSelected key={coffee.id} coffee={coffee} />
      })}
      <TotalPrice cart={cart} />
      <Button
        content="Confirmar pedido"
        type="submit"
        disabled={cart.length === 0}
      />
    </CoffeeOrderContainerStyled>
  )
}
