import React, { createContext, useContext, useState } from 'react'

export interface Coffee {
  id: string
  description: string
  imagePath: string
  name: string
  price: string
  quantity: number
}

interface CartContextData {
  cart: Coffee[]
  addCoffeeToCart: (coffee: Coffee) => void
  increaseCoffeeQuantityFromCart: (id: string) => void
  decreaseCoffeeQuantityFromCart: (id: string) => void
  removeCoffeeFromCart: (id: string) => void
}

interface CartContextProviderProps {
  children: React.ReactNode
}

const CartContext = createContext({} as CartContextData)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<Coffee[]>([])

  function increaseCoffeeQuantityFromCart(id: string) {
    const existingCoffee = cart.findIndex((coffee) => coffee.id === id)

    setCart((prev) =>
      prev.map((coffee) => {
        if (coffee.id === prev[existingCoffee].id) {
          return { ...coffee, quantity: coffee.quantity + 1 }
        }
        return coffee
      }),
    )
  }

  function decreaseCoffeeQuantityFromCart(id: string) {
    const existingCoffee = cart.find((coffee) => coffee.id === id)

    setCart((prev) =>
      prev.map((coffee) => {
        if (coffee.id === existingCoffee?.id && coffee.quantity > 1) {
          return { ...coffee, quantity: coffee.quantity - 1 }
        }
        return coffee
      }),
    )
  }

  function addCoffeeToCart(coffee: Coffee) {
    setCart((prev) => [...prev, coffee])
  }

  function removeCoffeeFromCart(id: string) {
    setCart((prev) => prev.filter((coffee) => coffee.id !== id))
  }

  function calculateCartTotalPrice(cart: Coffee[]): number {
    return cart.reduce(
      (acc, item) => acc + parseFloat(item.price) * item.quantity,
      0,
    )
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addCoffeeToCart,
        increaseCoffeeQuantityFromCart,
        decreaseCoffeeQuantityFromCart,
        removeCoffeeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => {
  return useContext(CartContext)
}
