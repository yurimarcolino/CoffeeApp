import { CoffeeCardList } from '../../components/CoffeeCardList'
import { Intro } from './components/Intro'
import { CoffeeCardListContainerStyled, ContainerStyled } from './styles'

export function Home() {
  return (
    <ContainerStyled>
      <Intro />
      <h1>Nossos cafés</h1>
      <CoffeeCardListContainerStyled>
        <CoffeeCardList />
      </CoffeeCardListContainerStyled>
    </ContainerStyled>
  )
}
