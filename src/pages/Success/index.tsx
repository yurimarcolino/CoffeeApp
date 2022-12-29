import { SuccessContainerStyled } from './styles'
import illustrationSVG from '../../assets/illustration.svg'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

export function Success() {
  return (
    <SuccessContainerStyled>
      <header>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </header>
      <div className="DeliveryContainer">
        <div className="DeliveryContent">
          <div className="AddressContainer">
            <div className="SVGContainer" style={{ background: '#8047F8' }}>
              <MapPin size={16} weight="fill" />
            </div>
            <div className="AddressContent">
              <p>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </p>
              <p>Farrapos - Porto Alegre, RS</p>
            </div>
          </div>
          <div className="EstimatedDeliveryContainer">
            <div className="SVGContainer" style={{ background: '#DBAC2C' }}>
              <Timer size={16} weight="fill" />
            </div>
            <div className="EstimatedDeliveryContent">
              <p>Previsão de entrega</p>
              <strong>20 min - 30 min</strong>
            </div>
          </div>
          <div className="PaymentStatusContainer">
            <div className="SVGContainer" style={{ background: '#C47F17' }}>
              <CurrencyDollar size={16} weight="fill" />
            </div>
            <div className="PaymentStatusContent">
              <p>Pagamento na entrega</p>
              <strong>Cartão de Crédito</strong>
            </div>
          </div>
        </div>
        <img src={illustrationSVG} alt="Illustration deliveryman" />
      </div>
    </SuccessContainerStyled>
  )
}
