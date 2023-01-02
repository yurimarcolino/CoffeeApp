import * as zod from 'zod'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { CoffeeOrder } from './components/CoffeeOrder'
import { FormAdress } from './components/FormAdress'
import { FormPayment } from './components/FormSelectPayment'

import { CheckoutContainerStyled } from './styles'
import { useOrderContext } from '../../context/OrderContext'
import { useNavigate } from 'react-router-dom'

const newOrderFormValidationSchema = zod.object({
  postalCode: zod.string().min(5, { message: 'Postal code required' }),
  streetAdress: zod.string().min(5, { message: 'Street required' }),
  number: zod.string().min(1, { message: 'Number required' }),
  complement: zod.string(),
  district: zod.string().min(4, { message: 'District required' }),
  city: zod.string().min(4, { message: 'City required' }),
  uf: zod.string().min(2, { message: 'UF required' }),
})

export type NewOrderFormData = zod.infer<typeof newOrderFormValidationSchema>

export function Checkout() {
  const newOrderForm = useForm<NewOrderFormData>({
    mode: 'onSubmit',
    resolver: zodResolver(newOrderFormValidationSchema),
    defaultValues: {
      postalCode: '',
      streetAdress: '',
      number: '',
      complement: '',
      district: '',
      city: '',
      uf: '',
    },
  })

  const navigate = useNavigate()

  const { addOrderAdress } = useOrderContext()

  const { handleSubmit, reset } = newOrderForm

  function handleCreateNewOrder(data: NewOrderFormData) {
    addOrderAdress(data)
    reset()
    navigate('/success')
  }

  return (
    <CheckoutContainerStyled onSubmit={handleSubmit(handleCreateNewOrder)}>
      <div className="FormAdressContent">
        <h1>Complete seu pedido</h1>
        <FormProvider {...newOrderForm}>
          <FormAdress />
          <FormPayment />
        </FormProvider>
      </div>
      <div className="CoffeeOrderContent">
        <h1>Cafés selecionados</h1>
        <CoffeeOrder />
      </div>
    </CheckoutContainerStyled>
  )
}
