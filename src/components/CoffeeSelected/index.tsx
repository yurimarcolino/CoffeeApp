import { Minus, Plus, Trash } from 'phosphor-react'
import { useCartContext } from '../../context/CartContext'
import { CoffeeSelectedContainerStyled, DividerStyled } from './styled'

interface Coffee {
  id: string
  description: string
  imagePath: string
  name: string
  price: string
  quantity: number
}

interface CoffeeSelectedProps {
  coffee: Coffee
}

export function CoffeeSelected({ coffee }: CoffeeSelectedProps) {
  const {
    decreaseCoffeeQuantityFromCart,
    increaseCoffeeQuantityFromCart,
    removeCoffeeFromCart,
  } = useCartContext()

  const total = parseFloat(coffee.price) * coffee.quantity

  return (
    <CoffeeSelectedContainerStyled>
      <div className="CoffeeSelectedContent">
        <div className="CoffeeSelectedInfo">
          <img src={coffee.imagePath} alt="Coffee selected image" />
          <div className="CoffeeSelectedDetails">
            <p>{coffee.name}</p>
            <div className="CartOptions">
              <div>
                <button
                  disabled={coffee.quantity === 1}
                  onClick={() => decreaseCoffeeQuantityFromCart(coffee.id)}
                >
                  <Minus weight="bold" size={16} />
                </button>
                <span className="CoffeeSelectedQuantity">
                  {coffee.quantity}
                </span>
                <button
                  onClick={() => increaseCoffeeQuantityFromCart(coffee.id)}
                >
                  <Plus weight="bold" size={15} />
                </button>
              </div>
              <button
                className="RemoveIconButtonContainer"
                onClick={() => removeCoffeeFromCart(coffee.id)}
              >
                <Trash weight="bold" size={16} />
                Remover
              </button>
            </div>
          </div>
        </div>
        <span className="CoffeeSelectedPrice">R$ {total.toFixed(2)}</span>
      </div>
      <DividerStyled />
    </CoffeeSelectedContainerStyled>
  )
}
