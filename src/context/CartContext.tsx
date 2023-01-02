import React, { createContext, useContext, useEffect, useState } from 'react'

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
  removeItemsFromCart: () => void
}

interface CartContextProviderProps {
  children: React.ReactNode
}

const CartContext = createContext({} as CartContextData)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<Coffee[]>(() => {
    const storedState = localStorage.getItem('@coffee-app.1.0.0')

    if (!storedState) return []

    return JSON.parse(storedState)
  })

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

  useEffect(() => {
    const stateJSON = JSON.stringify(cart)

    localStorage.setItem('@coffee-app.1.0.0', stateJSON)
  }, [cart])

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

  function removeItemsFromCart() {
    setCart([])
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addCoffeeToCart,
        increaseCoffeeQuantityFromCart,
        decreaseCoffeeQuantityFromCart,
        removeCoffeeFromCart,
        removeItemsFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => {
  return useContext(CartContext)
}
