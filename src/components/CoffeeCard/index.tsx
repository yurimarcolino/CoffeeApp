import { CoffeeCardContainerStyled } from './styles'
import coffeSVG from '../../assets/expresso-tradicional.svg'
import { Plus, Minus, ShoppingCartSimple } from 'phosphor-react'

interface CoffeeProps {
  imagePath: string
  tag: string[]
  name: string
  description: string
  price: string
}

export function CoffeeCard() {
  return (
    <CoffeeCardContainerStyled>
      <header className="Header">
        <img src={coffeSVG} alt="coffee image" />
        <div>
          <p>tradicional</p>
        </div>
      </header>
      <strong className="CoffeeName">Expresso Tradicional</strong>
      <p className="CoffeeDescription">
        O tradicional café feito com água quente e grãos moídos
      </p>
      <footer className="Footer">
        <span className="CoffeePrice">
          R$ <strong>9,90</strong>
        </span>
        <div className="CartOptions">
          <div>
            <button>
              <Minus weight="bold" size={16} />
            </button>
            <span className="CoffeeQuantity">1</span>
            <button>
              <Plus weight="bold" size={15} />
            </button>
          </div>
          <button className="CartIconButtonContainer">
            <ShoppingCartSimple size={32} weight="fill" color="white" />
          </button>
        </div>
      </footer>
    </CoffeeCardContainerStyled>
  )
}
