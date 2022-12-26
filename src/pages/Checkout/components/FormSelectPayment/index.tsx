import {
  FormPaymentContainerStyled,
  FormFieldsStyled,
  FormHeaderStyled,
} from './styles'
import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
export function FormPayment() {
  return (
    <FormPaymentContainerStyled>
      <FormHeaderStyled>
        <CurrencyDollar
          size={22}
          weight="duotone"
          style={{ color: '#8047F8' }}
        />
        <div>
          <p className="Title">Pagamento</p>
          <p className="Subtitle">
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </FormHeaderStyled>
      <FormFieldsStyled>
        <button type="button">
          <CreditCard size={16} weight="light" style={{ color: '#8047F8' }} />
          Cartão de crédito
        </button>
        <button type="button">
          <Bank size={16} weight="light" style={{ color: '#8047F8' }} />
          Cartão de débito
        </button>
        <button type="button">
          <Money size={16} weight="light" style={{ color: '#8047F8' }} />
          Dinheiro
        </button>
      </FormFieldsStyled>
    </FormPaymentContainerStyled>
  )
}
