import { useFormContext } from 'react-hook-form'

import {
  FormAdressContainerStyled,
  FormFieldsStyled,
  FormHeaderStyled,
} from './styles'
import { MapPinLine } from 'phosphor-react'
import { NewOrderFormData } from '../..'
import { ErrorStyled, InputContainerStyled } from '../../styles'
export function FormAdress() {
  const {
    register,
    formState: { errors },
  } = useFormContext<NewOrderFormData>()

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
        <InputContainerStyled>
          {errors.postalCode?.message && (
            <ErrorStyled>{errors.postalCode?.message}</ErrorStyled>
          )}
          <input
            id="postalCode"
            type="text"
            placeholder="CEP"
            {...register('postalCode')}
          />
        </InputContainerStyled>

        <InputContainerStyled>
          {errors.streetAdress?.message && (
            <ErrorStyled>{errors.streetAdress?.message}</ErrorStyled>
          )}
          <input
            id="streetAdress"
            type="text"
            placeholder="Rua"
            {...register('streetAdress')}
          />
        </InputContainerStyled>

        <div className="ComplementContainer">
          <InputContainerStyled>
            {errors.number?.message && (
              <ErrorStyled>{errors.number?.message}</ErrorStyled>
            )}
            <input
              id="number"
              type="text"
              placeholder="Número"
              {...register('number')}
            />
          </InputContainerStyled>

          <InputContainerStyled>
            <input
              id="complement"
              type="text"
              placeholder="Complemento"
              {...register('complement')}
            />
          </InputContainerStyled>
        </div>
        <div className="CityContainer">
          <InputContainerStyled>
            {errors.district?.message && (
              <ErrorStyled>{errors.district?.message}</ErrorStyled>
            )}
            <input
              id="distric"
              type="text"
              placeholder="Bairro"
              {...register('district')}
            />
          </InputContainerStyled>

          <InputContainerStyled>
            {errors.city?.message && (
              <ErrorStyled>{errors.city?.message}</ErrorStyled>
            )}
            <input
              id="city"
              type="text"
              placeholder="Cidade"
              {...register('city')}
            />
          </InputContainerStyled>

          <InputContainerStyled>
            {errors.uf?.message && (
              <ErrorStyled>{errors.uf?.message}</ErrorStyled>
            )}
            <input id="uf" type="text" placeholder="UF" {...register('uf')} />
          </InputContainerStyled>
        </div>
      </FormFieldsStyled>
    </FormAdressContainerStyled>
  )
}
