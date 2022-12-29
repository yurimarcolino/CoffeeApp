import { CoffeeCardContainerStyled } from './styles'
import { Plus, Minus, ShoppingCartSimple } from 'phosphor-react'
import { Coffee } from '../../services/model'
import { useCartContext } from '../../context/CartContext'
import { useState } from 'react'

interface CoffeeCardProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const { addCoffeeToCart } = useCartContext()
  const [coffeeQuantity, setCoffeeQuantity] = useState(1)

  function handleShopCoffee() {
    const coffeeSelected = {
      ...coffee,
      quantity: coffeeQuantity,
    }

    addCoffeeToCart(coffeeSelected)
  }

  function handleDecreaseCoffeeQuantity() {
    if (coffeeQuantity === 1) return
    setCoffeeQuantity((prev) => prev - 1)
  }
  function handleIncreaseCoffeeQuantity() {
    setCoffeeQuantity((prev) => prev + 1)
  }

  return (
    <CoffeeCardContainerStyled>
      <header className="Header">
        <img src={coffee.imagePath} alt="coffee image" />
        <div className="TagListContainer">
          {coffee.tag.map((item, index) => {
            return (
              <div className="TagList" key={index}>
                <p>{item}</p>
              </div>
            )
          })}
        </div>
      </header>
      <strong className="CoffeeName">{coffee.name}</strong>
      <p className="CoffeeDescription">{coffee.description}</p>
      <footer className="Footer">
        <span className="CoffeePrice">
          R$ <strong>{coffee.price}</strong>
        </span>
        <div className="CartOptions">
          <div>
            <button
              onClick={handleDecreaseCoffeeQuantity}
              disabled={coffeeQuantity === 1}
            >
              <Minus weight="bold" size={16} />
            </button>
            <span className="CoffeeQuantity">{coffeeQuantity}</span>
            <button onClick={handleIncreaseCoffeeQuantity}>
              <Plus weight="bold" size={15} />
            </button>
          </div>
          <button
            className="CartIconButtonContainer"
            onClick={handleShopCoffee}
          >
            <ShoppingCartSimple size={32} weight="fill" color="white" />
          </button>
        </div>
      </footer>
    </CoffeeCardContainerStyled>
  )
}
