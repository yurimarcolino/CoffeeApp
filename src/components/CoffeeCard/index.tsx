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

export function CoffeeCard({
  description,
  imagePath,
  tag,
  name,
  price,
}: CoffeeProps) {
  return (
    <CoffeeCardContainerStyled>
      <header className="Header">
        <img src={imagePath} alt="coffee image" />
        <div className="TagListContainer">
          {tag.map((item, index) => {
            return (
              <div className="TagList" key={index}>
                <p>{item}</p>
              </div>
            )
          })}
        </div>
      </header>
      <strong className="CoffeeName">{name}</strong>
      <p className="CoffeeDescription">{description}</p>
      <footer className="Footer">
        <span className="CoffeePrice">
          R$ <strong>{price}</strong>
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
