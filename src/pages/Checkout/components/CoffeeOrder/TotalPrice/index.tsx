import { TotalPriceContainerStyled } from './styles'

export function TotalPrice() {
  return (
    <TotalPriceContainerStyled>
      <div>
        <span>Total de itens</span>
        <span>R$ 29,70</span>
      </div>
      <div>
        <span>Entrega</span>
        <span>R$ 3,50</span>
      </div>
      <div>
        <span id="total-text">Total</span>
        <span id="total-price">R$ 33,20</span>
      </div>
    </TotalPriceContainerStyled>
  )
}
