import { Minus, Plus, Trash } from 'phosphor-react'
import { CoffeeSelectedContainerStyled, DividerStyled } from './styled'

export function CoffeeSelected() {
  return (
    <CoffeeSelectedContainerStyled>
      <div className="CoffeeSelectedContent">
        <div className="CoffeeSelectedInfo">
          <img
            src="src/assets/expresso-tradicional.svg"
            alt="Coffee selected image"
          />
          <div className="CoffeeSelectedDetails">
            <p>Expresso Tradicional</p>
            <div className="CartOptions">
              <div>
                <button>
                  <Minus weight="bold" size={16} />
                </button>
                <span className="CoffeeSelectedQuantity">1</span>
                <button>
                  <Plus weight="bold" size={15} />
                </button>
              </div>
              <button className="RemoveIconButtonContainer">
                <Trash weight="bold" size={16} />
                Remover
              </button>
            </div>
          </div>
        </div>
        <span className="CoffeeSelectedPrice">R$ 9,90</span>
      </div>
      <DividerStyled />
    </CoffeeSelectedContainerStyled>
  )
}
