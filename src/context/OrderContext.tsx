import React, { createContext, useContext, useState } from 'react'

export interface OrderAdress {
  postalCode: string
  streetAdress: string
  number: string
  complement: string
  district: string
  city: string
  uf: string
}

interface OrderPayment {
  payment: string
}

interface OrderDetailsContextData {
  orderAdress: OrderAdress
  orderPayment: OrderPayment
  addOrderAdress: (orderAdress: OrderAdress) => void
  addOrderPayment: (payment: string) => void
}

interface CartContextProviderProps {
  children: React.ReactNode
}

const OrderDetailsContext = createContext({} as OrderDetailsContextData)

export function OrderContextProvider({ children }: CartContextProviderProps) {
  const [orderAdress, setOrderAdress] = useState<OrderAdress>({} as OrderAdress)
  const [orderPayment, setOrderPayment] = useState<OrderPayment>(
    {} as OrderPayment,
  )

  console.log({ orderAdress, orderPayment })

  function addOrderAdress(orderAdress: OrderAdress) {
    setOrderAdress(orderAdress)
  }

  function addOrderPayment(payment: string) {
    setOrderPayment({ payment })
  }

  return (
    <OrderDetailsContext.Provider
      value={{ orderAdress, orderPayment, addOrderAdress, addOrderPayment }}
    >
      {children}
    </OrderDetailsContext.Provider>
  )
}

export const useOrderContext = () => {
  return useContext(OrderDetailsContext)
}
