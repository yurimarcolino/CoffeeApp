import styled from 'styled-components'

export const IntroContainerStyled = styled.div`
  display: flex;
  flex-direction: row;

  height: 100%;
  max-height: 34rem;

  padding: 5.875rem 0rem;
  gap: 4.8125rem;
`
export const TitleContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
`
export const TitleContentStyled = styled.div`
  width: 36.75rem;

  .CoffeeTitle {
    height: 7.75rem;

    line-height: 3.875rem;
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 3rem;

    color: ${(props) => props.theme['brown-900']};
  }

  .CoffeeDescription {
    margin: 1rem 0 4.125rem 0;
    height: 3.25rem;
    line-height: 1.625rem;

    font-weight: 400;
    font-size: 1.25rem;

    color: ${(props) => props.theme['brown-600']};
  }
`
export const ItemsContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
`

export const ItemContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 18.375rem;

  div:first-child {
    margin-bottom: 1rem;
  }
`

export const ItemContentStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  img {
    margin-right: 0.75rem;
  }
`
