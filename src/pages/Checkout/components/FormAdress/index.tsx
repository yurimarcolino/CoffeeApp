import {
  FormAdressContainerStyled,
  FormFieldsStyled,
  FormHeaderStyled,
} from './styles'
import { MapPinLine } from 'phosphor-react'
export function FormAdress() {
  return (
    <FormAdressContainerStyled>
      <FormHeaderStyled>
        <MapPinLine size={22} weight="duotone" style={{ color: '#C47F17' }} />
        <div>
          <p className="Title">Endereço de Entrega</p>
          <p className="Subtitle">
            Informe o endereço onde deseja receber seu pedido
          </p>
        </div>
      </FormHeaderStyled>
      <FormFieldsStyled>
        <input id="postal-code" type="text" placeholder="CEP" />
        <input id="street-adress" type="text" placeholder="Rua" />
        <div className="ComplementContainer">
          <input id="number" type="text" placeholder="Número" />
          <input id="complement" type="text" placeholder="Complemento" />
        </div>
        <div className="CityContainer">
          <input id="distric" type="text" placeholder="Bairro" />
          <input id="city" type="text" placeholder="Cidade" />
          <input id="uf" type="text" placeholder="UF" />
        </div>
      </FormFieldsStyled>
    </FormAdressContainerStyled>
  )
}
