import styled from 'styled-components'

export const HeaderContainerStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0rem;
  gap: 51.25rem;
`

export const NavContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.75rem;

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    width: 2.375rem;
    height: 2.375rem;
    border-radius: 0.375rem;

    background-color: ${(props) => props.theme['yellow-100']};

    svg {
      color: ${(props) => props.theme['yellow-900']};
    }
  }
`

export const CartQuantity = styled.span`
  &[aria-current='true'] {
    position: absolute;
    width: 20px;
    height: 20px;
    right: -8.35px;
    top: -8px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: ${(props) => props.theme['yellow-900']};
    border-radius: 100%;

    color: ${(props) => props.theme.white};
    font-size: 0.75rem;
    font-weight: bold;
    line-height: 1rem;
  }
`

export const LocationContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 0.25rem;

  width: 8.9375rem;
  height: 2.375rem;

  background-color: ${(props) => props.theme['purple-100']};
  border-radius: 0.375rem;

  svg {
    color: ${(props) => props.theme['purple-500']};
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['purple-500']};
  }
`
