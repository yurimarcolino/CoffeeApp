import styled from 'styled-components'

export const CheckoutContainerStyled = styled.form`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  padding-bottom: 240px;
  padding-top: 40px;

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

export const ErrorStyled = styled.p`
  position: absolute;
  bottom: 41.5px;
  color: red;
  font-size: 0.65rem;
`

export const InputContainerStyled = styled.div`
  position: relative;
  margin-bottom: 1rem;

  input {
    display: flex;
    align-items: center;
    padding: 0.75rem;

    height: 2.625rem;

    background: ${(props) => props.theme['gray-300']};

    border: 0.0625rem solid ${(props) => props.theme['gray-400']};
    border-radius: 0.25rem;
  }
`
