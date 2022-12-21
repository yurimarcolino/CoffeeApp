import {
  IntroContainerStyled,
  ItemsContainerStyled,
  ItemContentStyled,
  TitleContainerStyled,
  TitleContentStyled,
  ItemContainerStyled,
} from './styles'

import bigCoffeeSVG from '../../../../assets/big-coffee.svg'
import whiteCartSVG from '../../../../assets/white-cart.svg'
import packageSVG from '../../../../assets/package.svg'
import clockSVG from '../../../../assets/clock.svg'
import coffeeSVG from '../../../../assets/coffee.svg'

export function Intro() {
  return (
    <IntroContainerStyled>
      <TitleContainerStyled>
        <TitleContentStyled>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee delivery você recebe seu café onde estiver, a qualquer
            hora do dia
          </p>
        </TitleContentStyled>

        <ItemsContainerStyled>
          <ItemContainerStyled>
            <ItemContentStyled>
              <img src={whiteCartSVG} alt="cart icon" />
              <span>Compra Simples e segura</span>
            </ItemContentStyled>

            <ItemContentStyled>
              <img src={clockSVG} alt="clock icon" />
              <span>Entrega rápida e rastreada</span>
            </ItemContentStyled>
          </ItemContainerStyled>

          <ItemContainerStyled>
            <ItemContentStyled>
              <img src={packageSVG} alt="package icon" />
              <span>Embalagem mantém o café intacto</span>
            </ItemContentStyled>

            <ItemContentStyled>
              <img src={coffeeSVG} alt="cofffe icon" />
              <span>O café chega fresquinho até você</span>
            </ItemContentStyled>
          </ItemContainerStyled>
        </ItemsContainerStyled>
      </TitleContainerStyled>
      <img src={bigCoffeeSVG} alt="big coffee image" />
    </IntroContainerStyled>
  )
}
