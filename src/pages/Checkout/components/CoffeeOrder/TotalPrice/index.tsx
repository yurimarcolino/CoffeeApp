import { Coffee } from '../../../../../context/CartContext'
import { TotalPriceContainerStyled } from './styles'

interface TotalPriceProps {
  cart: Coffee[]
}

const DELIVERY_VALUE: number = 3.5

export function TotalPrice({ cart }: TotalPriceProps) {
  const cartValue = cart.reduce(
    (acc, item) => acc + parseFloat(item.price) * item.quantity,
    0,
  )

  let totalValue

  if (cart.length) {
    totalValue = cartValue + DELIVERY_VALUE
  } else {
    totalValue = cartValue
  }

  return (
    <TotalPriceContainerStyled>
      <div>
        <span>Total de itens</span>
        <span>R$ {cartValue.toFixed(2)}</span>
      </div>
      <div>
        <span>Entrega</span>
        <span>R$ {cart.length > 0 ? DELIVERY_VALUE : 0}</span>
      </div>
      <div>
        <span id="total-text">Total</span>
        <span id="total-price">R$ {totalValue.toFixed(2)}</span>
      </div>
    </TotalPriceContainerStyled>
  )
}
