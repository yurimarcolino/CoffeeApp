import { NavLink } from 'react-router-dom'
import {
  CartQuantity,
  HeaderContainerStyled,
  LocationContainerStyled,
  NavContainerStyled,
} from './styles'

import logoSVG from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useCartContext } from '../../context/CartContext'

export function Header() {
  const { cart } = useCartContext()

  return (
    <HeaderContainerStyled>
      <a href="/">
        <img src={logoSVG} alt="coffee icon" />
      </a>
      <NavContainerStyled>
        <LocationContainerStyled>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </LocationContainerStyled>
        <nav>
          <NavLink to="/checkout" title="Checkout">
            <ShoppingCart size={22} weight="fill" />
          </NavLink>
          <CartQuantity aria-current={cart.length >= 1}>
            {cart.length >= 1 ? cart.length : null}
          </CartQuantity>
        </nav>
      </NavContainerStyled>
    </HeaderContainerStyled>
  )
}
