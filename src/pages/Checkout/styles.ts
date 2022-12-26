import styled from 'styled-components'

export const CheckoutContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;

  .FormAdressContent {
    display: flex;
    flex-direction: column;

    h1 {
      font-family: 'Baloo 2';
      font-size: 1.125rem;
      line-height: 1.4375rem;
      color: ${(props) => props.theme['brown-900']};
      margin-bottom: 0.9375rem;
    }
  }

  .CoffeeOrderContent {
    h1 {
      font-family: 'Baloo 2';
      font-size: 1.125rem;
      line-height: 1.4375rem;
      color: ${(props) => props.theme['brown-900']};
      margin-bottom: 0.9375rem;
    }
  }
`
