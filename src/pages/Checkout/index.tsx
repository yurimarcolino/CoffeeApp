import { CoffeeOrder } from './components/CoffeeOrder'
import { FormAdress } from './components/FormAdress'
import { FormPayment } from './components/FormSelectPayment'
import { CheckoutContainerStyled } from './styles'

export function Checkout() {
  return (
    <CheckoutContainerStyled>
      <div className="FormAdressContent">
        <h1>Complete seu pedido</h1>
        <FormAdress />
        <FormPayment />
      </div>
      <div className="CoffeeOrderContent">
        <h1>Cafés selecionados</h1>
        <CoffeeOrder />
      </div>
    </CheckoutContainerStyled>
  )
}
