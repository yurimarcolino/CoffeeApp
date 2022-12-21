import { NavLink } from 'react-router-dom'
import {
  HeaderContainerStyled,
  LocationContainerStyled,
  NavContainerStyled,
} from './styles'

import logoSVG from '../../assets/logo.svg'
import locationSVG from '../../assets/location.svg'
import cartSVG from '../../assets/cart.svg'

export function Header() {
  return (
    <HeaderContainerStyled>
      <img src={logoSVG} alt="coffee icon" />
      <NavContainerStyled>
        <LocationContainerStyled>
          <img src={locationSVG} alt="location icon" />
          <span>Porto Alegre, RS</span>
        </LocationContainerStyled>
        <nav>
          <NavLink to="/checkout" title="Checkout">
            <img src={cartSVG} alt="cart icon" />
          </NavLink>
        </nav>
      </NavContainerStyled>
    </HeaderContainerStyled>
  )
}
